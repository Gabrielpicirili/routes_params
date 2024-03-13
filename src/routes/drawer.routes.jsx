import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Categories from "../screens/Categories";
import {user} from "../data/Profile"

const Drawer = createDrawerNavigator();

const DrawerRoutes = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Profile" component={Profile}  initialParams={{user}} />
      <Drawer.Screen name="Categories" component={Categories} />
    </Drawer.Navigator>
  );
};

export default DrawerRoutes;