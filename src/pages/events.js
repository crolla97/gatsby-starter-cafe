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
      height: 100vh;
  }
  
  .timeline {
    text-align: center;
    margin-top: 20vh;
  }
  .timeline2 {
    text-align: center;
    margin-top: 0vh;
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
        background-color: #38ced7;
    }
    
    .panel.green {
        background-color: #22d659;
        margin-bottom: 800px;
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
        
        flex-wrap: wrap;
        min-width: 320px;
        max-width: 1220px;
     }
     .flex-item {
        height: 120px;
        width: 300px;
        background-color: #e46119;
        border: 1px solid #626262;
        margin: 3px;
        padding: 10px 0 0 10px;
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
                <h1 className="timeline">October 29: Day Before</h1>
                <div className="swipeSection">
                    <div id="trigger" />
                    <Controller globalSceneOptions={{ triggerHook: 0.36, vertical: false }}>                       
                        <Scene triggerElement=".timeline" duration="48%" indicators={true}>         
                            <Tween from={{ x: '100%' }} to={{ x: '0%' }}>\
                                <div className="flex-container">
                                    <div className="flex-item"><h1>test</h1></div>
                                    <div className="flex-item"><img src="http://placehold.it/100x100" /></div>          
                                </div>
                                <section className="panel turqoise"><span>Panel</span></section>
                            </Tween>
                        </Scene>
                    </Controller>
                </div>
            </SectionWipesStyled>

                
            <SectionWipesStyled>
                <h1 className="timeline2">October 30: Wedding Day!</h1>      
                <Controller globalSceneOptions={{ triggerHook: 0.36, vertical: false }}>
                    <Scene triggerElement=".timeline2" duration="48%" indicators={true} pin>
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
            </SectionWipesStyled>

           
            
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
