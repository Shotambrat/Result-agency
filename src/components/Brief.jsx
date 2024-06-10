import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const Brief = () => {
  const { t } = useTranslation();

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
        <iframe
          title="Intermed Innovation"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5990.263666042327!2d69.28771283321369!3d41.349488163895295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef35418406693%3A0xf91e0631f842852c!2sINTERMED%20Innovation!5e0!3m2!1sru!2s!4v1717666382849!5m2!1sru!2s"
          width="600"
          height="450"
          className="relative top-0 left-0 w-full h-full border-none"
          allowfullscreen="true"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
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
                  {t("brief-form-title")}
                </h3>
                <p className="text-white text-[13px] sm:text-[15px] lg:text-[12px] 2xl:text-[17px] mt-4 font-normal">
                  {t("brief-form-subtitle")}
                </p>
              </div>
            </div>

            {/* Right Block */}
            <div className="flex-1 mt-4 sm:pl-4 sm:pr-[30%] lg:pr-[20%]">
              <form className="flex flex-col space-y-4">
                {/* Assuming you're asking for name, email, phone, and a message */}
                <input
                  type="text"
                  placeholder={t("brief-form-name")}
                  required
                  className="text-[15px] 2xl:text-[20px] bg-transparent border-b-4 border-white text-white placeholder-white focus:border-green-500 focus:outline-none focus:border-b-[3px] pb-2"
                />
                <input
                  type="tel"
                  placeholder={t("brief-form-phone")}
                  required
                  value={displayValue}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  className="text-[15px] 2xl:text-[20px] bg-transparent border-b-4 border-white text-white placeholder-white focus:border-green-500 focus:outline-none focus:border-b-[3px] pb-2"
                />
                <input
                  placeholder={t("brief-form-time")}
                  required
                  className="text-[15px] 2xl:text-[20px] bg-transparent border-b-4 border-white text-white placeholder-white focus:border-green-500 focus:outline-none focus:border-b-[3px] pb-2"
                />
                <textarea
                  placeholder={t("brief-form-result")}
                  className="text-[15px] 2xl:text-[20px] bg-transparent border-b-4 border-white text-white placeholder-white focus:border-green-500 focus:outline-none focus:border-b-[3px]"
                />
                <button
                  type="submit"
                  className="mt-4 sm:mr-auto sm:ml-2 sm:px-16 bg-gray-300 bg-opacity-30 border-2 text-white py-2 rounded-full hover:bg-gray-200 hover:text-uslugi-text transition-colors"
                >
                  {t("brief-form-button")}
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
