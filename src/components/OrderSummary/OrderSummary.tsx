import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Button,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from '@mui/material';

const TableOrder: React.FC<any> = ({ data, totalPrice }) => {
  const { t } = useTranslation();
  const priceItem = (item: any) => item.price * item.quantity;
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 320 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>{t('cart.order.table.header.item')}</TableCell>
            <TableCell align="right">
              {t('cart.order.table.header.quantity')}
            </TableCell>
            <TableCell align="right">
              {t('cart.order.table.header.price')}
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item: any, idx: string) => (
            <TableRow
              key={idx}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell>{item.name}</TableCell>

              <TableCell align="right">{item.quantity}</TableCell>
              <TableCell align="right">Rp{priceItem(item)}</TableCell>
            </TableRow>
          ))}
          <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell component="th" scope="row">
              {t('cart.order.table.body.totalprice')}
            </TableCell>
            <TableCell colSpan={2} align="right">
              Rp{totalPrice}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const OrderSummary: React.FC<any> = ({
  restaurantName,
  data,
  totalPrice,
  orderAction,
}) => {
  const { t } = useTranslation();
  return (
    <Card variant="outlined">
      <CardHeader
        title={t('cart.order.title')}
        subheader={t('cart.order.subtitle', { restaurantName })}
        sx={{ textAlign: 'center' }}
      />
      <CardContent>
        <TableOrder data={data} totalPrice={totalPrice} />
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={orderAction}
        >
          {t('cart.order.button')}
        </Button>
      </CardActions>
    </Card>
  );
};

export default OrderSummary;
