import HeroSection from '../components/home/HeroSection';
import SearchBar from '../components/home/SearchBar';
import CategorySection from '../components/home/CategorySection';
import { Container } from '@mui/material';
import FeaturedProducts from '../components/home/FeaturedProducts';

const Home = () => {
  const handleSearch = (searchTerm) => {
    console.log('Searching for:', searchTerm);
    // Will implement search functionality later
  };

  return (
    <>
      <HeroSection />
      <Container>
        <SearchBar onSearch={handleSearch} />
        <CategorySection />
        <FeaturedProducts />
      </Container>
    </>
  );
};

export default Home;