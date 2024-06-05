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
    <div className="mt-8 lg:mt-24 mb-14 py-16 bg-[#D9D9D9] relative">
      <div
        className='mx-[0.625rem] sm:mx-4 md:mx-10 xl:mx-20 2xl:mx-[6.875rem] 3xl:max-w-[1500px] 3xl:mx-auto '
      >
        <div
          style={{
            background:
              "linear-gradient(to bottom right, #7B72EB 0%, #8876ec 83%, #ac98e6 100%)",
          }}
          className="lg:w-[50%] 3xl:w-[47%] p-4 sm:px-8 sm:py-6 bg-gradient-to-br from-briefFrom to-briefTo rounded-[14.32px] lg:rounded-[41px]"
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
  );
};

export default Brief;
