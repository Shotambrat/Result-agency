import React from "react";

const MapFooter = () => {
  return (
    <div className="mb-8 w-1/2 h-[200px] mx-auto rounded-[40px] overflow-hidden">
      <iframe
        src="https://yandex.uz/map-widget/v1/?ll=69.300455%2C41.354099&mode=search&oid=214179343892&ol=biz&z=19.75"
        width="100%"
        height="100%"
        frameBorder="0"
        allowFullScreen="true"
        style={{ borderRadius: "40px" }}
        title="Yandex Map"
      ></iframe>
      </div>
  );
};

export default MapFooter;
