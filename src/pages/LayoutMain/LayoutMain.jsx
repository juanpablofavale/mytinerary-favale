import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBarMain";
import "./LayoutMain.css";

export default function LayoutMain({ children }) {
  return (
    <>
      <div className="background"></div>
      <header>
        <div className="title">
          <img src="./itinerario.webp" alt="logo" />
          <h1>MyTinerary</h1>
        </div>
        <NavBar />
      </header>
      {children}
      <Footer />
    </>
  );
}
