import Footer from "./components/reusable/Footer";
import Navigation from "./components/reusable/Navigation";
import Hero from "./components/reusable/hero1";


function App({ children }) {
  return (
    <div>
      <Navigation />
      <Hero/>
      {children}
      
      <Footer />
    </div>

  );
}

export default App;
