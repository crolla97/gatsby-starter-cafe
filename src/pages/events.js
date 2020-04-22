import React from "react"
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Menu from '../components/menu/menu'
import Instagram from '../components/instagram'
import LeafletMap from '../components/leafletMap'
import Footer from '../components/footer'
import Countdown from '../components/countdown'



import Board from '../images/board.jpg';
import Church from '../images/church.jpg';
import Platter from '../images/platter.jpg';
import DAR from '../images/dar.jpg';
import Calico from '../images/calico.jpg'


import styled from 'styled-components';

const SectionWipesStyled = styled.div`
  overflow: hidden;
  #pinContainer {
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    
  }
  #pinContainer .panel {
    height: 100vh;
    width: 100vw;
    position: fixed;
    text-align: center;

    
  }
  .test {
    transition: width 0.3s ease-out;
    width: 100px;
    height: 100px;
    background-color: red;
    margin: 0 !important;
    
    &.yellow {
        background-color: yellow;
    }
  }
  .swipeSection {
      height: 360px;
      margin: 90px 0px 90px 0px;
  }
  
  .timeline {
    text-align: center;
    margin: 54px 0px 36px 0px;
    font-size: 2.7rem;
  }
  .timeline2 {
    text-align: center;
    margin: 54px 0px 36px 0px;
    font-size: 2.7rem;
  }
  .timeline3 {
    text-align: center;
    margin: 54px 0px 36px 0px;
    font-size: 2.7rem;
  }

  body {
        overflow: hidden;
    }

    .panel {
        height: 360px;
        width: 100vw;
        text-align: center;
    }
    
    .panel span {
        position: relative;
        display: block;
        overflow: visible;
        top: 50%;
        font-size: 80px;
    }
    
    .panel.blue {
        background-color: #3883d8;
    }
    
    .panel.turqoise {
        
        background-color: hsl(60, 4%, 85%);
    }
    
    .panel.green {
        background-color: hsl(60, 4%, 85%);
        //background-color: #d7f1f3;
        //background-color: #22d659;
        // margin-bottom: 800px;
    }
    
    .panel.bordeaux {
        background-color: #953543;
    }
    .flex-container {
        display: -webkit-flex;
        display: flex;
        -webkit-flex-direction: row;
        flex-direction: row;
        -webkit-align-items: center;
        align-items: center;
        margin: auto;
        flex-wrap: wrap;
        min-width: 320px;
        max-width: 1220px;
        top: 81px;
    }
    .flex-item {
        height: 120px;
        width: 300px;
        // background-color: #e46119;
        // border: 1px solid #626262;
        margin: auto;
        padding: 81px 0 0 18px;
        text-align: center;
        font-size: 1.8rem;
    }
    .flex-item2 {
        height: 120px;
        width: 300px;
        // background-color: #e46119;
        // border: 1px solid #626262;
        margin: auto;
        padding: 36px 0 0 18px;
        text-align: center;
    }
    .bolder {
        font-weight: bolder;
        font-size: 2rem;

    }
    .churchImg {
        height: 300px;
    }

`;


// const Header = ({ siteTitle }) => (
//   <header>
//     <span>{siteTitle}</span>
//     <span>65 Park Row, EH1 4PE</span>
//   </header>
// )

