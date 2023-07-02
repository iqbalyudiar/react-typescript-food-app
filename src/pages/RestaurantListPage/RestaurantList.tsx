import React, { Fragment } from 'react';
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
  const items = [
    {
      id: 1,
      name: 'Mc Donalds',
      logo:
        'https://seeklogo.com/images/M/mc-donald-s-logo-8568BCE03C-seeklogo.com.png',
    },
    {
      id: 2,
      name: 'KFC',
      logo:
        'https://seeklogo.com/images/K/kfc-new-logo-72E6348046-seeklogo.com.png',
    },
  ];
  return (
    <Box sx={{ width: '100%', paddingY: 2 }}>
      <Typography variant="h1" sx={{ fontSize: 24, mb: 4 }}>
        {t('restaurant.list.title')}
      </Typography>
      <List>
        {items.map((item) => {
          return (
            <Fragment>
              <ListItem sx={{ width: '100%', paddingY: 2 }} key={item.id}>
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
