import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchRestaurants } from '@/actions/RestaurantAction';
import { IState as IRestaurantState } from '@/reducers/RestaurantReducer/interfaces';
import { useTranslation } from 'react-i18next';
import {
  Avatar,
  Box,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import { ChevronRight } from '@mui/icons-material';

const RestaurantList: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const restaurants = useSelector(
    (state: IRestaurantState) => state.restaurant,
  );
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchRestaurants());
  }, [dispatch]);

  const goToRestaurantDetail = (id: string | number) =>
    navigate(`/restaurants/${id}`);

  return (
    <Box sx={{ width: '100%', paddingY: 2 }}>
      <Typography variant="h1" sx={{ fontSize: 24, mb: 4 }}>
        {t('restaurant.list.title')}
      </Typography>
      <List>
        {restaurants.map((item: any) => {
          return (
            <Fragment>
              <ListItem
                sx={{ width: '100%', paddingY: 2 }}
                key={item.id}
                onClick={() => goToRestaurantDetail(item.id)}
              >
                <ListItemAvatar>
                  <Avatar alt={item.name} src={item.logo} />
                </ListItemAvatar>
                <ListItemText>{item.name}</ListItemText>
                <ListItemIcon sx={{ justifyContent: 'flex-end' }}>
                  <ChevronRight />
                </ListItemIcon>
              </ListItem>
              <Divider />
            </Fragment>
          );
        })}
      </List>
    </Box>
  );
};

export default RestaurantList;
