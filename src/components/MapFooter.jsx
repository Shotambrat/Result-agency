import React from "react";

const MapFooter = () => {
  return (
    <div className="h-[550px]">
      <iframe
        title="Intermed Innovation - Google Maps"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5990.263666042327!2d69.28771283321369!3d41.349488163895295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef35418406693%3A0xf91e0631f842852c!2sINTERMED%20Innovation!5e0!3m2!1sru!2s!4v1717666382849!5m2!1sru!2s"
        width="600"
        height="450"
        className="relative top-0 left-0 w-full h-full border-none lg:hidden"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <iframe src="https://yandex.com/map-widget/v1/?um=constructor%3Af57823732d75d6a8ad34ccece8cd6639e80a0b9b79d54688693f1ee67ec72684&amp;source=constructor" width="100%" height="450" className="hidden lg:block relative top-0 left-0 w-full h-full border-none"></iframe>
    </div>
  );
};

export default MapFooter;
