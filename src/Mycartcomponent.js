import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import * as React from 'react';
import Container from '@mui/material/Container';

import {Link} from 'react-router-dom';
export default function Mycartcomponent({cart }){
return(<>

<h1>
   my cart
</h1>
{console.log(cart)}
   <div style={{ display: 'flex', gap: '15px' }}>
          {cart.map((item) => (
 <Container fixed style={{ display:"flex",justifyContent:"center",alignItems:"center" , flexDirection:"column"}}>
         <Link   to={`/Productdetails/${item.id}`}>
          <Card   sx={{maxWidth:"400px" }} >
      <CardActionArea>
        <CardMedia
          component="img"
          height="220"
          image={item.image}
          alt="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           {item.title}
          </Typography>
          <Typography variant="h5" sx={{ color: 'text.secondary' }}>
           {item.price +"EGP"}
          </Typography>
                <Typography variant="h5" sx={{ color: 'text.secondary' }}>
           {item.details}
          </Typography>
             <Typography variant="h5" sx={{ color: 'text.secondary' }}>
           {item.category }
          </Typography>
           
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" >
         ({item.quantity})
        </Button>
      </CardActions>
    </Card>
     </Link>
      </Container>
          ))}
        </div>
</>)
}