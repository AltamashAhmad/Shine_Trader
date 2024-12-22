import { AppBar, Toolbar, Typography, Button, IconButton, Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography 
          variant="h6" 
          component={Link} 
          to="/" 
          sx={{ 
            flexGrow: 1, 
            textDecoration: 'none', 
            color: 'white' 
          }}
        >
          ShineTrader's
        </Typography>
        <Button 
          color="inherit" 
          component={Link} 
          to="/products"
        >
          Products
        </Button>
        <IconButton 
          color="inherit" 
          component={Link} 
          to="/cart"
          sx={{ 
            ml: 2,
            position: 'relative',
            '&:hover .MuiBadge-badge': {
              transform: 'scale(1.1)',
            },
          }}
        >
          <Badge 
            badgeContent={itemCount} 
            color="error"
            sx={{
              '& .MuiBadge-badge': {
                transition: 'all 0.3s ease',
                animation: itemCount > 0 ? 'badgePulse 0.5s ease-out' : 'none',
                '@keyframes badgePulse': {
                  '0%': { transform: 'scale(1)' },
                  '50%': { transform: 'scale(1.3)' },
                  '100%': { transform: 'scale(1)' }
                }
              }
            }}
          >
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar; 