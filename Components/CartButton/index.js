import React, { Component } from "react";

import { Icon } from "native-base";
import { withNavigation } from "react-navigation";

class CartButton extends Component {
  render() {
    return (
      <Icon
        name="cart"
        onPress={() => this.props.navigation.navigate("CoffeeCart")}
      />
    );
  }
}

export default withNavigation(CartButton);
