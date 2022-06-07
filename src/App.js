import About from "./components/About/About";
import Blog from "./components/Blog/Blog";
import Features from "./components/Features/Features";
import FeaturesBig from "./components/FeaturesBig/FeaturesBig";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Team from "./components/Team/Team";
import Testimonial from "./components/Testimonial/Testimonial";

function App() {
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
            <Footer />
        </>
    );
}

export default App;
