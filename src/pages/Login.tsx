import InputLabel from "../components/InputLabel"
import { Button } from "../components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs"

const Login =  () => {
    return (
        <Tabs defaultValue="account" className="w-[400px] justify-center self-center m-auto m">
            <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="account">Iniciar Sesión</TabsTrigger>
                <TabsTrigger value="password">Registrar</TabsTrigger>
            </TabsList>
            <TabsContent value="account">
                <Card>
                <CardHeader>
                    <CardTitle>Iniciar Sesión</CardTitle>
                    <CardDescription>
                        Puedes iniciar sesión aquí
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                    <InputLabel name="correo" label="Correo" placeholder="correo@correo.com" type="email" />
                    <InputLabel name="contraseña" label="Contraseña" placeholder="Contraseña" type="password" />
                </CardContent>
                <CardFooter>
                    <Button className="">Iniciar Sesión</Button>
                </CardFooter>
                </Card>
            </TabsContent>
            <TabsContent value="password">
                <Card>
                <CardHeader>
                    <CardTitle>Registrar</CardTitle>
                    <CardDescription>
                        Puedes registrarte aquí
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                    <InputLabel name="correo" label="Correo" placeholder="correo@correo.com" type="email" />
                    <InputLabel name="contraseña" label="Contraseña" placeholder="Contraseña" type="password" />
                    <InputLabel name="confirmar" label="Confirmar contraseña" placeholder="Contraseña" type="password" />
                </CardContent>
                <CardFooter>
                    <Button>Registrarse</Button>
                </CardFooter>
                </Card>
            </TabsContent>
        </Tabs>
    )
}
export default Login;