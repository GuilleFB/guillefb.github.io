import { FC, useEffect, useState, memo } from 'react';
import Image from 'next/image';
import mallorcaImage1 from '../images/fondo/mallorca1.jpg';
import mallorcaImage2 from '../images/fondo/mallorca2.jpg';
import mallorcaImage3 from '../images/fondo/mallorca3.jpg';
import mallorcaImage4 from '../images/fondo/mallorca4.jpg';
import mallorcaImage5 from '../images/fondo/mallorca5.jpg';
import mallorcaImage6 from '../images/fondo/mallorca6.jpg';
import mallorcaImage7 from '../images/fondo/mallorca7.jpg';
import mallorcaImage8 from '../images/fondo/mallorca8.jpg';
import mallorcaImage9 from '../images/fondo/mallorca9.jpg';
import mallorcaImage10 from '../images/fondo/mallorca10.jpg';
import mallorcaImage11 from '../images/fondo/mallorca11.jpg';
import mallorcaImage12 from '../images/fondo/mallorca12.jpg';
import mallorcaImage13 from '../images/fondo/mallorca13.jpg';
import mallorcaImage14 from '../images/fondo/mallorca14.jpg';

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

    }, 7000); // Cambia cada 5 segundos

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
