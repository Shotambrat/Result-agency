import React from "react";
import Monitor from '../../assets/img/monitor.png'

const MainArticle = () => {
  const articles = [
    {
      title: "Мы не делаем однотипных предложений",
      category: "маркетинг",
    },
    {
      title: "Мы не делаем однотипных предложений",
      category: "маркетинг",
    },
    {
      title: "Мы не делаем однотипных предложений",
      category: "маркетинг",
    },
  ];

  return (
    <div className="w-10/12 mx-auto mt-9">
      <h2 className="text-5xl text-center text-uslugi-text font-bold mb-6">Наши статьи</h2>
      <div className="flex justify-between space-x-4">
        {articles.map((article, index) => (
          <div
            key={index}
            className="flex flex-1 flex-col items-center text-white overflow-hidden"
          >
            <div className="flex-1 flex flex-col justify-center items-center p-4 bg-blue-500 rounded-[30px]">
              <div className="w-full h-auto mb-4 flex items-center justify-center">
                <img src={Monitor} alt="monitor" />
              </div>
              <div>
              <p className=" text-2xl mb-4">{article.title}</p>
              <button className="border-2 border-white text-white bg-transparent py-2 px-4 rounded-full hover:bg-gray-300 hover:text-blue-500 transition-colors">
                {article.category}
              </button>

              </div>
            </div>
            {/* Button outside of the blue block */}
            <a
              className="cursor-pointer w-2/3 mt-7 py-4 pt-3 bg-button-color text-white rounded-[40px] text-center transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-200 hover:bg-gradient-to-r hover:from-[#ffffff]/30 hover:to-[#ffffff]/10 active:animate-pulseText"
            >
              Перейти в блог
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainArticle;
