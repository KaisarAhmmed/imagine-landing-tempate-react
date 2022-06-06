import Features from "./components/Features/Features";
import FeaturesBig from "./components/FeaturesBig/FeaturesBig";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

function App() {
    return (
        <>
            <Header />
            <Hero />
            <Features />
            <FeaturesBig image={"right"} />

            <Footer />
        </>
    );
}

export default App;
