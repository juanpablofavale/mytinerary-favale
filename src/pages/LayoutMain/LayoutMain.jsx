import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBarMain";
import "./LayoutMain.css";

export default function LayoutMain() {
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
      link:'/'
    },
    {
      title:'Cities',
      link:'/cities'
    },
    {
      title:'Login',
      link:'/login'
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
      <Outlet/>
      <Footer net={socNet} links={navLink}/>
    </>
  );
}
