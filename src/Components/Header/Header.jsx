import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux';
import SimpleCart from '../SimpleCart/SimpleCart';
import Menu from '@mui/material/Menu';



function Header(props) {
  const cartCount = useSelector((state) => state.cart.cartItems.length);
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleCartButtonClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ backgroundColor: '#F5F5F5' }}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block', color: "#000000", fontSize: '35px' } }}
          >
            OUR STORE
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>

            <Button
              sx={{ color: '#000000' }}
              onClick={handleCartButtonClick}
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
      <Box component="main" sx={{ p: 4 }}>
        <Toolbar />
        <Typography fontWeight="light" component="h6" sx={{ fontSize: '30px', margin: '10px', padding: '5px' }}>
          Browse our Categories
        </Typography>
      </Box>
    </Box>
  );
}


export default Header;