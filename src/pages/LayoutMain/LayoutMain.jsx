import { Link, Outlet, useLocation } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBarMain";
import { useEffect } from "react";
import './layoutMain.css'

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

  let {pathname} = useLocation();

  useEffect(() => {
    window.scrollTo(0,0)
  }, [pathname]);
  
  return (
    <>
      <div className="background"></div>
      <header>
        <Link to="/" className="title">
          <img src="/itinerario.webp" alt="logo" />
          <h1>MyTinerary</h1>
        </Link>
        <NavBar links={navLink}/>
      </header>
      <Outlet/>
      <Footer net={socNet} links={navLink}/>
    </>
  );
}
