import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux';
import SimpleCart from '../SimpleCart/SimpleCart'; // Import your SimpleCart component
import { addToCart } from '../../store/carts';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const drawerWidth = 240;
const navItems = [{ text: 'CART' }];


function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const cartCount = useSelector((state) => state.cart.cartItems.length);

  const dispatch = useDispatch();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const [anchorEl, setAnchorEl] = useState(null);

  const handleCartButtonClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [isCartOpen, setIsCartOpen] = React.useState(false);

  // const handleCartButtonClick = () => {
  //   setIsCartOpen(!isCartOpen); // Toggle the cart
  // };
  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: 'center',
        backgroundColor: '#333',
        color: '#000000', // Change text color to black
      }}
    >
      <Typography variant="h6" sx={{ my: 2, color: "#000000" }}>
        STORE FRONT 
      </Typography>

      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={`${item.text} (${cartCount})`} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ backgroundColor: '#F5F5F5' }}>
      <Toolbar>
  <IconButton
    color="inherit"
    aria-label="open drawer"
    edge="start"
    onClick={handleDrawerToggle}
    sx={{ mr: 2, display: { sm: 'none' } }}
  >
    <MenuIcon />
  </IconButton>
  <Typography
    variant="h6"
    component="div"
    sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block', color: "#000000", fontSize: '35px' } }}
  >
    OUR STORE
  </Typography>
  <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
  {/* <Button
  sx={{ color: '#000000' }}
  onClick={handleCartButtonClick} // Toggle the cart
>
  {`CART (${cartCount})`}

</Button> */}

<Button
  sx={{ color: '#000000' }}
  onClick={handleCartButtonClick} // Open the cart menu
>
  {`CART (${cartCount})`}
</Button>
<Menu
  id="cart-menu"
  anchorEl={anchorEl}
  open={Boolean(anchorEl)}
  onClose={handleClose}
  anchorOrigin={{
    vertical: 'top',
    horizontal: 'right',
  }}
  transformOrigin={{
    vertical: 'top',
    horizontal: 'right',
  }}


>
  <SimpleCart 
    open={Boolean(anchorEl)}
    onClose={handleClose}
    
  />
</Menu>







  </Box>
 
</Toolbar>

      </AppBar>
{/* 
      {isCartOpen && (
  <SimpleCart
    open={isCartOpen}
    onClose={() => setIsCartOpen(false)}
  />
)}  */}
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              backgroundColor: '#333',
              color: '#000000', // Change text color to black
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 2 }}>
        <Toolbar />
        <Typography fontWeight="light" component="h6" sx={{ fontSize: '30px', margin: '10px', padding: '5px' }}>
          Browse our Categories
        </Typography>
      </Box>
     </Box>
  );
}

Header.propTypes = {
  window: PropTypes.func,
};

export default Header;