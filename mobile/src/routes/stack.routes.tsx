import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from '../screens/Home';
import { Access } from '../screens/Access';
import { Reports } from '../screens/Reports';

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
        </Navigator>
    )
}