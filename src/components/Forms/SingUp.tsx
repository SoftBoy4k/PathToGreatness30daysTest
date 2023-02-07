import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks/redux-hooks";
import { setUser } from "../../store/slices/userSlice";
import Form from "./Form";


const SingUp = () => {

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handlerRegister = (email: string, password: string): void => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                }));
                navigate('/');
            })
            .catch((err) => {
                console.log(err)
            });
    }

    return (
        <Form title="Sing Up" handleClick={handlerRegister}/>
    )
}

export default SingUp