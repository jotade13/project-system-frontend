import { useTranslation } from "react-i18next";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "../ui/navigation-menu";
import { Link } from "react-router";

const NavMenu = () => {
    const {t} = useTranslation();
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <Link to="/dashboard" className={location.pathname === "/dashboard" ? navigationMenuTriggerStyle() + ' active' : navigationMenuTriggerStyle()}>
                        {t('header.dashboard')}
                    </Link>   
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link to="/tasks" className={location.pathname === "/tasks" ? navigationMenuTriggerStyle() + 'active' : navigationMenuTriggerStyle()}>
                            {t('header.tasks')}
                    </Link>   
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link to="/projects" className={location.pathname === "/projects" ? navigationMenuTriggerStyle() + 'active' : navigationMenuTriggerStyle()}>
                        {t('header.projects')}
                    </Link>   
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}
export default NavMenu;