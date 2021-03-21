import React from "react";
import {Component} from "react/cjs/react.production.min";

class JTISection extends Component{
    componentDidMount(){
       //console.log(this.props.imgs[0])
    }
    render(){
        const style = {
            backgroundImage: `url(${this.props.imgpath})`,
        }
        return (
          <div className="wrapsection">
              <section className={"container"}>
              <div className="toto_bene_img" style={style} ></div>
              <div className="intro">
                  <div className={"intro_title "+ this.props.class}>
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
                  <div className={"pieces_title "+ this.props.class}>
                      <h3>Les piéces jouées</h3>
                  </div>
                  <div className="pieces_imgs">
                      <div className="pics_grid">
                          <div className={"pic _1"} style={{"backgroundImage": `url(${this.props.imgs[0]})`}} alt=""></div>
                          <div className="comment _1">{this.props.comments[0]}</div>
                          <div className={"pic _2"} style={{"backgroundImage": `url(${this.props.imgs[1]})`}} alt=""></div>
                          <div className={"pic _3"} style={{"backgroundImage": `url(${this.props.imgs[2]})`}} alt=""></div>
                          <div className="comment _2">{this.props.comments[1]}</div>
                          <div className={"pic _4"} style={{"backgroundImage": `url(${this.props.imgs[3]})`}} alt=""></div>
                          <div className="comment _3">{this.props.comments[2]}</div>
                          <div className={"pic _5"} style={{"backgroundImage": `url(${this.props.imgs[4]})`}} alt=""></div>
                      </div>
                  </div>
              </div>
          </section>
          </div>
        );
    }
}

export default JTISection