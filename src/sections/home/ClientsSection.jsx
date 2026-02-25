import React, { useState } from "react";
import ClientLogoCard from "../../components/ClientLogoCard";

const ClientsSection = () => {
  const [images, setImages] = useState([
    { img: "../src/assets/images/ClientsLogo/mahindra.svg" },
    { img: "../src/assets/images/ClientsLogo/kishandas.svg" },
    { img: "../src/assets/images/ClientsLogo/exicom.svg" },
    { img: "../src/assets/images/ClientsLogo/bramha-realty.svg" },
    { img: "../src/assets/images/ClientsLogo/chargeup.svg" },
    { img: "../src/assets/images/ClientsLogo/hp.svg" },
    { img: "../src/assets/images/ClientsLogo/Ditra.png" },
    { img: "../src/assets/images/ClientsLogo/11_11.svg" },
    { img: "../src/assets/images/ClientsLogo/snuzzles.svg" },
    { img: "../src/assets/images/ClientsLogo/G.A.Bhilare.png" },
    { img: "../src/assets/images/ClientsLogo/Brihanmumbai.png" },
    { img: "../src/assets/images/ClientsLogo/masoli.png" },
  ]);
  return (
    <div className="px-[1.5rem] md:px-[4rem] py-[2em] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[2em]">
      {images.map((image, index) => (
        <ClientLogoCard key={index} img={image.img} />
      ))}
    </div>
  );
};

export default ClientsSection;
