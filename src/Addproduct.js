
import * as React from 'react';
import { useState } from 'react';
import Container from '@mui/material/Container';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {
  Box,
  TextField,
  Button,
  Typography,
} from "@mui/material"

export default function Addproduct({addproduct}){
const[newproduct,setnewproduct]=useState({ 
title:"",
Description:"",
price:0,
image:"",
category:""
})
const handleSubmit = async () => {
    
    if (!newproduct.title || !newproduct.price) {
      alert("Please fill in the product name and price!");
      return;
    }

    try {
      const response = await axios.post('https://fakestoreapi.com/products', newproduct);
      
      if (response.status === 200 || response.status === 201) {
       
        const createdProduct = response.data; 

        addproduct(createdProduct);

        alert('done ');
    
      }
    } catch (error) {
      console.error("Error adding product:", error);
      alert("error try again");
    }

  }



    return(
<>
  <Container maxWidth="sm"style={{ display:"flex",justifyContent:"center",alignItems:"center" , flexDirection:"column"}}>
      <div className='allcontent' >
         <Box
      sx={{
        width: 800,
        margin: "50px auto",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        padding: 3,
        boxShadow: 3,
        borderRadius: 2,
      }}
      
      style={{backgroundColor:"white"}}
    >
      <Typography variant="h5" textAlign="center">
        Add Product
      </Typography>

      <TextField label="Product Name" fullWidth  onChange={(e)=>{
        setnewproduct({...newproduct,title:e.target.value})
      }}/>
      <TextField label="Description" fullWidth  onChange={(e)=>{
        setnewproduct({...newproduct,Description:e.target.value})
      }}/>
      <TextField label="Price" type="number" fullWidth
      onChange={(e)=>{
        setnewproduct({...newproduct,price:e.target.value})
      }} />
      <TextField label="Image URL" fullWidth onChange={(e)=>{
        setnewproduct({...newproduct,image:e.target.value})
      }}/>
      <TextField label="Category" fullWidth onChange={(e)=>{
        setnewproduct({...newproduct,category:e.target.value})
      }}/>
      

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mt: 2,
        }}
      >
        <Link to={'/'}>
        <Button variant="outlined" color="error">
          Cancel
        </Button>

        <Button variant="contained"  onClick={handleSubmit} >
          Confirm
        </Button>
        </Link>
      </Box>
    </Box>

      </div>
  </Container>


</>

    )
}