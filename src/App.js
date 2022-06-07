import About from "./components/About/About";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";
import Features from "./components/Features/Features";
import FeaturesBig from "./components/FeaturesBig/FeaturesBig";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Team from "./components/Team/Team";
import Testimonial from "./components/Testimonial/Testimonial";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
    useEffect(() => {
        Aos.init({ duration: 600 });
    }, []);

    return (
        <>
            <Header />
            <Hero />
            <Features />
            <FeaturesBig image={"right"} />
            <About />
            <Team />
            <Testimonial />
            <Blog />
            <Contact />
            <Footer />
        </>
    );
}

export default App;
