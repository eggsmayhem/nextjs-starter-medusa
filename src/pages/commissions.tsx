import Layout from "@modules/layout/templates"
import Head from "@modules/common/components/head"
import { NextPageWithLayout } from "types/global"
import Gallery from "@modules/gallery/components"


const Commissions: NextPageWithLayout = () => {
  
    return (
      <>
        <div className="px-8 bg-red-700">
            <Head title="Commissions" description="Custom-order art" />
            <Gallery category="Fine Art" url1="/six.jpg" url2="/pinkcat.jpg" url3="Unholey.jpg"/>
            <Gallery category="Tattoos" url1="/crow.jpg" url2="/plank.jpg" url3="/love.jpg"/>
            <Gallery category="Decor" url1="/shit.jpg" url2="/eyetable.jpg" url3="/butterfly.jpg"/>
            <Gallery category="Accessories" url1="/stickergroup.jpg" url2="/tittypin.jpg" url3="/eyeballpin.jpg"/>
            <Gallery category="Apparel" url1="/killgodsweater.jpg" url2="/ratvestback.jpg" url3="/ratvestfront.jpg"/>
        </div>
      </>
   
    )
  }
  
Commissions.getLayout = (page) => <Layout>{page}</Layout>
  
export default Commissions
  