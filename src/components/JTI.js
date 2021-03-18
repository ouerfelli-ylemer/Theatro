import Navbar from "../_components/Navbar"
import Footer from "../_components/Footer"
import JTISection from "./JTISection"
import {Component} from "react/cjs/react.production.min";

class JTI extends Component {

    render() {
        const style ={

        };
        return (
            <>
                <header id="homeHeader" style={{
                    backgroundImage: "url('/assets/images/header-home.jpg')",
                    backgroundPosition: 'center'
                }}>
                    <Navbar/>
                    <div className="d-flex h-100 container justify-content-between" style={{marginTop: "10%"}}>
                        <div className="w-50">
                            <h1>
                                Theatro
                            </h1>
                            <h2>Journée Théâtrale INSAT</h2>
                            <div className="mx-5 w-50">
                                <p>Un évènement des plus importants du club!</p>
                            </div>
                        </div>
                        <div className="d-flex align-items-start justify-content-end">
                            <p>Auditorium INSAT</p>
                        </div>
                    </div>
                </header>
                <main id="JTIMain">
                    <JTISection/>
                </main>
                <Footer/>
            </>
        );
    }
}
export default JTI