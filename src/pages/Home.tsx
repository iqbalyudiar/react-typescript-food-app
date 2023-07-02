import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from '@mui/material';
import { LocalDining, Fastfood } from '@mui/icons-material';

const Home: React.FC = () => {
  const { t } = useTranslation();

  const items = [
    {
      id: 1,
      text: t('home.item.restaurant'),
      icon: <LocalDining />,
    },
    {
      id: 2,
      text: t('home.item.food'),
      icon: <Fastfood />,
    },
  ];
  return (
    <Box sx={{ paddingX: 4, paddingY: 2 }}>
      <Typography variant="h3" sx={{ marginBottom: 4 }}>
        {t('home.title')}
      </Typography>
      <List>
        {items.map((item) => {
          return (
            <ListItem key={item.id}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};

export default Home;
