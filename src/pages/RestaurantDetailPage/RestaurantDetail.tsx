import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { enqueueSnackbar } from 'notistack';
import { addToCart, removeFromCart } from '@/actions/CartAction';

import CartButton from '@/components/CartButton/CartButton';
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Stack,
  Typography,
} from '@mui/material';

const RestaurantDetail: React.FC = () => {
  const { restaurantId } = useParams();
  const { restaurantList, currentCartRestaurant, cartItems } = useSelector(
    (state: any) => {
      return {
        restaurantList: state.restaurant.restaurantList,
        currentCartRestaurant: state.cart.restaurant,
        cartItems: state.cart.cartItems,
      };
    },
  );
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const currentRestaurant = restaurantList.find(
    (restaurant: any) => restaurant.id === restaurantId,
  );

  const quantity = (id: string | number) => {
    if (currentCartRestaurant !== currentRestaurant.name) return 0;
    const item = cartItems.find((cart: any) => cart.id === id);

    return item ? item.quantity : 0;
  };

  const handleAdd = (food: any, restaurantName: string) => {
    if (
      currentCartRestaurant &&
      currentCartRestaurant !== currentRestaurant.name
    ) {
      enqueueSnackbar(t('restaurant.detail.cart.error.adding'), {
        variant: 'error',
        anchorOrigin: { vertical: 'top', horizontal: 'center' },
        autoHideDuration: 700,
      });
      return;
    }
    dispatch(addToCart(food, restaurantName));
  };

  return (
    <Box sx={{ width: '100%', paddingY: 2 }}>
      <Typography variant="h2" sx={{ fontSize: 24, marginBottom: 4 }}>
        {currentRestaurant?.name}
      </Typography>
      {currentRestaurant?.foods.map((item: any) => {
        return (
          <Card variant="outlined" sx={{ marginBottom: 2 }}>
            <CardContent>
              <Grid container>
                <Grid item xs={6}>
                  <Typography>{item.name}</Typography>
                </Grid>
                <Grid item xs={6} sx={{ textAlign: 'right' }}>
                  <Typography>{item.price}</Typography>
                  <Stack
                    direction="row"
                    justifyContent="flex-end"
                    alignItems="center"
                    spacing={2}
                    sx={{ marginTop: 2 }}
                  >
                    {quantity(item.id) > 0 && (
                      <Fragment>
                        <Button
                          variant="contained"
                          color="error"
                          size="small"
                          onClick={() => dispatch(removeFromCart(item.id))}
                        >
                          -
                        </Button>
                        <Typography>{quantity(item.id)}</Typography>
                      </Fragment>
                    )}

                    <Button
                      variant="contained"
                      color="success"
                      size="small"
                      onClick={() => handleAdd(item, currentRestaurant.name)}
                    >
                      +
                    </Button>
                  </Stack>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        );
      })}
      {cartItems.length > 0 && <CartButton />}
    </Box>
  );
};

export default RestaurantDetail;
