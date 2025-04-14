import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs"
import LoginForm from "../components/login/LoginForm"
import RegisterForm from "../components/login/RegisterForm"

const Login =  () => {
    return (
        <Tabs defaultValue="account" className="w-[400px] h-full justify-center self-center m-auto m">
            <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="login">Iniciar Sesión</TabsTrigger>
                <TabsTrigger value="register">Registrar</TabsTrigger>
            </TabsList>
            <LoginForm />
            <RegisterForm/>
        </Tabs>
    )
}
export default Login;