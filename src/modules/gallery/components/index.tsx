interface FormatGalleryProps {
  category: string
  url1: string
  url2: string
  url3: string
  des1: string
  des2: string
  des3: string
}
const Gallery = ({ category, url1, url2, url3, des1, des2, des3 }: FormatGalleryProps) => {
  return (
    <>
      <h1 className="text-center text-3xl font-bold">{category}</h1>
      <div className="container pt-12 pb-24 justify-items-center place-items-start mx-auto lg:gap-8 lg:grid lg:grid-cols-3">
        <div className="w-full aspect-square rounded hover:opacity-75 hover:shadow-xl">
          <img src={url1} alt={des1} className="w-full h-full object-cover" />
        </div>
        <div className="w-full aspect-square rounded hover:opacity-75 hover:shadow-xl">
          <img src={url2} alt={des2} className="w-full h-full object-cover" />
        </div>
        <div className="w-full aspect-square rounded hover:opacity-75 hover:shadow-xl">
          <img src={url3} alt={des3} className="w-full h-full object-cover" />
        </div>
      </div>
    </>
  )
}

export default Gallery
