import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const Application = ({ isOpen, onClose }) => {
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

  if (!isOpen) return null;

  const handleInvalid = (e) => {
    e.target.setCustomValidity("");
    if (!e.target.validity.valid) {
      e.target.setCustomValidity(t("form-error-message"));
    }
  };

  const handleInput = (e) => {
    e.target.setCustomValidity("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    if (form.checkValidity()) {
      // Form submission logic here
      console.log("Form submitted:", inputValue);
    } else {
      form.reportValidity(); // This will trigger the custom validation messages
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-[50] flex justify-center items-center top-0">
      <div className="md:w-2/4 lg:w-1/3 lg:my-8 xl:w-2/5 2xl:w-1/4 bg-gradient-to-b from-[#746FAE] to-[#8A66F0] p-8 rounded-[20px] relative">
        <button
          onClick={onClose}
          className="absolute top-0 right-0 m-4 text-white text-2xl"
        >
          X
        </button>
        <div className="flex-1">
          <form className="flex flex-col space-y-6">
            <input
              type="text"
              name="name"
              placeholder={t("cover-form-name")}
              required
              onInvalid={handleInvalid}
              onInput={handleInput}
              style={{ fontSize: "18px" }}
              className="bg-transparent border-b-2 border-white text-white placeholder-white focus:border-green-500 focus:outline-none focus:border-b-[3px] pb-2"
            />
            <input
              type="email"
              name="email"
              placeholder={t("cover-form-email")}
              required
              onInvalid={handleInvalid}
              onInput={handleInput}
              style={{ fontSize: "18px" }}
              className="bg-transparent border-b-2 border-white text-white placeholder-white focus:border-green-500 focus:outline-none focus:border-b-[3px] pb-2"
            />
            <input
              type="text"
              name="phone"
              placeholder={t("cover-form-phone")}
              required
              onInvalid={handleInvalid}
              onInput={handleInput}
              value={displayValue}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              style={{ fontSize: "18px" }}
              className="bg-transparent border-b-2 border-white text-white placeholder-white focus:border-green-500 focus:outline-none focus:border-b-[3px] pb-2"
            />
            <textarea
              name="message"
              placeholder={t("cover-form-message")}
              style={{ fontSize: "18px" }}
              className="bg-transparent border-b-2 border-white text-white placeholder-white focus:border-green-500 focus:outline-none focus:border-b-[3px] pb-2"
            />
            <div className="text-center">
              <button
                type="submit"
                className="mt-4 bg-gray-300 bg-opacity-30 border-2 text-white py-2 px-2 xs:px-8 rounded-full hover:bg-gray-200 hover:text-uslugi-text transition-colors"
              >
                {t("cover-form-button")}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Application;
