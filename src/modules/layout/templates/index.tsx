import Footer from "@modules/layout/templates/footer"
import Nav from "@modules/layout/templates/nav"
import React from "react"

interface Props  {
  footerBanner: string,
  children?: JSX.Element,
};

const Layout: React.FC<Props> = ({ children, footerBanner } : Props) => {
  return (
    <div>
      <Nav />
      <main className="relative">{children}</main>
      <Footer footerBanner={footerBanner}/>
    </div>
  )
}

export default Layout
