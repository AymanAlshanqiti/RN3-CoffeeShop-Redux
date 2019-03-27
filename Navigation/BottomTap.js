import React from "react";
import { createBottomTabNavigator } from "react-navigation";
import { Icon } from "native-base";

import AuthStack from "../Navigation/AuthStack";
import CoffeeStack from "../Navigation/CoffeeStack";
import OrderStack from "../Navigation/OrderStack";

const BottomTab = createBottomTabNavigator(
  {
    Auth: AuthStack,
    Coffee: CoffeeStack,
    Order: OrderStack
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        let iconName = "";
        let iconType = "";

        if (routeName === "Auth") {
          iconName = "home";
          iconType = "FontAwesome";
        } else if (routeName === "Coffee") {
          iconName = "coffee";
          iconType = "MaterialCommunityIcons";
        } else if (routeName === "Order") {
          iconName = "notebook";
          iconType = "MaterialCommunityIcons";
        }
        return (
          <Icon name={iconName} type={iconType} style={{ color: tintColor }} />
        );
      }
    }),
    tabBarOptions: {
      showLabel: false,
      activeTintColor: "b8cdd0",
      activeBackgroundColor: "white",
      inactiveTintColor: "white",
      style: {
        backgroundColor: "rgb(20,90,100)"
      }
    }
  }
);

export default BottomTab;
