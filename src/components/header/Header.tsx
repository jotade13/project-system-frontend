import {useNavigate } from "react-router";
import  ThemeToggle  from "./ThemeToggle";
import LanguageToggle  from "./LanguageToggle";
import { Button } from "../ui/button";
import { getAuthToken } from "../../util/auth";
import { useTranslation } from "react-i18next";
import NavMenu from "./NavMenu";

const Header = () => {
    const navigate = useNavigate();
    const {t} = useTranslation();

    const handleLogout = () => {
        localStorage.setItem('token','')
        navigate('/login')
    }

    return (
        <header className="flex w-full border-b-2 h-14">
            <div className="w-full my-2 inline-flex" >
            <p className="text-3xl mr-4 ">{t('header.title')}</p>
                {getAuthToken() && <NavMenu />}
            </div>
            <div className="flex mr-4 my-2 space-x-3">      
                <LanguageToggle />
                <ThemeToggle />
                {getAuthToken() && <Button onClick={handleLogout}>{t('header.button')}</Button> }
            </div>
        </header>
    )
}
export default Header;