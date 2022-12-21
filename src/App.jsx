import Footer from "./components/reusable/Footer";
import Navbar from "./components/reusable/Navbar";


function App({ children }) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>

  );
}

export default App;
