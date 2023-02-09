import "./css/App.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { Contact } from "./pages/Contact";
import { Checkout } from "./pages/Checkout";
import SignIn from "./pages/Signin";
import { Service } from "./pages/Service";
import { Booking } from "./pages/Booking";
import SignUp from "./pages/SignUp";
import { toast, ToastContainer } from "react-toastify";
function App() {
  return (
    <>
      <ToastContainer position="top-center" limit={1} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services" element={<Contact />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/service/:id" element={<Service />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
