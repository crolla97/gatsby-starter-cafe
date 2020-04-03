import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Menu from '../components/menu/menu'
import Instagram from '../components/instagram'
import LeafletMap from '../components/leafletMap'
import Footer from '../components/footer'
import Countdown from '../components/countdown'









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
            <div>
                <h1>Lily Olsakovsky</h1>
                <h4>AND</h4>
                <h1>Benjamin Bamberger</h1>
                <h4>ARE GETTING MARRIED</h4>
                
            </div>
            <Footer />
        </Layout>
        
    )
  
}



export default Events
