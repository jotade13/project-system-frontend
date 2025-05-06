import  ThemeToggle  from "./ThemeToggle";
import LanguageToggle  from "./LanguageToggle";
import { getAuthToken } from "../../util/auth";
import { I18nextProvider } from "react-i18next";
import NavMenu from "./NavMenu";
import i18next from "../../util/i18n";
import ButtonLogout from "./ButtonLogout";
import HeaderTitle from "./HeaderTitle";

export const i18n = i18next;

const Header = () => {

    return (
        <I18nextProvider i18n={i18n}  >
            <header className="flex w-full border-b-2 h-14">
                <div className="w-full my-2 inline-flex" >
                    <HeaderTitle />
                    {getAuthToken() && <NavMenu />}
                </div>
                <div className="flex mr-4 my-2 space-x-3">      
                    <LanguageToggle />
                    <ThemeToggle />
                    {getAuthToken() &&  <ButtonLogout/> }
                </div>
            </header>
        </I18nextProvider>
    )
}
export default Header;