import "./css/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { Contact } from "./pages/Contact";
import { Checkout } from "./pages/Checkout";
import SignIn from "./pages/Signin";
import { Service } from "./pages/Service";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="services" element={<Contact />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="service/:id" element={<Service />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
