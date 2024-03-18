import React from "react";

const MainCases = () => {
  const cases1 = [
    {
      title: "Наши кейсы",
      description:
        "Lorem ipsum dolor sit amet consectetur. Hendrerit placerat ultricies erat donec. ",
    },
    {
      title: "Наши кейсы",
      description:
        "Lorem ipsum dolor sit amet consectetur. Hendrerit placerat ultricies erat donec. ",
    },
  ];

  const cases2 = [
    {
      title: "Наши кейсы",
      description:
        "Lorem ipsum dolor sit amet consectetur. Hendrerit placerat ultricies erat donec. ",
    },
    {
      title: "Наши кейсы",
      description:
        "Lorem ipsum dolor sit amet consectetur. Hendrerit placerat ultricies erat donec. ",
    },
    {
      title: "Наши кейсы",
      description:
        "Lorem ipsum dolor sit amet consectetur. Hendrerit placerat ultricies erat donec. ",
    },
  ];
  return (
    <div className="w-10/12 h-auto mt-9 mx-auto p-5">
    <h2 className="text-center text-uslugi-text text-[64px] mb-5">Наши Кейсы</h2>
    <div className="flex flex-wrap justify-center gap-4">
      {cases1.map((elem, index) => (
        <div key={index} className="flex flex-col w-[calc(50%-1rem)] p-4">
          <div className="h-56 bg-blue-800 w-full mb-4 rounded-[20px]"></div>
          <h4 className="text-uslugi-text text-[36px]">{elem.title}</h4>
          <p className="text-uslugi-text text-[24px]">{elem.description}</p>
        </div>
      ))}
    </div>
    <div className="grid grid-cols-3 gap-4 mt-5">
      {cases2.map((elem, index) => (
        <div key={index} className="flex flex-col p-4">
          <div className="h-56 bg-blue-800 w-full mb-4 rounded-[20px]"></div>
          <h4 className="text-uslugi-text text-[36px]">{elem.title}</h4>
          <p className="text-uslugi-text text-[24px]">{elem.description}</p>
        </div>
      ))}
    </div>
  </div>
  );
};

export default MainCases;
