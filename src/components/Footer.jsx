import Typography from '@mui/material/Typography';

  
export default function Footer() {
    return (
      <footer style={{ backgroundColor: '#f1f1f1', padding: '24px', marginTop: 'auto' }}>
  
        <Typography variant="h6" align="center" gutterBottom>
  
          Pokedex
        </Typography>
  
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
        
        © Copyright 2023
        </Typography>
  
      </footer>
  
    );
  }