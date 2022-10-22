interface FormatGalleryProps {
  category: string
  url1: string
  url2: string
  url3: string
}
const Gallery = ({ category, url1, url2, url3 }: FormatGalleryProps) => {
  return (
    <>
      <h1 className="text-center text-3xl font-bold">{category}</h1>
      <div className="container pt-12 pb-24 justify-items-center place-items-start mx-auto lg:gap-8 lg:grid lg:grid-cols-3">
        <div className="w-full aspect-square rounded hover:opacity-75 hover:shadow-xl">
          <img src={url1} alt="image" className="w-full h-full object-cover" />
        </div>
        <div className="w-full aspect-square rounded hover:opacity-75 hover:shadow-xl">
          <img src={url2} alt="image" className="w-full h-full object-cover" />
        </div>
        <div className="w-full aspect-square rounded hover:opacity-75 hover:shadow-xl">
          <img src={url3} alt="image" className="w-full h-full object-cover" />
        </div>
      </div>
    </>
  )
}

export default Gallery
