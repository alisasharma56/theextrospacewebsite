
import { Routes, Route } from 'react-router-dom';
import {HeroSection} from "./Components/Herosection/Herosection.tsx";
import {People} from "./Pages/People/People.tsx";
import {Product} from "./Pages/Project/Product.tsx";
import {Process} from "./Pages/Process/Process.tsx";


function App() {
    return (
        <Routes>
            <Route path="/"        element={<HeroSection />} />
            <Route path="/people"  element={<People/>}  />
            <Route path="/product" element={<Product/>} />
            <Route path="/process" element={<Process />} />
            <Route path="/project" element={<Product />} />
            {/*<Route path="/contact" element={<ContactPage />} />*/}
        </Routes>
    );
}

export default App;