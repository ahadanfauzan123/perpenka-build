import Image from "next/image";
import React, { useContext } from "react";
import Logo from "../public/img/logo.jpg";
import { NewsContext } from "../context/NewsContext";
function FeaturedImageGallery() {
  const {galleryDashboard} = useContext(NewsContext)
  console.log(galleryDashboard)
  
 
  const [active, setActive] = React.useState(
    `https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80`
  );
 
  return (
    <div className="grid gap-4 w-[80vw] mx-auto">
      <div>
        <img
          className="h-[70vh] w-full rounded-lg object-cover object-center md:h-[480px]"
          src={active}
          alt=""
        />
      </div>
      <div className="grid grid-cols-5 gap-4 w-full mx-auto">
        {galleryDashboard.map( gm => (
            <img
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