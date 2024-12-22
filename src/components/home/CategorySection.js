import { Container, Grid, Card, CardContent, CardMedia, Typography } from '@mui/material';

const categories = [
  {
    id: 1,
    title: 'Tiles',
    image: 'https://via.placeholder.com/300x200',
    description: 'Premium floor and wall tiles'
  },
  {
    id: 2,
    title: 'Marble',
    image: 'https://via.placeholder.com/300x200',
    description: 'Elegant marble collections'
  },
  {
    id: 3,
    title: 'Bathroom',
    image: 'https://via.placeholder.com/300x200',
    description: 'Complete bathroom solutions'
  },
  {
    id: 4,
    title: 'Kitchen',
    image: 'https://via.placeholder.com/300x200',
    description: 'Modern kitchen essentials'
  }
];

const CategorySection = () => {
  return (
    <Container sx={{ my: 4 }}>
      <Typography variant="h4" component="h2" sx={{ mb: 4 }}>
        Shop by Category
      </Typography>
      <Grid container spacing={4}>
        {categories.map((category) => (
          <Grid item xs={12} sm={6} md={3} key={category.id}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={category.image}
                alt={category.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="h3">
                  {category.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {category.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CategorySection;