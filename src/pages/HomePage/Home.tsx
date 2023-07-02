import React, { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import {
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
} from '@mui/material';
import { LocalDining, Fastfood } from '@mui/icons-material';

const Home: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const goToRestaurantList = () => navigate('/restaurants');

  const items = [
    {
      id: 1,
      text: t('home.item.restaurant'),
      icon: <LocalDining />,
      action: goToRestaurantList,
    },
    {
      id: 2,
      text: t('home.item.food'),
      icon: <Fastfood />,
    },
  ];
  return (
    <Box sx={{ paddingX: 4, paddingY: 2 }}>
      <Typography variant="h1" sx={{ marginBottom: 4, fontSize: 28 }}>
        {t('home.title')}
      </Typography>
      <List>
        {items.map((item) => {
          return (
            <Fragment>
              <ListItem key={item.id} onClick={item.action}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
              <Divider />
            </Fragment>
          );
        })}
      </List>
    </Box>
  );
};

export default Home;
