import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Footer from '../components/footer'
import Hero from '../components/hero'
import Banner from '../components/banner'
import OurHotels from '../components/ourhotels'
import Services from '../components/services'

const Accomodations = ({data}) => {
    return (
        <Layout>
            <SEO title="Accomodations" />
            <Hero>
                <Banner title="Hotel Options" subtitle="Group Rates available with our code">
                    {/* <Link to="/rooms" className="btn-primary">
                        our rooms
                    </Link> */}
                </Banner>
            </Hero>

            <div className="title">

            </div>
            <Services></Services>
            <OurHotels></OurHotels>
            <Footer />
        </Layout>
    )
}



export default Accomodations