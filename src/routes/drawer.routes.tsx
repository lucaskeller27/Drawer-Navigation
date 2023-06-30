import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialIcons } from '@expo/vector-icons';

const { Screen, Navigator} = createDrawerNavigator();

import { ScreenA } from '../screens/ScreenA';
import { ScreenB } from '../screens/ScreenB';
import { ScreenC } from '../screens/ScreenC';

export function DrawerRoutes(){
    return(
        <Navigator
        >
            <Screen
                name='screenA'
                component={ScreenA}
                options={{
                    drawerLabel: 'Elenco de 1992',
                    drawerIcon: () => 
                        <MaterialIcons 
                            name="home" 
                            size={22}
                        />
                }}
            />
            <Screen
                name='screenB'
                component={ScreenB}
                options={{
                    drawerLabel: 'Elenco de 1993',
                    drawerIcon: () => 
                        <MaterialIcons 
                            name="logout" 
                            size={22}
                        />
                }}
            />
            <Screen
                name='screenC'
                component={ScreenC}
                options={{
                    drawerLabel: 'Elenco de 2005',
                    drawerIcon: () => 
                        <MaterialIcons 
                            name="add" 
                            size={22}
                        />
                }}
            />
        </Navigator>
    )
}