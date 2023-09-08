import { Link, Outlet, useLocation } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBarMain";
import { useEffect } from "react";
import './layoutMain.css'
import LS from "../../utils/LS";
import { useDispatch, useSelector } from "react-redux";
import { signInAsyncToken } from "../../redux/actions/authActions";

export default function LayoutMain() {
  const {logged, token} = useSelector(store => store.authReducer)
  const dispatch = useDispatch()
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
    }
  ]

  useEffect(()=>{
    const token = LS.get('token')
    if (token){
      dispatch(signInAsyncToken(token))
    }
  },[])

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
