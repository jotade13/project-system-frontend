import { I18nextProvider } from "react-i18next";
import {
  Tabs,

} from "../../../components/ui/tabs"
//import RegisterForm from "./RegisterForm"
import LoginForm from "./LoginForm"
import i18next from "../utils/i18n";

export const i18n = i18next;


const Login =  () => {

    return (
        <I18nextProvider i18n={i18n} defaultNS={'translation'} >
            <Tabs defaultValue="login" className="mt-[50px] w-[400px] h-full justify-center self-center m-auto">
                <LoginForm />
            </Tabs>
        </I18nextProvider>
    )
}
export default Login;