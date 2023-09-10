import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function Footer() {
  return (
    <AppBar
      position="static"
      sx={{
        top: 'auto',
        bottom: 0,
        backgroundColor: '#F5F5F5',
        color: '#000000',
      }}
    >
      <Toolbar>
        <Typography variant="body1" align="center" sx={{ flexGrow: 1 }}>
          &copy; 2023 
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Footer;