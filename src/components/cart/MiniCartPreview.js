import { Box, Paper, Typography, List, ListItem, ListItemText, Button, Divider } from '@mui/material';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const MiniCartPreview = () => {
  const { items, total } = useSelector((state) => state.cart);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <Paper
      sx={{
        position: 'absolute',
        right: 0,
        top: '100%',
        width: 320,
        maxHeight: 400,
        overflowY: 'auto',
        mt: 1,
        zIndex: 1000,
        boxShadow: 3,
        animation: 'slideDown 0.3s ease-out',
        '@keyframes slideDown': {
          from: { opacity: 0, transform: 'translateY(-10px)' },
          to: { opacity: 1, transform: 'translateY(0)' }
        }
      }}
    >
      {items.length === 0 ? (
        <Box sx={{ p: 2, textAlign: 'center' }}>
          <Typography color="text.secondary">Your cart is empty</Typography>
        </Box>
      ) : (
        <>
          <List sx={{ py: 0 }}>
            {items.slice(0, 3).map((item) => (
              <ListItem key={item.id} sx={{ py: 1.5 }}>
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ width: 50, height: 50, objectFit: 'cover', marginRight: 16, borderRadius: 4 }}
                />
                <ListItemText
                  primary={item.name}
                  secondary={`${item.quantity} × ${formatPrice(item.price)}`}
                  primaryTypographyProps={{ variant: 'body2' }}
                  secondaryTypographyProps={{ variant: 'body2' }}
                />
              </ListItem>
            ))}
          </List>
          {items.length > 3 && (
            <Box sx={{ px: 2, py: 1 }}>
              <Typography variant="body2" color="text.secondary">
                And {items.length - 3} more items...
              </Typography>
            </Box>
          )}
          <Divider />
          <Box sx={{ p: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
              <Typography variant="subtitle2">Total:</Typography>
              <Typography variant="subtitle2" fontWeight="bold">
                {formatPrice(total)}
              </Typography>
            </Box>
            <Button
              component={Link}
              to="/cart"
              variant="contained"
              fullWidth
              sx={{ mb: 1 }}
            >
              View Cart
            </Button>
            <Button
              component={Link}
              to="/checkout"
              variant="outlined"
              fullWidth
            >
              Checkout
            </Button>
          </Box>
        </>
      )}
    </Paper>
  );
};

export default MiniCartPreview; 