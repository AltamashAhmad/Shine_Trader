import { Paper, Box, Typography, Slider, FormGroup, FormControlLabel, Checkbox, Radio, RadioGroup, Divider } from '@mui/material';

const ProductFilters = ({ onFilterChange }) => {
  const handlePriceChange = (event, newValue) => {
    onFilterChange({ type: 'price', value: newValue });
  };

  const handleCategoryChange = (event) => {
    onFilterChange({ type: 'category', value: event.target.name });
  };

  const handleMaterialChange = (event) => {
    onFilterChange({ type: 'material', value: event.target.value });
  };

  // Function to format the price label
  const formatPriceLabel = (value) => {
    return `₹${value.toLocaleString('en-IN')}`;
  };

  return (
    <Paper 
      sx={{ 
        p: 3,
        borderRadius: 2,
        boxShadow: 2,
        bgcolor: 'background.paper'
      }}
    >
      <Typography 
        variant="h5" 
        sx={{ 
          mb: 3,
          fontWeight: 600,
          color: 'primary.main'
        }}
      >
        Filters
      </Typography>

      <Box sx={{ mb: 4 }}>
        <Typography 
          variant="subtitle1" 
          gutterBottom
          sx={{ 
            fontWeight: 500,
            color: 'text.primary'
          }}
        >
          Price Range
        </Typography>
        <Slider
          defaultValue={[0, 50000]}
          valueLabelDisplay="auto"
          min={0}
          max={50000}
          step={1000}
          onChange={handlePriceChange}
          valueLabelFormat={formatPriceLabel}
          sx={{
            color: 'primary.main',
            '& .MuiSlider-thumb': {
              '&:hover, &.Mui-focusVisible': {
                boxShadow: '0 0 0 8px rgba(33, 150, 243, 0.16)'
              }
            }
          }}
        />
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'space-between',
          mt: 1,
          color: 'text.secondary'
        }}>
          <Typography variant="body2">₹0</Typography>
          <Typography variant="body2">₹50,000</Typography>
        </Box>
      </Box>

      <Divider sx={{ my: 3 }} />

      <Box sx={{ mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          Categories
        </Typography>
        <FormGroup>
          <FormControlLabel control={<Checkbox />} label="Tiles" name="tiles" onChange={handleCategoryChange} />
          <FormControlLabel control={<Checkbox />} label="Marble" name="marble" onChange={handleCategoryChange} />
          <FormControlLabel control={<Checkbox />} label="Bathroom" name="bathroom" onChange={handleCategoryChange} />
          <FormControlLabel control={<Checkbox />} label="Kitchen" name="kitchen" onChange={handleCategoryChange} />
        </FormGroup>
      </Box>

      <Box>
        <Typography variant="h6" gutterBottom>
          Material
        </Typography>
        <RadioGroup defaultValue="all" onChange={handleMaterialChange}>
          <FormControlLabel value="all" control={<Radio />} label="All" />
          <FormControlLabel value="ceramic" control={<Radio />} label="Ceramic" />
          <FormControlLabel value="porcelain" control={<Radio />} label="Porcelain" />
          <FormControlLabel value="natural-stone" control={<Radio />} label="Natural Stone" />
        </RadioGroup>
      </Box>
    </Paper>
  );
};

export default ProductFilters;