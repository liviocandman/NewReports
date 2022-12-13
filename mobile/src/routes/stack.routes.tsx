import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from '../screens/Home';
import { Access } from '../screens/Access';
import { Reports } from '../screens/Reports';
import { CreateReport } from '../screens/CreateReport'
import { ReportsList } from '../screens/ReportsList'

const { Screen, Navigator } = createNativeStackNavigator();

export function StackRoutes(){
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen
                name="home"
                component={Home}
            />
             <Screen
                name="access"
                component={Access}
            />
            <Screen
                name="reports"
                component={Reports}
            />
            <Screen
                name="createreport"
                component={CreateReport}
            />
            <Screen
                name="reportslist"
                component={ReportsList}
            />
        </Navigator>
    )
}