import { I18nextProvider } from "react-i18next";
import { userRole } from "../../../util/auth";
import NewProject from "./NewProject";
import TableProjects from "./TableProjects";
import i18next from "../utils/i18n";

export const i18n = i18next;


const Projects =  () => {
   
    
    return (
        <I18nextProvider i18n={i18n} >
            <div className="flex justify-end-safe mr-48 mt-8 ">
                { (userRole() === 'ADMIN' || userRole() === 'SUPERVISOR') && <NewProject />}
            </div>
            <div className= "px-40">
                <TableProjects />
            </div>
        </I18nextProvider>
    )
}
export default Projects;