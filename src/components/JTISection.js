import React from "react";
import {Component} from "react/cjs/react.production.min";

class JTISection extends Component{
    render(){
        return (
          <section className={"container"}>
              <img id="toto_bene_img"src={this.props.img} alt=""/>
              <div className="intro">
                  <div className="intro_title">
                      <h2>Journée Theatrale INSAT {this.props.an}</h2>
                  </div>
                  <div className="intro_text">
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                          Accusantium at earum et expedita inventore itaque perspiciatis quis quos tenetur, unde?
                          Blanditiis culpa dolorum ducimus ex hic inventore non quisquam tenetur velit voluptate?
                          Architecto asperiores atque beatae commodi excepturi facere impedit iure, libero,
                          mollitia nulla quidem quis quos recusandae sed totam.</p>
                  </div>
              </div>
              <div className="pieces">
                  <div className="pieces_title">
                      <h3>Les piéces jouées</h3>
                  </div>
                  <div className="pieces">

                  </div>
              </div>
          </section>
        );
    }
}

export default JTISection