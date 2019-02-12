import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import Footer from '../components/Footer'

import pricingSm from '../img/Small-House.svg'
import pricingMd from '../img/Medium-House.svg'
import pricingLg from '../img/Large-House.svg'
import wellPhoto from '../img/phodo-well.jpg'

export const HomePageTemplate = ({ title, content, contentComponent, bannerImages }) => {
  const PageContent = contentComponent || Content

  return (
    <>
      <section className="bg-dark">
        <div className="container">
          <div className="row">
            <div className="col-xs-12" style={{ padding: '75px 0 125px'}}>
              <div>
                <span className="display-title-xl">
                  In real estate, a photo is worth $1000. Or more.*
                </span>
              </div>
              <div>
                <span className="display-subtitle">
                  According to this study from the Wall Street Journal. With most buyers starting their home search online, it's important to craft beautiful images that will leave a lasting impression.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="row no-gutter">
          {
            bannerImages.map(
              img => (
                <div className="col-xs-12 col-sm-4">
                  <Img fluid={img} fadeIn={true} />
                </div>
              )
            )
          }
        </div>
      </section>

      <section style={{padding: '5rem 0'}}>
        <div className="container">
          <div className="row middle-xs">
            <div className="col-xs-12 col-sm-6">
              <p className="subheader">
                How we can help.
              </p>
              <p className="display-title">
                Ideal Lighting
              </p>
              <p style={{marginBottom: 35}}>
                No more pictures with windows too bright for homebuyers to see the stunning view outside or interiors too dark to appreciate the space. Whether it's professional lighting or HDR photography, we know how to achieve the beautiful well-lit photography that you expect for your property.
              </p>
              <p className="display-title">
                48-Hour Delivery
              </p>
              <p style={{marginBottom: 35}}>
                The real estate market moves fast. To help you keep pace, you will receive the edited photos within 2 business days of your appointment.
              </p>
              <p className="display-title">
                Web & Print Ready
              </p>
              <p style={{marginBottom: 35}}>
                With all photography packages, you will receive multiple sizes of each image optimized for web, print, and MLS.
              </p>
            </div>
            <div className="col-xs-12 col-sm-6" style={{ textAlign: 'center' }}>
              <img src={wellPhoto} style={{ width: '80%' }} />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <p className="subheader">Simple pricing.</p>
            </div>
          </div>
          <div className="row" style={{ textAlign: 'center' }}>
            <div className="col-xs-12 col-sm-4">
              <img src={pricingSm} />
              <h3><strong>$225</strong></h3>
              <p>Up to 2,000 sq. ft.</p>
            </div>
            <div className="col-xs-12 col-sm-4">
              <img src={pricingMd} />
              <h3><strong>$300</strong></h3>
              <p>Up to 3,000 sq. ft.</p>
            </div>
            <div className="col-xs-12 col-sm-4">
              <img src={pricingLg} />
              <h3><strong>$0.10 per sq. ft.</strong></h3>
              <p>Above 3,000 sq. ft.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

HomePageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const HomePage = ({ data }) => {
  const { markdownRemark: post } = data
  console.log('post')
  console.log(post)
  const bannerImages = post.frontmatter.bannerImages.map(
    each => each.image.childImageSharp.fluid
  )

  return (
    <Layout>
      <HomePageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        bannerImages={bannerImages}
        content={post.html}
      />
    </Layout>
  )
}

HomePage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default HomePage

export const homePageQuery = graphql`
  query HomePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        bannerImages {
          image {
            childImageSharp {
              fluid(maxWidth: 1600, maxHeight: 1200, quality: 75) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
