import { useNavigate } from "react-router";
import { Button } from "../ui/button"
import { useTranslation } from "react-i18next";

const ButtonLogout = () => {
    const navigate = useNavigate();
    const {t} = useTranslation();

    const handleLogout = () => {
        localStorage.setItem('token','')
        navigate('/login')
    }
    return (
        <Button onClick={handleLogout}>{t('header.button')}</Button>
    )

}
export default ButtonLogout