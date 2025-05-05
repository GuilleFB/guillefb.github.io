import { FC, useEffect, useState, memo } from 'react';
import Image from 'next/image';
import mallorcaImage1 from '../images/fondo/mallorca1.webp';
import mallorcaImage2 from '../images/fondo/mallorca2.webp';
import mallorcaImage3 from '../images/fondo/mallorca3.webp';
import mallorcaImage4 from '../images/fondo/mallorca4.webp';
import mallorcaImage5 from '../images/fondo/mallorca5.webp';
import mallorcaImage6 from '../images/fondo/mallorca6.webp';
import mallorcaImage7 from '../images/fondo/mallorca7.webp';
import mallorcaImage8 from '../images/fondo/mallorca8.webp';
import mallorcaImage9 from '../images/fondo/mallorca9.webp';
import mallorcaImage10 from '../images/fondo/mallorca10.webp';
import mallorcaImage11 from '../images/fondo/mallorca11.webp';
import mallorcaImage12 from '../images/fondo/mallorca12.webp';
import mallorcaImage13 from '../images/fondo/mallorca13.webp';
import mallorcaImage14 from '../images/fondo/mallorca14.webp';
import mallorcaImage15 from '../images/fondo/mallorca15.webp';
import mallorcaImage16 from '../images/fondo/mallorca16.webp';
import mallorcaImage17 from '../images/fondo/mallorca17.webp';
import mallorcaImage18 from '../images/fondo/mallorca18.webp';

const HeroImg: FC = memo(() => {
  const images = [
    mallorcaImage1,
    mallorcaImage2,
    mallorcaImage3,
    mallorcaImage4,
    mallorcaImage5,
    mallorcaImage6,
    mallorcaImage7,
    mallorcaImage8,
    mallorcaImage9,
    mallorcaImage10,
    mallorcaImage11,
    mallorcaImage12,
    mallorcaImage13,
    mallorcaImage14,
    mallorcaImage15,
    mallorcaImage16,
    mallorcaImage17,
    mallorcaImage18,
  ];

  // Mantenemos dos índices para gestionar las dos imágenes que se mostrarán
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);
  // Alternamos qué imagen está en la capa superior
  const [topImageIsActive, setTopImageIsActive] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      // Guardamos el índice actual como previo
      setPrevIndex(activeIndex);
      // Calculamos el siguiente índice para la imagen activa
      setActiveIndex((prevActive) => (prevActive + 1) % images.length);
      // Alternamos qué imagen está en la capa superior
      setTopImageIsActive(prev => !prev);
    }, 5000); // Cambia cada 5 segundos

    return () => clearInterval(interval);
  }, [activeIndex, images.length]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Primera capa de imagen */}
      <div
        className="absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out"
        style={{ 
          opacity: topImageIsActive ? 1 : 0,
          zIndex: topImageIsActive ? 2 : 1 
        }}
      >
        <Image
          alt={`Mallorca imagen ${activeIndex + 1}`}
          className="w-full h-full object-cover"
          placeholder="blur"
          priority
          src={images[activeIndex]}
        />
      </div>

      {/* Segunda capa de imagen (siempre visible debajo cuando hay transición) */}
      <div
        className="absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out"
        style={{ 
          opacity: topImageIsActive ? 0 : 1,
          zIndex: topImageIsActive ? 1 : 2 
        }}
      >
        <Image
          alt={`Mallorca imagen ${prevIndex + 1}`}
          className="w-full h-full object-cover"
          placeholder="blur"
          priority
          src={images[prevIndex]}
        />
      </div>
    </div>
  );
});

HeroImg.displayName = 'HeroImg';
export default HeroImg;