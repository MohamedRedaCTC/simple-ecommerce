import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import * as React from 'react';


import {Link} from 'react-router-dom';



export default function Products({cards ,onAddToCart}) {
    return (      
      <div className="product-container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
     {Object.keys(cards).map(key=>(
     <div className="product-list" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
     <Link key={key} to={`/Productdetails/${key}`}>
    
     <Card  key={key} sx={{ maxWidth: 275, margin: 2}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="160"
          image={cards[key]?.image}
          alt="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           {cards[key].title}
          </Typography>
          <Typography variant="h5" sx={{ color: 'text.secondary' }}>
           {cards[key].price +"EGP"}
          </Typography>
          
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant="outlined" onClick={()=>{onAddToCart(cards[key])}} >
          
         add to cart
        </Button>
      </CardActions>
    </Card>
    </Link>
     </div>    ) 
     )}
       
    </div>
    );
  }