import UnderlineLink from "@modules/common/components/underline-link"
import Image from "next/image"

const Hero = () => {
  return (
    <div className="h-[90vh] w-full relative">
      <div className="text-white absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:text-left small:justify-end small:items-start small:p-32">
        <div className="bg-black pt-8 pb-10 px-12">
          <h1 className="text-2xl-semi mb-4 drop-shadow-md shadow-black">
            Summer styles are finally here
          </h1>
          <p className="text-base-regular max-w-[32rem] mb-6 drop-shadow-md shadow-black">
            This year, our new summer collection will shelter you from the harsh
            elements of a world that doesn&apos;t care if you live or die.
          </p>
          <UnderlineLink href="/store">Explore products</UnderlineLink>
        </div>
      </div>
      <Image
        src="/hero.webp"
        layout="fill"
        loading="eager"
        priority={true}
        quality={90}
        objectFit="cover"
        alt="Artwork titled 'R1L' by EyeBall"
        className="absolute inset-0"
        draggable="false"
      />
    </div>
  )
}

export default Hero
