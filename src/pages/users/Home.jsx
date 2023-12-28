import Header from "../../components/Header.jsx";
import NavBar from "../../components/NavBar.jsx";
import {Outlet} from "react-router-dom";
import Footer from "../../components/Footer.jsx";

export default function Home(){
    return(
        <>
            <Header/>
            <NavBar/>
            <Outlet/>
            <Footer/>
        </>

    )
}