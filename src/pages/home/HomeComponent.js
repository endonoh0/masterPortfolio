import React, { Component } from "react";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import Skills from "../../containers/skills/Skills";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import Carousel from "./Carousel"
import FlipCard from "./FlipCard/FlipCard";
import SkillSection from "../../containers/skills/SkillSection";


class Home extends Component {
  render() {
    console.log(this.props.theme);
    return (
      <div>
        {/* Navbar */}
        <Header theme={this.props.theme} />
        <Greeting theme={this.props.theme} />

        <Skills theme={this.props.theme} />
        <Carousel />
        <SkillSection theme={this.props.theme} />

        {/* <Footer theme={this.props.theme} /> */}
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Home;
