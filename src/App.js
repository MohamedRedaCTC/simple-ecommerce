
import './App.css';
import { useEffect ,useState} from 'react';
import axios from 'axios';
import Products from './Products';
import { Route, Routes  } from 'react-router-dom';
import Productdetails from './Productdetails';
import Navbarcomponent from './Navbarcomponent';
import Addproduct from './Addproduct';



function App() {
  const [cards, setcards] = useState([]);
  const [cart, setCart] = useState([]); 

  const handleAddToCart = (product) => {
    const isExist = cart.find(item => item.id === product.id);
    
    if (isExist) {
      setCart(cart.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    alert(`${product.title}  done added`);
  };
  
  const addproduct=(product)=>{
    setcards((allcards)=>[product,...allcards])
  }
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        const productsData = response.data;
         console.log(productsData)
        setcards(productsData);
        
    
        
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
      
  }, []);
 
  return (
    <div className="App">
     <Navbarcomponent cart={cart} />
     

     <Routes>
     <Route path='/Addproduct'  element={<Addproduct addproduct={addproduct}/>}/>
     <Route path='/Productdetails/:id' element={<Productdetails onAddToCart={handleAddToCart}/>} /> 
     <Route path='/' element={<Products cards={cards} onAddToCart={handleAddToCart} />} />
    </Routes>  
    </div>
  );
}

export default App;
