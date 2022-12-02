import ItemlistContainer from "./ItemlistContainer/ItemlistContainer";
import Navbar from "./Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./Cart/Cart";
import ItemDetailContainer from "./ItemDetailContainer/ItemDetailContainer";
import { CartContextProvider } from "../context/CartContext";
import CheckOut from "./Checkout/Checkout";


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <CartContextProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<ItemlistContainer />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/Item/:id" element={<ItemDetailContainer />} />
            <Route path="/category/:cat" element={<ItemlistContainer />} />
            <Route path="/checkout" element={<CheckOut />} />
          </Routes>
        </CartContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
