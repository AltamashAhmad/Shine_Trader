import { Box, Container, Typography, Button } from '@mui/material';

const HeroSection = () => {
  return (
    <Box
      sx={{
        bgcolor: 'primary.light',
        py: 8,
        mb: 4
      }}
    >
      <Container>
        <Typography
          variant="h2"
          component="h1"
          sx={{ mb: 3, color: 'primary.main' }}
        >
          Welcome to ShineTrader's
        </Typography>
        <Typography variant="h5" sx={{ mb: 4, color: 'text.secondary' }}>
          Your one-stop shop for premium home and construction materials
        </Typography>
        <Button variant="contained" size="large" href="/products">
          Shop Now
        </Button>
      </Container>
    </Box>
  );
};

export default HeroSection; 