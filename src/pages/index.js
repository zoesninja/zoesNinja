import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import LadyPic from "../components/ladyPic"
import { injectIntl, Link } from "gatsby-plugin-react-intl"

const Home = ({ intl }) => {
  return (
      <Layout isHomePage>
        <Seo title={intl.formatMessage({id: "seo-home-title" })} />
        <h1>{intl.formatMessage({id: "homepage-title" })}</h1>
        <p>{intl.formatMessage({id: "homepage-p1" })}</p>
        <LadyPic />
        <p>{intl.formatMessage({id: "homepage-p2" })}</p>
        <p>{intl.formatMessage({id: "homepage-p3" })}</p>
        <Link className="button button-accent start" to={`/chapters/01-the-first-encounter-${intl.locale}`}>{intl.formatMessage({id: "button-start" })}</Link>
      </Layout>
  )
}

export default injectIntl(Home)