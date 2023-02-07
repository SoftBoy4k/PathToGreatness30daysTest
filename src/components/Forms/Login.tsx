import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks/redux-hooks";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Form from "./Form";
import { setUser } from "../../store/slices/userSlice";
 
const Login = () => {

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handlerLogin = (email: string, password: string): void => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                }));
                navigate('/');
            })
            .catch(err => console.log(err));
    }

    return (
        <Form title="Sing In" handleClick={handlerLogin}/>
    )
}

export default Login