import React from "react";
import localFont from "next/font/local";

const greatVibes = localFont({
  src: "./fonts/GreatVibes-Regular.ttf",
});

const MensajeSection = () => {
  return (
    <div className="p-6 text-center bg-primary-800 text-primary-300 text-lg">
      <h2 className={greatVibes.className}>
        Con inmensa alegría y gratitud, queremos compartir con usted una noticia
        muy especial, después de un hermoso camino juntos, hemos decidido unir
        nuestras vidas en matrimonio y queremos compartir ese momento con las
        personas más especiales para nosotros. ¡Tú eres una de ellas!.
      </h2>
      <br />
      <h3 className={greatVibes.className}>
        Acompáñanos y has de nuestro día soñado un momento aún más especial.
      </h3>
    </div>
  );
};

export default MensajeSection;
