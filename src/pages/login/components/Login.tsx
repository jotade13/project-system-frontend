import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "../../../components/ui/Tabs"
//import RegisterForm from "./RegisterForm"
import LoginForm from "./LoginForm"
import { useTranslation } from "react-i18next"

const Login =  () => {
    const {t} = useTranslation();

    return (
        <Tabs defaultValue="login" className="mt-[50px] w-[400px] h-full justify-center self-center m-auto">
            <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="login">{t('login.title')}</TabsTrigger>
                <TabsTrigger value="register">{t('register.title')}</TabsTrigger>
            </TabsList>
            <LoginForm />
        </Tabs>
    )
}
export default Login;