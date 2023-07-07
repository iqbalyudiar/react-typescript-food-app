import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Box, Fab, Typography } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';

const Title: React.FC = (props) => {
  const { t } = useTranslation();
  const { restaurantName, cartItems } = useSelector((state: any) => {
    return {
      restaurantName: state.cart.restaurant,
      cartItems: state.cart.cartItems,
    };
  });
  const total = cartItems.reduce(
    (prev: any, curr: any) => prev + curr.quantity,
    0,
  );

  return (
    <Box
      {...props}
      sx={{ textAlign: 'left', width: '80%' }}
      flexDirection="column"
      display="flex"
    >
      <Typography sx={{ color: 'white' }} variant="button">
        {t('restaurant.detail.cart.button.item', { total })}
      </Typography>
      <Typography sx={{ color: 'white' }} variant="button">
        {t('restaurant.detail.cart.button.order', { restaurantName })}
      </Typography>
    </Box>
  );
};
const CartButton = (props: any) => {
  const navigate = useNavigate();
  return (
    <Fab
      variant="extended"
      color="primary"
      sx={{
        position: 'fixed',
        bottom: 20,
        width: '80%',
        left: '50%',
        transform: 'translateX(-50%)',
        paddingY: 3,
      }}
      onClick={() => navigate('/cart')}
    >
      <Title {...props} />
      <ShoppingCart sx={{ marginLeft: 2 }} />
    </Fab>
  );
};

export default CartButton;