const Events = ({data}) => {

    
    // const {siteTitle} = this.props.siteTitle;
    return (
        <Layout>
            <SEO title="Events" />
            
            
            
           
            <SectionWipesStyled>
            <h1 className="timeline">October 29th: Day Before</h1>
                <div className="swipeSection">
                    {/* <div id="trigger" /> */}
                    <Controller globalSceneOptions={{ triggerHook: 0.18, vertical: false }}>                       
                        <Scene triggerElement=".timeline" duration="27%" indicators={true}>         
                            <Tween from={{ x: '100%' }} to={{ x: '0%' }}>
                                <section className="panel turqoise">
                                
                                    <div className="flex-container">
                                        <div className="flex-item">
                                            <h3 className="bolder">Welcome Cocktails @ 7PM</h3>
                                            <h3>The W Hotel Rooftop Bar</h3>
                                            <h3>Directions: Google Link</h3>
                                        </div>
                                        <div className="flex-item2"><img src={Board} /></div>          
                                    </div>
                                    
                                </section>
                            </Tween>
                        </Scene>
                    </Controller>
                </div>
            </SectionWipesStyled>
            
            <SectionWipesStyled>
            <h1 className="timeline2">October 30th: Wedding Day</h1>
                <div className="swipeSection">
                    {/* <div id="trigger" /> */}
                    <Controller globalSceneOptions={{ triggerHook: 0.36, vertical: false }}>                       
                        <Scene triggerElement=".timeline2" duration="27%" indicators={true}>         
                            <Tween from={{ x: '-100%' }} to={{ x: '0%' }}>
                                <section className="panel green">
                                
                                    <div className="flex-container">
                                        <div className="flex-item">
                                            <h3 className="bolder">Wedding Ceremony @ 3PM</h3>
                                            <h3>St. Peter's Church on Capitol Hill</h3>
                                            <h3>Directions: Google Link</h3>
                                        </div>
                                        <div className="flex-item2"><img className="churchImg" src={Church} /></div>          
                                    </div>
                                    
                                </section>
                            </Tween>
                        </Scene>
                    </Controller>
                </div>
            </SectionWipesStyled>

            <SectionWipesStyled>
                <div className="swipeSection" id="trigger3">
                    {/* <div id="trigger" /> */}
                    <Controller globalSceneOptions={{ triggerHook: 0.36, vertical: false }}>                       
                        <Scene triggerElement="#trigger3" duration="27%" indicators={true}>         
                            <Tween from={{ x: '100%' }} to={{ x: '0%' }}>
                                <section className="panel turqoise">
                                
                                    <div className="flex-container">
                                        <div className="flex-item">
                                            <h3 className="bolder">Cocktail Hour @ 5PM</h3>
                                            <h3>Daughters of the American Revolution</h3>
                                            <h3>Directions: Google Link</h3>
                                        </div>
                                        <div className="flex-item2"><img src={Platter} /></div>          
                                    </div>
                                    
                                </section>
                            </Tween>
                        </Scene>
                    </Controller>
                </div>
            </SectionWipesStyled>
            <SectionWipesStyled>
                <div className="swipeSection" id="trigger4">
                    {/* <div id="trigger" /> */}
                    <Controller globalSceneOptions={{ triggerHook: 0.36, vertical: false }}>                       
                        <Scene triggerElement="#trigger4" duration="27%" indicators={true}>         
                            <Tween from={{ x: '-100%' }} to={{ x: '0%' }}>
                                <section className="panel green">
                                
                                    <div className="flex-container">
                                        <div className="flex-item">
                                            <h3 className="bolder">Wedding Reception @ 6PM</h3>
                                            <h3>Daughters of the American Revolution</h3>
                                            <h3>Directions: Google Link</h3>
                                        </div>
                                        <div className="flex-item2"><img src={DAR} /></div>          
                                    </div>
                                    
                                </section>
                            </Tween>
                        </Scene>
                    </Controller>
                </div>
            </SectionWipesStyled>

            <SectionWipesStyled>
            <h1 className="timeline3">October 31th: Halloween</h1>
                <div className="swipeSection">
                    {/* <div id="trigger" /> */}
                    <Controller globalSceneOptions={{ triggerHook: 0.36, vertical: false }}>                       
                        <Scene triggerElement=".timeline3" duration="27%" indicators={true}>         
                            <Tween from={{ x: '100%' }} to={{ x: '0%' }}>
                                <section className="panel turqoise">
                                
                                    <div className="flex-container">
                                        <div className="flex-item">
                                            <h3 className="bolder">Brunch & Beer @ 1PM</h3>
                                            <h3>Calico Beer Garden</h3>
                                            <h3>Directions: Google Link</h3>
                                        </div>
                                        <div className="flex-item2"><img className="churchImg" src={Calico} /></div>          
                                    </div>
                                    
                                </section>
                            </Tween>
                        </Scene>
                    </Controller>
                </div>
            </SectionWipesStyled>

                
            {/* <SectionWipesStyled>
                <h1 className="timeline2">October 30: Wedding Day!</h1>      
                <Controller globalSceneOptions={{ triggerHook: 0.36, vertical: false }}>
                    <Scene triggerElement=".timeline2" duration="36%" indicators={true}>
                        <Timeline wrapper={<div id="pinContainer" />} >
                        
                            <Tween from={{ x: '100%' }} to={{ x: '0%' }}>
                                <section className="panel blue"><span>Panel</span></section>
                            </Tween>
                            <Tween from={{ x: '100%' }} to={{ x: '0%' }}>
                                <section className="panel green"><span>Panel</span></section>
                            </Tween>
                            <Tween from={{ x: '100%' }} to={{ x: '0%' }}>
                                <section className="panel bordeaux"><span>Panel</span></section>
                            </Tween>
                        </Timeline>
                    </Scene>
                </Controller>
            </SectionWipesStyled> */}

           
            
            {/* <div>October 30th</div>
            
                <div>October 30th</div>
                <SectionWipesStyled>
                    <Controller globalSceneOptions={{ triggerHook: 'onLeave', veritcal: false }}>
                        <Scene triggerHook="onLeave" duration="200%" indicators={true} pin>
                            <Timeline wrapper={<div id="pinContainer" />} >
                            <section className="panel blue">
                                <h1>Timeline</h1>
                            </section>
                            <Tween from={{ x: '100%' }} to={{ x: '0%' }}>
                                <section className="panel turqoise"><span>Panel</span></section>
                            </Tween>
                            <Tween from={{ x: '100%' }} to={{ x: '0%' }}>
                                <section className="panel green"><span>Panel</span></section>
                            </Tween>
                            
                            </Timeline>
                        </Scene>
                    </Controller>
                </SectionWipesStyled> */}
            <Footer />
        </Layout>
        
    )
  
}



export default Events
