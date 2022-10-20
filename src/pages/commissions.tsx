import Layout from "@modules/layout/templates"
import Head from "@modules/common/components/head"
import { NextPageWithLayout } from "types/global"
import Gallery from "@modules/gallery/components"

const Commissions: NextPageWithLayout = () => {
  
    return (
      <>
        <div className="px-8">
            <Head title="Commissions" description="Custom-order art" />
            <Gallery category="Tattoos"/>
            <Gallery category="Fine Art"/>
            <Gallery category="Decor"/>
            <Gallery category="Accessories"/>
            <Gallery category="Apparel"/>
        </div>
      </>
   
    )
  }
  
Commissions.getLayout = (page) => <Layout>{page}</Layout>
  
export default Commissions
  