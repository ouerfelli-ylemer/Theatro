import React from "react"
import Navbar from "../_components/Navbar"
import Footer from "../_components/Footer"
import '../scss/home.scss'
export default function Home() {
    return (
        <>
            <header id="homeHeader" style={{ backgroundImage: "url('/assets/images/header-home.jpg')", backgroundPosition: 'center' }}>
                <Navbar />
                <div className="d-flex h-100 container justify-content-between" style={{ marginTop: "10%" }}>
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
            <main id='homeMain'>
                <section id='aboutSection' className="white-section container py-3" >
                    <h2>Qui Somme Nous?</h2>
                    <div className="about-card d-flex align-items-center mt-5">
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the
                        </p>
                    </div>
                    <div className="float-img" style={{ backgroundImage: "url('/assets/images/jkarim.jpg'" }}>
                    </div>
                </section>
                <section id='keyNumbers' className="d-flex justify-content-around align-items-center">
                    <div>

                    </div>
                    <div className="text-center">
                        <h2>On essaye d'atteindre la lune</h2>
                        <p className="mt-4">+1000 Spectateurs!</p>
                        <p>2K Abonnés Instagram</p>
                        <p>5K Abonnés Facebook</p>
                    </div>
                </section>
                <section id='faq'>
                    <div className="faq-container d-flex align-items-center m-4">
                        <div className="w-50">

                        </div>
                        <h2 className="text-center">
                            Questions fréquemment demandés
                        </h2>
                    </div>
                    <div className='cards mx-5 row justify-content-center'>
                        <div class="flip-card col-md-6 mb-3">
                            <div class="flip-card-inner text-center">
                                <div class="flip-card-front d-flex align-items-center">
                                    <h2>Un évènement des plus importants du club?</h2>
                                </div>
                                <div class="flip-card-back">
                                    <p>We love that guy</p>
                                </div>
                            </div>
                        </div>
                        <div class="flip-card col-md-6 mb-3">
                            <div class="flip-card-inner text-center">
                                <div class="flip-card-front d-flex align-items-center">
                                    <h2>Un évènement des plus importants du club?</h2>
                                </div>
                                <div class="flip-card-back">
                                    <p>We love that guy</p>
                                </div>
                            </div>
                        </div>
                        <div class="flip-card col-md-6 mb-3">
                            <div class="flip-card-inner text-center">
                                <div class="flip-card-front d-flex align-items-center">
                                    <h2>Un évènement des plus importants du club?</h2>
                                </div>
                                <div class="flip-card-back">
                                    <p>We love that guy</p>
                                </div>
                            </div>
                        </div>
                        <div class="flip-card col-md-6 mb-3">
                            <div class="flip-card-inner text-center">
                                <div class="flip-card-front d-flex align-items-center">
                                    <h2>Un évènement des plus importants du club?</h2>
                                </div>
                                <div class="flip-card-back">
                                    <p>We love that guy</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    )
}