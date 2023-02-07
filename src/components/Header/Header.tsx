import { useState } from "react";
import { useAppDispatch } from "../../hooks/redux-hooks";
import { useAuth } from "../../hooks/useAuth";
import { useLanguage } from "../../hooks/useLanguage";
import { switchLanguage } from "../../store/slices/languageSlice";
import { removeUser } from "../../store/slices/userSlice";
import "./Header.css";
import Menu from "./Menu/Menu";


const Header = () => {

    const {isAuth, email} = useAuth();
    const dispatch = useAppDispatch();
    const [openMenu, setOpenMenu] = useState(false);
    const lang = useLanguage()

    const handleClick = (): void => {
        dispatch(removeUser());
        handleClose();
    };

    const handleMenu = () => {
        setOpenMenu(!openMenu);
    };

    const handleClose = () => {
        setOpenMenu(false);
    };

    const changeLanguage = (): void => {
        dispatch(switchLanguage());
    };

    const getUserLogo = (): string => {
        let logo: string[] | undefined = email?.split("");
        return logo !== undefined ? `${logo[0].toUpperCase()}${logo[1].toUpperCase()}` : "US";
    }

    return (
        <div className="header">
            <h2>{lang === 'ru' ? "Путь к великому" : "Path To Greatness"}</h2>
                {isAuth ? (
                    <div className="header__btns">
                        <button className="language__btn" onClick={changeLanguage}>{ lang }</button>
                        <button className="avatar__btn" onClick={handleMenu}>{getUserLogo()}</button>
                    </div>
                ) : 
                (   
                    <button className="login__btn" onClick={handleClick}>Log in</button>
                )}
            {openMenu ? <Menu handleClick={handleClick}/> : undefined}
        </div>
    )
}

export default Header