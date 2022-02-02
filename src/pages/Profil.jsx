import Container from "../components/Container";
import ProfilBar from "../components/ProfilBar";
import Header from "../components/Header"
import Footer from "../components/Footer"
import ProfilComponent from "../components/ProfilComponent";
import { UserContext } from "../context/User";
import { useContext, useState} from "react";
import Loading from "../components/Loading"
import CoordoneeBancaires from "../components/CoordoneeBancaires";
import HistoriqueCommande from "../components/HistoriqueCommande";

const Profil = () => {
    const {user} = useContext(UserContext)
    const [Page, setPage] = useState("profil")    
    if(!user) {
        return <Loading height= "50vh"/>
    }

    return (
        <Container>
            <Header/>
            <ProfilBar setPage= {setPage}/>
            {Page === "profil" && <ProfilComponent user= {user}/>}
            {Page === "coordonee" && <CoordoneeBancaires/>}
            {Page === "historique" && <HistoriqueCommande/>}
            
            
            

            <Footer/>
        </Container>
    )
};

export default Profil;
