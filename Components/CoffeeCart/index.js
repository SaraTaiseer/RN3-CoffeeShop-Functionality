import React from "react";
import { connect } from "react-redux";
// NativeBase Components
import { Text, List, Button } from "native-base";
import { checkoutCart } from "../../Redux/actions";

// Component
import CartItem from "./CartItem";

const CoffeeCart = (props) => {
  const items = props.items;
  let cartItems = [];
  if (items.length > 0) {
    cartItems = items.map((item) => (
      <CartItem item={item} key={`${item.drink} ${item.option}`} />
    ));
  } else {
    cartItems = (
      <Button full warning>
        <Text>Thank you</Text>
      </Button>
    );
  }
  return (
    <List>
      {cartItems}
      <Button full danger onPress={() => props.checkoutCart()}>
        <Text>Checkout</Text>
      </Button>
    </List>
  );
};
const mapStateToProps = (state) => {
  return {
    items: state.listState.cart,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    checkoutCart: () => dispatch(checkoutCart()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CoffeeCart);
