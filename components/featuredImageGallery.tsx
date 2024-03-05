import Image from "next/image";
import React, { useContext } from "react";
import Logo from "../public/img/logo.jpg";
import { NewsContext } from "../context/NewsContext";
function FeaturedImageGallery() {
  const {galleryDashboard} = useContext(NewsContext)
  console.log(galleryDashboard)
  const data = [
    {
      imgelink:
        "../public/logofix.png",
    },
    {
      imgelink:
        "../public/logofix.png",
    },
    {
      imgelink:
        "../public/logofix.png",
    },
    {
      imgelink:
        "../public/logofix.png",
    },
    {
      imgelink:
        "../public/logofix.png",
    },
  ];
  
 
  const [active, setActive] = React.useState(
    ``
  );
 
  return (
    <div className="grid gap-4 w-[80vw] mx-auto">
      <div>
        <Image
        width={600}
        height={400}
          className="h-[70vh] w-full rounded-lg object-cover object-center md:h-[480px]"
          src={active}
          alt=""
        />
      </div>
      <div className="grid grid-cols-5 gap-4 w-full mx-auto">
        {galleryDashboard.map( gm => (
            <Image
            key={gm.id}
              width={200}
              height={80}
              onClick={() => setActive(gm.data.url)}
              src={gm.data.url}
              className="h-20 w-[200px] cursor-pointer rounded-lg object-cover object-center"
              alt="gallery-image"
            />
            // <div key={gm.id}>
            //   test
            // </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedImageGallery