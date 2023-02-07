import { FC, useState } from "react";
import "./Form.css"

interface FormProps {
    title: string,
    handleClick: (email: string, password: string) => void
}

const Form: FC<FormProps> = ({title, handleClick}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        
        <div className="form">
            <input 
                className="form__input"
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email"
            />
            <input 
                className="form__input"
                type="password"
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password"
            />

            <button 
                className="form__btn"
                onClick={ () => {
                    handleClick(email, password);
                }}
            >
                {title}
            </button> 

        </div>
    )
}

export default Form 