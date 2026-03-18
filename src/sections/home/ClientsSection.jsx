import { useState } from "react";
import ClientLogoCard from "../../components/ClientLogoCard";
import mahindra from '../../assets/images/ClientsLogo/mahindra.svg'
import kishandas from '../../assets/images/ClientsLogo/kishandas.svg'
import exicom from '../../assets/images/ClientsLogo/exicom.svg'
import bramhaRealty from '../../assets/images/ClientsLogo/bramha-realty.svg'
import chargeup from '../../assets/images/ClientsLogo/chargeup.svg'
import hp from '../../assets/images/ClientsLogo/hp.svg'
import Ditra from '../../assets/images/ClientsLogo/Ditra.png'
import ElvnElvn from '../../assets/images/ClientsLogo/11_11.svg'
import snuzzles from '../../assets/images/ClientsLogo/snuzzles.svg'
import GABhilare from '../../assets/images/ClientsLogo/G.A.Bhilare.png'
import Brihanmumbai from '../../assets/images/ClientsLogo/Brihanmumbai.png'
import masoli from '../../assets/images/ClientsLogo/Masoli.png'

const ClientsSection = () => {
  const [images, setImages] = useState([
    { img: mahindra },
    { img: kishandas },
    { img: exicom },
    { img: bramhaRealty },
    { img: chargeup },
    { img: hp },
    { img: Ditra },
    { img: ElvnElvn },
    { img: snuzzles },
    { img: GABhilare },
    { img: Brihanmumbai },
    { img: masoli },
  ]);
  return (
    <section className="px-[1.5rem] md:px-[4rem] py-[2em] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[2em]">
      {images.map((image, index) => (
        <ClientLogoCard key={index} img={image.img} />
      ))}
    </section>
  );
};

export default ClientsSection;
