import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addOrder } from '@/actions/OrderAction';
import OrderSummary from '@/components/OrderSummary/OrderSummary';
import { Box } from '@mui/material';

const Cart: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { restaurantName, cartItems } = useSelector((state: any) => {
    return {
      restaurantName: state.cart.restaurant,
      cartItems: state.cart.cartItems,
    };
  });
  const totalPrice = cartItems.reduce(
    (prev: any, curr: any) => prev + curr.price * curr.quantity,
    0,
  );

  return (
    <Box sx={{ width: '100%', paddingY: 2 }}>
      <OrderSummary
        data={cartItems}
        restaurantName={restaurantName}
        totalPrice={totalPrice}
        orderAction={() =>
          dispatch(
            addOrder({ cartItems, totalPrice, restaurantName }, navigate('/')),
          )
        }
      />
    </Box>
  );
};

export default Cart;
