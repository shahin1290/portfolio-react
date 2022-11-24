import "./App.css";
import About from "./sections/about/About";
import Contact from "./sections/contact/Contact";
import FAQs from "./sections/faqs/FAQs";
import FloatingNav from "./sections/floating-nav/FloatingNav";
import Footer from "./sections/footer/Footer";
import Header from "./sections/header/Header";
import Navbar from "./sections/navbar/Navbar";
import Portfolio from "./sections/portfolio/Portfolio";

function App() {
  return (
    <main>
      <Navbar />
      <Header />
      <About />
      <Portfolio />
      <FAQs />
      <Contact />
      <Footer />
      <FloatingNav />
    </main>
  );
}

export default App;
