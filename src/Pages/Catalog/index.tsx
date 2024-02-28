import Footer from "../../components/Footer";
import Header from "../../components/Header";
import SectionCard from "../../components/SectionCard";
import SectionComment from "../../components/SectionComment";
import './index.css'

export default function Catalog(){
    return(
        <div className="container-page">
            <Header/>
            <SectionCard/>
            <SectionComment/>
            <Footer/>   
        </div>
    );
}