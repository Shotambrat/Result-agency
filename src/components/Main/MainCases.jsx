import React from "react";

const MainCases = () => {
  const cases1 = [
    {
      title: "Наши кейсы",
      description: "Lorem",
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

  return (
    <div className="mt-8 lg:mt-[3rem] mx-[0.625rem] sm:mx-4 md:mx-10 xl:mx-20 2xl:mx-[6.875rem] 3xl:max-w-[1500px] 3xl:mx-auto">
      <h2 className="text-headings-color text-[20px] xs:text-[24px] md:text-[30px] 2xl:text-[56px] text-center md:text-left font-semibold lg:font-bold mb-4">
        Наши Кейсы
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 p-[0.625rem] sm:p-0 gap-x-[0.625rem] lg:gap-x-[1rem] xl:gap-x-6 gap-y-5">
        {cases1.map((elem, index) => (
          <div key={index} className="">
            <div className="rounded-[7.39px] lg:rounded-3xl h-[6.5rem] xs:h-36 md:h-40 lg:h-56 xl:h-[15rem] 2xl:h-[17rem] 3xl:h-[19rem] border-[1px] border-solid border-cases-border"></div>
            <h4 className="text-headings-color font-medium md:font-semibold text-[20px] md:text-[24px] mt-2">
              {elem.title}
            </h4>
            <p className="text-headings-color font-regular text-[13px] md:text-[15px] mt-1">
              {elem.description}
            </p>
          </div>
        ))}
        <div>
          <div className="rounded-[7.39px] text-[14px] md:text-xl lg:text-2xl lg:rounded-3xl h-[6.5rem] xs:h-36 md:h-40 lg:h-56 xl:h-[15rem] 2xl:h-[17rem] 3xl:h-[19rem] cursor-pointer border-[1px] border-solid border-[#d3d2e4] flex justify-center items-center">
            Заполнить бриф
          </div>
        </div>
      </div>
      {/* <div className="lg:grid lg:grid-cols-3 lg:gap-4 mt-5">
        {cases2.map((elem, index) => (
          <div key={index} className="flex flex-col p-4">
            <div className="h-56 bg-blue-800 w-full mb-4 rounded-[20px]"></div>
            <h4 className="text-headings-color font-medium text-[20px]">{elem.title}</h4>
            <p className="text-headings-color text-[24px]">{elem.description}</p>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default MainCases;
