import { createStackNavigator } from "react-navigation";

import Login from "../Components/Login";
import Profile from "../Components/Profile";
import CoffeeList from "../Components/CoffeeList";

const AuthStack = createStackNavigator(
  {
    Login: Login,
    Profile: Profile,
    CoffeeList: CoffeeList
  },
  {
    initialRouteName: "Login",
    cardStyle: {
      backgroundColor: "rgb(20,90,100)"
    },
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "rgb(20,90,100)"
      },
      headerTitleStyle: {
        fontWeight: "bold"
      },
      headerTintColor: "white"
    }
  }
);

export default AuthStack;
