import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBarMain";
import "./LayoutMain.css";

export default function LayoutMain({ children }) {
  const socNet = [
    {
      title: 'Facebook',
      link: '#'
    },
    {
      title: 'Instagram',
      link: '#'
    },
    {
      title: 'Twitter',
      link: '#'
    }
  ]

  const navLink = [
    {
      title:'Home',
      link:'#'
    },
    {
      title:'Cities',
      link:'#'
    },
    {
      title:'Login',
      link:'#'
    }
  ]

  return (
    <>
      <div className="background"></div>
      <header>
        <div className="title">
          <img src="./itinerario.webp" alt="logo" />
          <h1>MyTinerary</h1>
        </div>
        <NavBar links={navLink}/>
      </header>
      {children}
      <Footer net={socNet} links={navLink}/>
    </>
  );
}
