import ItemlistContainer from "./ItemlistContainer/ItemlistContainer";
import Navbar from "./Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./Cart/Cart";
import ItemDetailContainer from "./ItemDetailContainer/ItemDetailContainer";



const App = () => {
  return (
    <div >
      <BrowserRouter>
         <Navbar />
         <Routes>
            <Route path="/" element={<ItemlistContainer />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/Item/:id" element={<ItemDetailContainer />} />
            <Route path="/category/:cat" element={<ItemlistContainer />} />
         </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
