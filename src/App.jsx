import Footer from "./Footer";
import Navbar from "./Navbar";


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
