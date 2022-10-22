import NextHead from "next/head"
import React from "react"

type HeadProps = {
  title?: string
  description?: string | null
  image?: string | null
  author?: string | null
}

const Head: React.FC<HeadProps> = ({ title, description, image, author }) => {
  return (
    <NextHead>
      <title>{title} | EyeBall</title>
      <meta itemProp="name" content={title} />
      {description && <meta itemProp="description" content={description} />}
      {image && <meta itemProp="image" content={image} />}
      {author && <meta itemProp="author" content={author} />}
      <link rel="icon" href="/favicon.ico" />
    </NextHead>
  )
}

export default Head
