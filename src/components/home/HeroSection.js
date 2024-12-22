import { Box, Container, Typography, Button } from '@mui/material';

const HeroSection = () => {
  return (
    <Box
      sx={{
        background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
        py: { xs: 6, md: 12 },
        mb: 6,
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.1)',
          zIndex: 1
        }
      }}
    >
      <Container
        sx={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center'
        }}
      >
        <Typography
          variant="h2"
          component="h1"
          sx={{
            mb: 3,
            fontWeight: 700,
            textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
            fontSize: { xs: '2.5rem', md: '3.75rem' }
          }}
        >
          Welcome to ShineTrader's
        </Typography>
        <Typography 
          variant="h5" 
          sx={{ 
            mb: 4,
            maxWidth: '800px',
            mx: 'auto',
            opacity: 0.9
          }}
        >
          Your one-stop shop for premium home and construction materials
        </Typography>
        <Button 
          variant="contained" 
          size="large" 
          href="/products"
          sx={{
            bgcolor: 'white',
            color: 'primary.main',
            px: 4,
            py: 1.5,
            fontSize: '1.1rem',
            '&:hover': {
              bgcolor: 'rgba(255,255,255,0.9)',
            }
          }}
        >
          Shop Now
        </Button>
      </Container>
    </Box>
  );
};

export default HeroSection;