import FooterCTA from "@modules/layout/components/footer-cta"
import FooterNav from "@modules/layout/components/footer-nav"
import MedusaCTA from "@modules/layout/components/medusa-cta"
import CommissionsForm from "@modules/layout/components/commissions-form"

interface Props  {
  footerBanner: string,
};

const Footer = ({footerBanner} : Props) => {
  return (
    <footer>
      {footerBanner==="commissions-form" ? <CommissionsForm /> : <FooterCTA /> }
      <FooterNav />
      <MedusaCTA />
    </footer>
  )
}

export default Footer
