import {useNavigate } from "react-router";
import { ModeToggle } from "./ModeToggle";
import { Button } from "./ui/button";
import { getAuthToken } from "../util/auth";
import { useTranslation } from "react-i18next";
const Header = () => {
    const navigate = useNavigate();
    const {t} = useTranslation();

    const handleLogout = () => {
        localStorage.setItem('token','')
        navigate('/login')
    }

    return (
        <header className="flex w-full border-b-2">
            <p className="text-4xl w-full">{t('header.title')}</p>
            <div className="flex mr-4 my-2 space-x-3">
                <ModeToggle />
                {getAuthToken() && <Button onClick={handleLogout}>{t('header.button')}</Button> }
            </div>
        </header>
    )
}
export default Header;