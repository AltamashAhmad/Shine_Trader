import { useState } from 'react';
import { Container, Grid, Typography } from '@mui/material';
import ProductFilters from '../components/products/ProductFilters';
import SearchBar from '../components/home/SearchBar';
import FeaturedProducts from '../components/home/FeaturedProducts';

const Products = () => {
  const [filters, setFilters] = useState({
    price: [0, 50000],
    categories: [],
    material: 'all'
  });

  const handleFilterChange = (filterUpdate) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [filterUpdate.type]: filterUpdate.value
    }));
    console.log('Current filters:', filters);
  };

  const handleSearch = (searchTerm) => {
    console.log('Search term:', searchTerm);
    // Will implement search logic when we connect to backend
  };

  return (
    <Container sx={{ my: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Our Products
      </Typography>
      
      <SearchBar onSearch={handleSearch} />
      
      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <ProductFilters onFilterChange={handleFilterChange} />
        </Grid>
        <Grid item xs={12} md={9}>
          <FeaturedProducts filters={filters} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Products;