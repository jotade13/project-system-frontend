import { I18nextProvider } from 'react-i18next';
import { userRole } from '../../../util/auth';
import ASideDashboard from './ASideDashboard';

import i18next from '../utils/i18n';
import DashboardMain from './DashboardMain';

export const i18n = i18next;

const Dashboard =  () => {
   
    
    return (
        <I18nextProvider i18n={i18n} defaultNS={'translation'} >
            <div className='flex'>
            {(userRole() === 'ADMIN' || userRole() === 'SUPERVISOR')  && <ASideDashboard />}
            <DashboardMain/>
            </div>
        </I18nextProvider>
    )
}
export default Dashboard;