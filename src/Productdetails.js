import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import * as React from 'react';
import Container from '@mui/material/Container';
import axios from 'axios'
import { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';
 export default function Productdetails ({onAddToCart} ) {
 const params=useParams()
 const[productdetails,setproductdetails]=useState([]);
 const productid= Number(params.id)+Number(1)
useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${productid}`)
      .then(response => {
        const productsData = response.data;
      
        setproductdetails(productsData);
        console.log(productsData)
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, [productid]);


return (
   
     <>
       <Container fixed style={{ display:"flex",justifyContent:"center",alignItems:"center" , flexDirection:"column"}}>
  
        <h1>product details component +{productdetails.title}</h1>  
          <Card   sx={{maxWidth:"400px" }} >
      <CardActionArea>
        <CardMedia
          component="img"
          height="160"
          image={productdetails.image}
          alt="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           {productdetails.title}
          </Typography>
          <Typography variant="h5" sx={{ color: 'text.secondary' }}>
           {productdetails.price +"EGP"}
          </Typography>
                <Typography variant="h5" sx={{ color: 'text.secondary' }}>
           {productdetails.details}
          </Typography>
             <Typography variant="h5" sx={{ color: 'text.secondary' }}>
           {productdetails.category }
          </Typography>
            <Typography variant="h5" sx={{ color: 'text.secondary' }}>
           {productdetails.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary"onClick={()=>{onAddToCart(productdetails)}} >
         add to cart
        </Button>
      </CardActions>
    </Card> 
      </Container>
   
</>
   
 )
 }