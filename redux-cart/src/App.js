import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import { Zoom } from "@mui/material";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

function App() {
  return (
    <Router>
      <SnackbarProvider
        TransitionComponent={Zoom}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
      </SnackbarProvider>
    </Router>
  );
}

export default App;
