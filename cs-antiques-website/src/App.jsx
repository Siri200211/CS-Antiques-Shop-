import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Box } from "@mui/material";
import luxuryTheme from "./theme/theme";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Gallery from "./pages/Gallery";
import Location from "./pages/Location";
import Contact from "./pages/Contact";

function App() {
  return (
    <ThemeProvider theme={luxuryTheme}>
      <CssBaseline />
      <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <Router>
          <Navbar />
          <Box component="main" sx={{ flex: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Products />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/location" element={<Location />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Box>
          <Footer />
          <FloatingWhatsApp />
        </Router>
      </Box>
    </ThemeProvider>
  );
}

export default App;
