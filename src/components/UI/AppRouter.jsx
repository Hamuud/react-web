import React from 'react';
import {Route, Routes} from "react-router-dom";
import About from "../../pages/About";
import Posts from "../../pages/Posts";
import Privacy from "../../pages/Privacy";
import OurGame from "../../pages/OurGame";
import AirShipWar from "../../pages/AirShipWar";
import Home from "../../pages/Home";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/gallery" element = {<About/>}></Route>
            <Route path="/home" element = {<Home/>}></Route>
            <Route path="/privacy" element = {<Privacy/>}></Route>
            <Route path="/ourgames" element = {<OurGame/>}></Route>
            <Route path="/airshipwar" element = {<AirShipWar/>}></Route>
            <Route path="/posts" element = {<Posts/>}></Route>
        </Routes>
    );
};

export default AppRouter;