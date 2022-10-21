import NextJsCarousel from "@modules/common/components/carousel"
import UnderlineLink from "@modules/common/components/underline-link"
import Image from "next/image"

const FooterCTA = () => {
  return (
    <div className="bg-black text-white w-full">
      <div className="content-container flex flex-col-reverse gap-y-8 small:flex-row small:items-center justify-between py-16 relative">
        <div>
          <h3 className="text-2xl-semi">Get a commission</h3>
          <div className="mt-6">
            <UnderlineLink href="/commissions">Get commission</UnderlineLink>
          </div>
        </div>

        <div className="relative w-full aspect-square small:w-[50%] small:aspect-[28/36]">
          <NextJsCarousel />
        </div>
      </div>
    </div>
  )
}

export default FooterCTA
