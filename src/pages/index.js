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




const IndexPage = ({data}) => {

return (
  <Layout>
    <SEO title="Home" />
    <section className="hero">
      <Img fluid={data.coffeeShop.childImageSharp.fluid} className="hero-image"/>
    </section>
    <div id="root"></div>
    <section className="container">
      
      <span className="description">
        <h2>Wedding Date</h2>
        <h3>October 30, 2020</h3>
        <Countdown date={"30 Oct 2020 15:00:00 EST"} />
      </span>
      
      <div className="gallery-grid">
        <Img fluid={data.latte.childImageSharp.fluid} className="gallery-img1"/>
        <Img fluid={data.coffeeBags.childImageSharp.fluid} className="gallery-img2"/>
        <Img fluid={data.coffeePortrait.childImageSharp.fluid} className="gallery-img3"/>
      </div>
      <div className="about-grid">
        <h3 className="hwm">HOW WE MET</h3>
        <p>
          Lily And Ben first met at a party at Carnegie Mellon University in the Spring of '14. Lily then visited Ben for Outside Lands in August of 2015. They have been happily together since then, and Ben proposed to Lily on a trip to Scotland last October.
        </p>
      </div>
    </section>
    <div className="parallax"></div>
    <section className="container">
      {/* <Menu /> */}
      
      <Instagram />
    </section>
    {typeof window !== 'undefined' &&
      <LeafletMap
        position={[38.893908, -77.040280]} // Your Coordinates
        zoom={14} // Zoom Level
        // markerText={"Daughter's of the American Revolution Memorial Hall", "St. Peter's Church on Capitol Hill"} // Icon text
      />
    }
    <Footer />
  </Layout>
  )
}

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1600) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;

export const pageQuery = graphql`
  query {
    coffeeShop: file(relativePath: { eq: "coffee-shop-exterior.jpg" }) {
      ...fluidImage
    }
    coffeePortrait: file(relativePath: { eq: "coffee-portrait.jpg" }) {
      ...fluidImage
    }
    latte: file(relativePath: { eq: "latte.jpg" }) {
      ...fluidImage
    }
    coffeeBags: file(relativePath: { eq: "coffee-bags.jpg" }) {
      ...fluidImage
    }
  }
`;

export default IndexPage
