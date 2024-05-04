import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import { AuthContextProvider } from "./context/AuthContext";
import { ToastContextProvider } from "./context/ToastContext";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import APOD from "./pages/APOD";
import Earth from "./pages/Earth";
import Mars from "./pages/Mars";

function App() {
  return (
    <ToastContextProvider>
      <AuthContextProvider>
        <Layout>
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/' element={<Home />} />
            <Route path='/apod' element={<APOD />} />
            <Route path='/earth' element={<Earth />} />
            <Route path='/mars' element={<Mars />} />
          </Routes>
        </Layout>
      </AuthContextProvider>
    </ToastContextProvider>
  );
}

export default App;
