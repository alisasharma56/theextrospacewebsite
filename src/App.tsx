
import { Routes, Route } from 'react-router-dom';
import {HeroSection} from "./Components/Herosection/Herosection.tsx";
import {People} from "./Pages/People/People.tsx";
import {Product} from "./Pages/Product/Product.tsx";
import {Process} from "./Pages/Process/Process.tsx";
import {ProductDetail} from "./Pages/ProductDetail/ProductDetail.tsx";
import {Project} from "./Pages/Project/Project.tsx";


function App() {
    return (
        <Routes>
            <Route path="/"        element={<HeroSection />} />
            <Route path="/people"  element={<People/>}  />
            <Route path="/product" element={<Product/>} />
            <Route path="/process" element={<Process />} />
            <Route path="/project" element={<Project />} />
            <Route path="/product/:details" element={<ProductDetail/>} />

        </Routes>
    );
}

export default App;