import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu"
import { Button } from "../ui/button"
import { LanguagesIcon } from "lucide-react";
import { useTranslation } from "react-i18next";

const LanguageToggle = () => {

    const { t, i18n } = useTranslation();

    const changeLanguage = (lng:string) => {
        i18n.changeLanguage(lng);
      };
    

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                    <LanguagesIcon />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => changeLanguage('es')} >{t('language.spanish')}</DropdownMenuItem>
                <DropdownMenuItem onClick={() => changeLanguage('en')} >{t('language.english')}</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
export default LanguageToggle;