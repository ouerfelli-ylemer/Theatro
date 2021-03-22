import Navbar from "../_components/Navbar"
import Footer from "../_components/Footer"
import JTISection from "./JTISection"
import {Component} from "react/cjs/react.production.min";
import '../scss/JTI.scss'
class JTI extends Component {

    render() {
        const style ={
        };
        return (
            <>
                <header id="homeHeader" >
                    <Navbar/>
                    <div className="headerContent d-flex h-100 container justify-content-between" >
                        <div className="p-2 versions">
                            <h2 style={{
                                fontWeight: "bold"
                            }}>Journée Téâtrale INSAT</h2>
                            <div className="w-75" style={{
                                "margin": "auto",
                                "text-align": "left"
                            }}>
                                <p>Un évènement des plus importants du club Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Accusantium aut cumque eos illo inventore minima obcaecati quaerat suscipit tempore totam.</p>
                                <ul>
                                    <li>Edition 2018</li>
                                    <li>Edition 2019</li>
                                    <li>Edition 2020</li>
                                </ul>
                            </div>
                            <div className="achievments">
                            <span style={{left: "0"}}>+4000 observateurs</span>
                            <span style={{right: "0"}}>+20 piéces</span>
                        </div>
                        </div>
                        {/*<div className="p-2" style={{*/}
                        {/*    backgroundImage: "url('/assets/images/sofiene.jpg')",*/}
                        {/*    backgroundPosition: '0 10%',*/}
                        {/*    backgroundSize: "contain",*/}
                        {/*    width: "100%",*/}
                        {/*    backgroundRepeat: "no-repeat",*/}
                        
                        
                        {/*}}></div>*/}
                        <div className="p-2 imgBox">
                            <img src="/assets/images/sofiene.jpg" alt=""/>
                        </div>
                    </div>
                </header>
                <main id="JTIMain">
                    <JTISection
                        _id={""}
                        imgpath={"/assets/images/toto_bene.jpg"}
                        an={"2020"}
                        imgs={[
                            "/assets/images/jkarim.jpg",
                            "/assets/images/ramez.jpg",
                            "/assets/images/t.jpg",
                            "/assets/images/tv.jpg",
                            "/assets/images/wow.jpg"
                        ]}
                        couleur={"couleur1"}
                        comments={['ebes a7a','salem salem', 'somthing bla']}
                        addClass={""}
                    />
                    <JTISection
                        _id={"_1"}
                        imgpath={"/assets/images/acceuil.jpg"}
                        an={"2019"}
                        imgs={[
                            "/assets/images/IMG_4895.JPG",
                            "/assets/images/header-home.jpg",
                            "/assets/images/IMG_6598.JPG",
                            "/assets/images/nice.jpg",
                            "/assets/images/clown.jpg"
                        ]}
                        couleur={"couleur1"}
                        comments={['ebes a7a','salem salem', 'somthing bla']}
                        addClass={"scrollAnimatedBg"}
                    />
                    <JTISection
                        _id={"_2"}
                        imgpath={"/assets/images/zeineb.jpg"}
                        an={"2018"}
                        imgs={[
                            "/assets/images/clown.jpg",
                            "/assets/images/dance.jpg",
                            "/assets/images/zeineb.jpg",
                            "/assets/images/n.jpg",
                            "/assets/images/cat.jpg"
                        ]}
                        couleur={"couleur2"}
                        comments={['ebes a7a','salem salem', 'somthing bla']}
                        addClass={"scrollAnimatedBg"}
                    />
                </main>
                <Footer/>
            </>
        );
    }
}
export default JTI