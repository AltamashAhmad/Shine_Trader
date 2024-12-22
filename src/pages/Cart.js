import { useSelector, useDispatch } from 'react-redux';
import { 
  Container, 
  Typography, 
  Box, 
  Card, 
  CardContent, 
  Grid, 
  IconButton, 
  Button,
  ButtonGroup
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { removeFromCart, updateQuantity } from '../store/cartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const { items, total } = useSelector((state) => state.cart);

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity > 0) {
      dispatch(updateQuantity({ id, quantity: newQuantity }));
    }
  };

  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Shopping Cart
      </Typography>

      {items.length === 0 ? (
        <Box sx={{ textAlign: 'center', my: 4 }}>
          <Typography variant="h6" color="text.secondary">
            Your cart is empty
          </Typography>
          <Button 
            variant="contained" 
            href="/products" 
            sx={{ mt: 2 }}
          >
            Continue Shopping
          </Button>
        </Box>
      ) : (
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            {items.map((item) => (
              <Card key={item.id} sx={{ mb: 2 }}>
                <CardContent>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item xs={3}>
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        style={{ 
                          width: '100%', 
                          height: 'auto',
                          borderRadius: '8px'
                        }}
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <Typography variant="h6">{item.name}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        {formatPrice(item.price)}
                      </Typography>
                    </Grid>
                    <Grid item xs={3}>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <ButtonGroup size="small" aria-label="quantity controls">
                          <Button
                            onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                          >
                            <RemoveIcon fontSize="small" />
                          </Button>
                          <Button disabled sx={{ px: 2 }}>
                            {item.quantity}
                          </Button>
                          <Button
                            onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                          >
                            <AddIcon fontSize="small" />
                          </Button>
                        </ButtonGroup>
                      </Box>
                      <Typography 
                        variant="body2" 
                        color="text.secondary" 
                        sx={{ mt: 1 }}
                      >
                        Total: {formatPrice(item.price * item.quantity)}
                      </Typography>
                    </Grid>
                    <Grid item xs={2}>
                      <IconButton 
                        onClick={() => handleRemoveItem(item.id)}
                        color="error"
                        sx={{
                          '&:hover': {
                            backgroundColor: 'error.light',
                            color: 'error.contrastText'
                          }
                        }}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            ))}
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ position: 'sticky', top: 20 }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Order Summary
                </Typography>
                <Box sx={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  mb: 2,
                  borderBottom: '1px solid',
                  borderColor: 'divider',
                  pb: 2
                }}>
                  <Typography>Items ({items.length}):</Typography>
                  <Typography>{formatPrice(total)}</Typography>
                </Box>
                <Button 
                  variant="contained" 
                  fullWidth 
                  href="/checkout"
                  sx={{ 
                    mt: 2,
                    py: 1.5,
                    fontSize: '1.1rem'
                  }}
                >
                  Proceed to Checkout
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      )}
    </Container>
  );
};

export default Cart;