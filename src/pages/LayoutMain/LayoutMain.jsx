import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBarMain";
import "./LayoutMain.css";

export default function LayoutMain({ children }) {
  return (
    <>
      <header>
        <div>
          <img src="./itinerario.webp" alt="logo" />
          <h1>My Tinerary</h1>
        </div>
        <NavBar />
      </header>
      {children}
      <Footer />
    </>
  );
}
