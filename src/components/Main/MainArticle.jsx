import React from "react";
import Monitor from "../../assets/img/monitor.png";

const MainArticle = () => {
  const articles = [
    {
      title: "Как социальные сети могут улучшить репутацию вашей клиники",
      category: "маркетинг",
    },
    {
      title: "Интерактивный опрос: оцените эффективность вашего маркетинга",
      category: "маркетинг",
    },
    {
      title: "SEO для медицинских сайтов: Полное руководство",
      category: "маркетинг",
    },
  ];

  return (
    <div className="mx-[0.625rem] lg:mt-[3rem] sm:mx-4 md:mx-10 xl:mx-20 2xl:mx-[6.875rem] mt-8">
      <h2 className="text-[28px] sm:text-[32px] 2xl:text-[64px] font-semibold text-center mb-4 sm:text-left">
        Новые статьи
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-[0.625rem] gap-x-5 ">
        {articles.map((article, index) => (
          <div key={index} className="text-white">
            <div className="p-4 bg-[#7B72EB] rounded-[14.32px] lg:rounded-3xl">
              <div className="w-full h-auto mb-5 flex items-center justify-center ">
                <img src={Monitor} alt="monitor" />
              </div>
              <div>
                <div className="h-[5rem] 2xl:h-[10rem] mb-4">
                  <p className="text-[18px] 2xl:text-[28px] 2xl:h-[10rem] font-medium overflow-y-hidden">
                    {article.title}
                  </p>
                </div>
                <button className="text-[15px] 2xl:text-[22px] font-medium border-[1px] 2xl:mb-4 border-white text-white bg-transparent py-1 px-8 rounded-full hover:bg-gray-300 hover:text-blue-500 transition-colors ">
                  {article.category}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainArticle;
