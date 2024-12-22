import { Container, Grid, Card, CardContent, CardMedia, Typography, Button, Rating, Box } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

// Helper function to format price in Indian format
const formatIndianPrice = (price) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(price);
};

const featuredProducts = [
  {
    id: 1,
    name: 'Premium Marble Tile',
    price: 3999,
    rating: 4.5,
    image: 'https://via.placeholder.com/300x200',
    description: 'Luxury marble tile for elegant flooring'
  },
  {
    id: 2,
    name: 'Modern Washbasin',
    price: 8999,
    rating: 4.8,
    image: 'https://via.placeholder.com/300x200',
    description: 'Contemporary design washbasin'
  },
  {
    id: 3,
    name: 'Designer Sink',
    price: 15999,
    rating: 4.3,
    image: 'https://via.placeholder.com/300x200',
    description: 'Stainless steel kitchen sink'
  }
];

const FeaturedProducts = () => {
  return (
    <Container sx={{ my: 6 }}>
      <Typography 
        variant="h4" 
        component="h2" 
        sx={{ 
          mb: 4,
          textAlign: 'center',
          position: 'relative',
          '&::after': {
            content: '""',
            display: 'block',
            width: '60px',
            height: '4px',
            backgroundColor: 'primary.main',
            margin: '12px auto'
          }
        }}
      >
        Featured Products
      </Typography>
      <Grid container spacing={4}>
        {featuredProducts.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card 
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.2s, box-shadow 0.2s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: 4
                }
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={product.image}
                alt={product.name}
                sx={{
                  objectFit: 'cover',
                  transition: 'transform 0.3s',
                  '&:hover': {
                    transform: 'scale(1.05)'
                  }
                }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography 
                  gutterBottom 
                  variant="h6" 
                  component="h3"
                  sx={{ 
                    fontWeight: 600,
                    color: 'primary.main'
                  }}
                >
                  {product.name}
                </Typography>
                <Typography 
                  variant="body2" 
                  color="text.secondary" 
                  sx={{ mb: 2 }}
                >
                  {product.description}
                </Typography>
                <Box sx={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center', 
                  mb: 2 
                }}>
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      color: 'primary.dark',
                      fontWeight: 'bold'
                    }}
                  >
                    {formatIndianPrice(product.price)}
                  </Typography>
                  <Rating 
                    value={product.rating} 
                    precision={0.5} 
                    readOnly 
                    sx={{ color: 'warning.main' }}
                  />
                </Box>
                <Button 
                  variant="contained" 
                  fullWidth
                  startIcon={<ShoppingCartIcon />}
                  sx={{
                    mt: 'auto',
                    textTransform: 'none',
                    py: 1.5,
                    '&:hover': {
                      transform: 'scale(1.02)'
                    }
                  }}
                >
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default FeaturedProducts;