    import React from 'react';
    import './styles/App.css';
    import {BrowserRouter} from "react-router-dom";
    import Navbar from "./components/UI/Navbar/Navbar";
    import AppRouter from "./components/UI/AppRouter";
    import Footer from "./components/UI/Footer/footer";


    function App() {
    return (
        <BrowserRouter>
            <Navbar/>
            <AppRouter/>
            <Footer/>
        </BrowserRouter>
      );
    }

    export default App;
