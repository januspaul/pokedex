import Footer from "./components/reusable/Footer";
import Navbar from "./components/reusable/Navbar";
import Hero from "./components/reusable/hero1";


function App({ children }) {
  return (
    <div>
      <Navbar />
      <Hero/>
      {children}
      
      <Footer />
    </div>

  );
}

export default App;
