interface FormatGalleryProps {
    category: string,
    url1: string,
    url2: string,
    url3: string,
};
const Gallery = ({ category, url1, url2, url3 }: FormatGalleryProps) => {
    return (
        <>
            <h1 className="text-center text-3xl">{category}</h1>
            <div className="container mx-auto space-y-2 lg:space-y-0 lg:gap-2 lg:grid lg:grid-cols-3">
                <div className="w-full rounded hover:shadow-2xl">
                    <img src={url1}
                        alt="image"/>
                </div>
                <div className="w-full rounded hover:opacity-50">
                    <img src={url2}
                        alt="image"/>
                </div>
                <div className="w-full rounded hover:shadow-2xl">
                    <img src={url3}
                        alt="image"/>
                </div>
            </div>
        </>
    )
  }
  
  export default Gallery