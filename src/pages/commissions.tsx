import Head from "@modules/common/components/head"
import Gallery from "@modules/gallery/components"
import Layout from "@modules/layout/templates"
import { NextPageWithLayout } from "types/global"

const Commissions: NextPageWithLayout = () => {
  return (
    <>
      <div className="px-8 bg-white">
        <Head title="Commissions" description="Custom-order art" />
        <div className="py-14">
          <Gallery
            category="Fine Art"
            url1="/six.jpg"
            url2="/pinkcat.jpg"
            url3="Unholey.jpg"
            des1="an interpretation of the world on fire from angels judgment"
            des2="a watermelon theme of a playful pink panther on a background of green and black."
            des3="a block of holey cheese if were poked with a searing hot staff"
          />
          <Gallery
            category="Tattoos"
            url1="/crow.jpg"
            url2="/plank.jpg"
            url3="/love.jpg"
            des1="A black drunk bird dropping its bottle"
            des2="A tattoo of Plank from Ed, Edd, and Eddy"
            des3="A tattoo of the text 'Love After Pain' writen in olde english"
          />
          <Gallery
            category="Decor"
            url1="/shit.jpg"
            url2="/eyetable.jpg"
            url3="/butterfly.jpg"
            des1="A glow in the dark Toilet Paper Bathroom Sign that reads 'Shit tickets' in old english"
            des2="a three-tier eye ball table. The top tier has a bloodshot blue eye with blood hand prints on the corners. The second tier has a red border with a black center. The bottom tier is blue"
            des3="Light blue and purple wall mounted buttterfly supports that can handle light weight items"
          />
          <Gallery
            category="Accessories"
            url1="/stickergroup.jpg"
            url2="/tittypin.jpg"
            url3="/eyeballpin.jpg"
            des1="a collection of psychotic and weird stickers"
            des2="a pin that can play an illusion with your eyes with ducks and legs"
            des3="a dead three blue-eyed eyeball with a halo is extending its tentacales with thorns"
          />
          <Gallery
            category="Apparel"
            url1="/killgodsweater.jpg"
            url2="/ratvestback.jpg"
            url3="/ratvestfront.jpg"
            des1="a sweater with the text that says 'KILL GOD' in olde english text"
            des2="a psychotic, red and yellow eyed, green rat with blood covered demonic teeth holding a block of cheese on a denim vest"
            des3="metallic sickles with wooden handles on a teal background on a denim vest"
          />
        </div>
      </div>
    </>
  )
}

Commissions.getLayout = (page) => <Layout footerBanner="commissions-form">{page}</Layout>

export default Commissions
