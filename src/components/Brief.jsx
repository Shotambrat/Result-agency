import React, { useState } from "react";

const Brief = () => {
  const [inputValue, setInputValue] = useState("");
  // Состояние для определения фокуса на инпуте
  const [isFocused, setIsFocused] = useState(false);

  const formatValue = (value) => {
    if (!value) return "";

    let formattedValue = "+998(";

    // Добавляем цифры согласно шаблону
    for (let i = 0; i < Math.min(9, value.length); i++) {
      if (i === 2) formattedValue += ")";
      if (i === 5 || i === 7) formattedValue += "-";
      formattedValue += value[i];
    }

    return formattedValue;
  };

  const handleChange = (event) => {
    let { value } = event.target;
    let numbersOnly = value.replace(/[^\d]/g, "");

    // Если начинается с 998, удаляем эти цифры (если пользователь случайно их ввел)
    if (numbersOnly.startsWith("998")) {
      numbersOnly = numbersOnly.substring(3);
    }

    setInputValue(numbersOnly);
  };

  const handleFocus = () => setIsFocused(true);

  const handleBlur = () => setIsFocused(false);

  // Вычисляем отображаемое значение на основе фокуса и введенных цифр
  const displayValue = isFocused || inputValue ? formatValue(inputValue) : "";

  return (
    <div className="lg:mt-24 mb-14 relative flex justify-center items-end h-[62rem] lg:h-[32rem] 2xl:h-[35rem]">
      <div className="w-full h-[37rem] lg:h-full lg:absolute relative left-0 lg:top-0">
        <a
          href="https://yandex.uz/maps/org/173898485881/?utm_medium=mapframe&utm_source=maps"
          className="text-[#eee] text-[12px] absolute top-0"
        >
          Intermed Innovation
        </a>
        <a
          href="https://yandex.uz/maps/10335/tashkent/category/medical_center_clinic/184106108/?utm_medium=mapframe&utm_source=maps"
          className="text-[#eee] text-[12px] absolute top-[14px]"
        >
          Медцентр, клиника в Ташкенте
        </a>
        <a
          href="https://yandex.uz/maps/10335/tashkent/category/medical_laboratory/184106078/?utm_medium=mapframe&utm_source=maps"
          className="text-[#eee] text-[12px] absolute top-[14px]"
        >
          Медицинская лаборатория в Ташкенте
        </a>
        <iframe
          title="Intermed Innovation"
          src="https://yandex.uz/map-widget/v1/?ll=69.280676%2C41.350121&mode=poi&poi%5Bpoint%5D=69.291036%2C41.350889&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D173898485881&z=13"
          width="560"
          height="400"
          frameborder="1"
          allowfullscreen="true"
          className="relative top-0 left-0 w-full h-full"
        ></iframe>
      </div>
      <div className="absolute top-0 left-0 lg:relative w-full 3xl:w-[1500px] h-[32rem] lg:h-full flex items-center">
        <div
          className={`relative mx-auto lg:mx-0 lg:left-10 xl:left-20 2xl:left-[6.875rem] 3xl:left-0 bottom-0 w-[calc(100%-1.25rem)] sm:w-[calc(100%-2rem)] md:w-[calc(100%-5rem)] lg:w-[50%] xl:w-[45%]`}
        >
          <div
            style={{
              background:
                "linear-gradient(to bottom right, #7B72EB 0%, #8876ec 83%, #ac98e6 100%)",
            }}
            className="p-4 sm:px-8 sm:py-6 bg-gradient-to-br from-briefFrom to-briefTo rounded-[14.32px] lg:rounded-[41px]"
          >
            {/* Left Block */}
            <div className="">
              {/* <img
          src={BriefImage}
          alt="Brief Description"

          className="w-1/2 -mr-[100px] relative -left-[100px] top-0"
        /> */}
              <div>
                <h3 className="text-white text-[18px] sm:text-[30px] lg:text-[24px] 2xl:text-[32px] mb-2 leading-8">
                  Оставьте заявку,чтобы обсудить проект
                </h3>
                <p className="text-white text-[13px] sm:text-[15px] lg:text-[12px] 2xl:text-[17px] mt-4 font-normal">
                  Мы свяжемся с вами для уточнения вопросов о дальнейшем
                  сотрудничестве
                </p>
              </div>
            </div>

            {/* Right Block */}
            <div className="flex-1 mt-4 sm:pl-4 sm:pr-[30%] lg:pr-[20%]">
              <form className="flex flex-col space-y-4">
                {/* Assuming you're asking for name, email, phone, and a message */}
                <input
                  type="text"
                  placeholder="ФИО"
                  required
                  className="text-[15px] 2xl:text-[20px] bg-transparent border-b-4 border-white text-white placeholder-white focus:border-green-500 focus:outline-none focus:border-b-[3px] pb-2"
                />
                <input
                  type="tel"
                  placeholder="Номер телефона"
                  required
                  value={displayValue}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  className="text-[15px] 2xl:text-[20px] bg-transparent border-b-4 border-white text-white placeholder-white focus:border-green-500 focus:outline-none focus:border-b-[3px] pb-2"
                />
                <input
                  placeholder="Удобное время для звонка"
                  required
                  className="text-[15px] 2xl:text-[20px] bg-transparent border-b-4 border-white text-white placeholder-white focus:border-green-500 focus:outline-none focus:border-b-[3px] pb-2"
                />
                <textarea
                  placeholder="Ожидаемый результат"
                  className="text-[15px] 2xl:text-[20px] bg-transparent border-b-4 border-white text-white placeholder-white focus:border-green-500 focus:outline-none focus:border-b-[3px]"
                />
                <button
                  type="submit"
                  className="mt-4 sm:mr-auto sm:ml-2 sm:px-16 bg-gray-300 bg-opacity-30 border-2 text-white py-2 rounded-full hover:bg-gray-200 hover:text-uslugi-text transition-colors"
                >
                  Оставить заявку
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brief;
