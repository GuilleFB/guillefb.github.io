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

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true); // Inicia el desvanecimiento

      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // Incrementa el índice, reinicia al llegar al final
        setFade(false); // Restablece el estado de desvanecimiento
      }, 1000); // Duración de la transición (desaparecer + aparecer)

    }, 5000); // Cambia cada 5 segundos

    return () => clearInterval(interval); // Limpia el intervalo al desmontar
  }, [images.length]);

  return (
    <div className="relative w-full h-full">
      {/* Imagen actual con transición de opacidad */}
      <div
        className="absolute inset-0 w-full h-full transition-opacity duration-1000"
        style={{ opacity: fade ? '0.1' : '1' }}
      >
        <Image
          alt="Imagen actual"
          className="w-full h-full object-cover"
          placeholder="blur"
          priority
          src={images[currentIndex]}
        />
      </div>
    </div>
  );
});

HeroImg.displayName = 'HeroImg';
export default HeroImg;
