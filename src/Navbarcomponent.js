import React from 'react';
  import { AppBar, Toolbar, Typography, Badge, IconButton } from '@mui/material';

import { Link } from 'react-router-dom';

export default function Navbarcomponent({ cart }) {
  
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <AppBar position="static" style={{ backgroundColor: '#1976d2' }}>
      <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
        
        <Typography variant="h6" component={Link} to="/" style={{ color: 'white', textDecoration: 'none' }}>
         ecommerce
        </Typography>
<Link to={'/addproduct'}>

<button> Add a new product</button>
</Link>
       
        <div style={{ display: 'flex', gap: '15px', maxWidth: '400px' }}>
          {cart.map((item) => (
            <span key={item.id} style={{ fontSize: '12px', backgroundColor: '#fff', color: '#1976d2', padding: '2px 8px', borderRadius: '10px', whiteSpace: 'nowrap' }}>
              {item.title}... ({item.quantity})
            </span>
          ))}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <Typography variant="body1" style={{ fontWeight: 'bold' }}>
            Total: EGP{totalPrice} 
          </Typography>

          <IconButton color="inherit">
            <Badge badgeContent={totalItems} color="error">

            </Badge>
          </IconButton>
        </div>

      </Toolbar>
    </AppBar>
  );
}