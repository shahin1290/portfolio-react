import "./App.css";
import About from "./sections/about/About";
import Footer from "./sections/footer/Footer";
import Header from "./sections/header/Header";
import Hero from "./sections/hero/Hero";
import Portfolio from "./sections/portfolio/Portfolio";

function App() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Portfolio />
      <Footer />
    </main>
  );
}

export default App;
