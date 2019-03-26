import { createStackNavigator, createAppContainer } from "react-navigation";

import CoffeeList from "../Components/CoffeeList";
import CoffeeCart from "../Components/CoffeeCart";
import CoffeeDetail from "../Components/CoffeeDetail";
import Login from "../Components/Login";

const MyStack = createStackNavigator(
  {
    CoffeeList: CoffeeList,
    CoffeeDetail: CoffeeDetail,
    CoffeeCart: CoffeeCart,
    Login: Login
  },
  {
    initialRouteName: "Login"
  }
);

const AppContainer = createAppContainer(MyStack);

export default AppContainer;
