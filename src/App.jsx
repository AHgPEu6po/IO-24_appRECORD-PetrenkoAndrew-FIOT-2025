import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation.jsx";
import Laboratorna1 from "./pages/Laboratorna_1.jsx";
import Laboratorna2 from "./pages/Laboratorna_2.jsx";
import Laboratorna3 from "./pages/Laboratorna_3.jsx";
import Laboratorna4 from "./pages/Laboratorna_4.jsx";
import Laboratorna5_1 from "./pages/Laboratorna_5_1.jsx";
import Laboratorna5_2 from "./pages/Laboratorna_5_2.jsx";
import Laboratorna6 from "./pages/Laboratorna_6.jsx";
import Laboratorna7 from "./pages/Laboratorna_7.jsx";
import Laboratorna8 from "./pages/Laboratorna_8.jsx";
import Laboratorna9 from "./pages/Laboratorna_9.jsx";
import MainText from "./components/MainText.jsx";


const MyComponent = () => {
    return (
        <Router>
            <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
                <MainText/>
                <Navigation/>
                <Routes>
                    <Route path="/IO-24_appRECORD-PetrenkoAndrew-FIOT-2025/l1" element={<Laboratorna1/>} />
                    <Route path="/IO-24_appRECORD-PetrenkoAndrew-FIOT-2025/l2" element={<Laboratorna2/>} />
                    <Route path="/IO-24_appRECORD-PetrenkoAndrew-FIOT-2025/l3" element={<Laboratorna3/>} />
                    <Route path="/IO-24_appRECORD-PetrenkoAndrew-FIOT-2025/l4" element={<Laboratorna4/>} />
                    <Route path="/IO-24_appRECORD-PetrenkoAndrew-FIOT-2025/l5_1" element={<Laboratorna5_1/>} />
                    <Route path="/IO-24_appRECORD-PetrenkoAndrew-FIOT-2025/l5_2" element={<Laboratorna5_2/>} />
                    <Route path="/IO-24_appRECORD-PetrenkoAndrew-FIOT-2025/l6" element={<Laboratorna6/>} />
                    <Route path="/IO-24_appRECORD-PetrenkoAndrew-FIOT-2025/l7" element={<Laboratorna7/>} />
                    <Route path="/IO-24_appRECORD-PetrenkoAndrew-FIOT-2025/l8" element={<Laboratorna8/>} />
                    <Route path="/IO-24_appRECORD-PetrenkoAndrew-FIOT-2025/l9" element={<Laboratorna9/>} />
                </Routes>
            </div>
        </Router>
    );
};

export default MyComponent;