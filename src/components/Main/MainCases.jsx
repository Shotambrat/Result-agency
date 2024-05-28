import React from "react";

const MainCases = () => {
  const cases1 = [
    {
      title: "Наши кейсы",
      description:
        "Lorem",
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
    <div className="mt-8 sm:mx-4 md:mx-10">
      <h2 className="text-center text-[28px] font-semibold mb-4">Наши Кейсы</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 p-[0.625rem] sm:p-0 gap-x-[0.625rem] gap-y-5">
        {cases1.map((elem, index) => (
          <div key={index} className="">
            <div className="h-[6.5rem] rounded-[7.39px] lg:h-56 border-[1px] border-solid border-[4A448E]"></div>
            <h4 className="text-[#191359] font-medium md:font-semibold text-[20px] md:text-[24px] mt-2">
              {elem.title}
            </h4>
            <p className="text-[#191359] font-regular text-[13px] md:text-[15px] mt-1">
              {elem.description}
            </p>
          </div>
        ))}
      </div>
      {/* <div className="lg:grid lg:grid-cols-3 lg:gap-4 mt-5">
        {cases2.map((elem, index) => (
          <div key={index} className="flex flex-col p-4">
            <div className="h-56 bg-blue-800 w-full mb-4 rounded-[20px]"></div>
            <h4 className="text-[#191359] font-medium text-[20px]">{elem.title}</h4>
            <p className="text-[#191359] text-[24px]">{elem.description}</p>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default MainCases;
