import Container from "../components/Container";
import ProfilBar from "../components/ProfilBar";
import Header from "../components/Header"
import Footer from "../components/Footer"
import ProfilComponent from "../components/ProfilComponent";

const Profil = () => {
    return (
        <Container>
            <Header/>
            <ProfilBar />
            <ProfilComponent/>
            <Footer/>
        </Container>
    )
};

export default Profil;
