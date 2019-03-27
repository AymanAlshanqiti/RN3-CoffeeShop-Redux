import React, { Component } from "react";

import { Icon } from "native-base";
import { withNavigation } from "react-navigation";

class CartButton extends Component {
  render() {
    return (
      <Icon
        style={{ right: 10, color: "#FFF" }}
        name="cart"
        onPress={() => this.props.navigation.navigate("CoffeeCart")}
      />
    );
  }
}

export default withNavigation(CartButton);
