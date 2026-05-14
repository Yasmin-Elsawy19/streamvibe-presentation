import Navbar from "./components/Navbar";
 
import SlideCard from "./components/SlideCard";
import Footer from "./components/Footer";
import slides from "./data/Presentation.jsx";

export default function App() {
  return (
    <div className="app">
      <Navbar />

       

      {slides.map((slide, index) => (
        <SlideCard key={index} slide={slide} />
      ))}

      <Footer />
    </div>
  );
}