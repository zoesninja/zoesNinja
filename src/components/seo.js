/**
 * Seo component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import ogImage from "../../static/og_image.jpg"

const Seo = ({ meta, title, description, lang, pathname }) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          siteUrl
        }
      }
    }
  `)

  const siteTitle = site.siteMetadata.title
  const pageTitle = title ? `${title} — ${siteTitle}` : siteTitle
  const siteDescription = site.siteMetadata.description
  const pageDescription = description ? description : siteDescription
  const siteUrl = site.siteMetadata.siteUrl
  const canonicalUrl = pathname
    ? pathname === "/"
      ? `${siteUrl}${pathname}`
      : `${siteUrl}${pathname.replace(/\/$/, "")}`
    : null
  const sitemapUrl = `${siteUrl}/sitemap.xml`

  return (
    <Helmet
      htmlAttributes={{ lang: lang }}
      lang={lang}
      title={title}
      titleTemplate={siteTitle ? `%s — ${siteTitle}` : null}
      link={[
        ...(canonicalUrl ? [{ rel: "canonical", href: canonicalUrl }] : []),
        { rel: "sitemap", type: "application/xml", href: sitemapUrl },
      ]}
      meta={[
        {
          name: `robots`,
          content: "index, follow",
        },
        {
          name: `description`,
          content: pageDescription,
        },
        {
          property: `og:title`,
          content: pageTitle,
        },
        {
          property: `og:description`,
          content: pageDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: ogImage,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:title`,
          content: pageTitle,
        },
        {
          name: `twitter:description`,
          content: pageDescription,
        },
      ].concat(meta)}
    />
  )
}

Seo.defaultProps = {
  meta: [],
  title: ``,
  description: ``,
  lang: ``,
  pathname: ``,
}

Seo.propTypes = {
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  lang: PropTypes.string,
  pathname: PropTypes.string,
}

export default Seo
