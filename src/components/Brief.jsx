import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import MapFooter from "./MapFooter";

const Brief = () => {
  const { t } = useTranslation();

  const [inputValue, setInputValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const formatValue = (value) => {
    if (!value) return "";

    let formattedValue = "+998(";

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

    if (numbersOnly.startsWith("998")) {
      numbersOnly = numbersOnly.substring(3);
    }

    setInputValue(numbersOnly);
  };

  const handleFocus = () => setIsFocused(true);

  const handleBlur = () => setIsFocused(false);

  const displayValue = isFocused || inputValue ? formatValue(inputValue) : "";

  const handleInvalid = (e) => {
    e.target.setCustomValidity('');
    if (!e.target.validity.valid) {
      e.target.setCustomValidity(t("form-error-message"));
    }
  };

  const handleInput = (e) => {
    e.target.setCustomValidity('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    if (form.checkValidity()) {
      // Form submission logic here
      console.log('Form submitted:', inputValue);
    } else {
      form.reportValidity(); // This will trigger the custom validation messages
    }
  };

  return (
    <div className="lg:mt-24 mb-14 relative flex justify-center items-end h-[62rem] lg:h-[32rem] 2xl:h-[35rem]">
    <div className="w-full h-[37rem] lg:h-full lg:absolute relative left-0 lg:top-0 z-0">
        <MapFooter />
    </div>
    <div className="absolute top-0 left-0 lg:relative w-full 3xl:w-[1500px] h-[32rem] lg:h-full flex items-center z-10" style={{ pointerEvents: 'none' }}>
        <div
            className={`relative mx-auto lg:mx-0 lg:left-10 xl:left-20 2xl:left-[6.875rem] 3xl:left-0 bottom-0 w-[calc(100%-1.25rem)] sm:w-[calc(100%-2rem)] md:w-[calc(100%-5rem)] lg:w-[50%] xl:w-[45%]`}
        >
            <div
                style={{
                    background: 'linear-gradient(to bottom right, #7B72EB 0%, #8876ec 83%, #ac98e6 100%)',
                    pointerEvents: 'auto',
                }}
                className="p-4 sm:px-8 sm:py-6 bg-gradient-to-br from-briefFrom to-briefTo rounded-[14.32px] lg:rounded-[41px]"
            >
                <div>
                    <div>
                        <h3 className="text-white text-[18px] sm:text-[30px] lg:text-[24px] 2xl:text-[32px] mb-2 leading-8">
                            {t("brief-form-title")}
                        </h3>
                        <p className="text-white text-[13px] sm:text-[15px] lg:text-[12px] 2xl:text-[17px] mt-4 font-normal">
                            {t("brief-form-subtitle")}
                        </p>
                    </div>
                </div>
                <div className="flex-1 mt-4 sm:pl-4 sm:pr-[30%] lg:pr-[20%]">
                    <form className="flex flex-col space-y-4" onSubmit={handleSubmit} noValidate>
                        <input
                            type="text"
                            name="name"
                            placeholder={t("brief-form-name")}
                            required
                            onInvalid={handleInvalid}
                            onInput={handleInput}
                            className="text-[15px] 2xl:text-[20px] bg-transparent border-b-4 border-white text-white placeholder-white focus:border-green-500 focus:outline-none focus:border-b-[3px] pb-2"
                            style={{ pointerEvents: 'auto' }}
                        />
                        <input
                            type="tel"
                            name="phone"
                            placeholder={t("brief-form-phone")}
                            required
                            value={displayValue}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            onInvalid={handleInvalid}
                            onInput={handleInput}
                            className="text-[15px] 2xl:text-[20px] bg-transparent border-b-4 border-white text-white placeholder-white focus:border-green-500 focus:outline-none focus:border-b-[3px] pb-2"
                            style={{ pointerEvents: 'auto' }}
                        />
                        <input
                            type="text"
                            name="time"
                            placeholder={t("brief-form-time")}
                            required
                            onInvalid={handleInvalid}
                            onInput={handleInput}
                            className="text-[15px] 2xl:text-[20px] bg-transparent border-b-4 border-white text-white placeholder-white focus:border-green-500 focus:outline-none focus:border-b-[3px] pb-2"
                            style={{ pointerEvents: 'auto' }}
                        />
                        <textarea
                            name="result"
                            placeholder={t("brief-form-result")}
                            required
                            onInvalid={handleInvalid}
                            onInput={handleInput}
                            className="text-[15px] 2xl:text-[20px] bg-transparent border-b-4 border-white text-white placeholder-white focus:border-green-500 focus:outline-none focus:border-b-[3px]"
                            style={{ pointerEvents: 'auto' }}
                        />
                        <button
                            type="submit"
                            className="mt-4 sm:mr-auto sm:ml-2 sm:px-16 bg-gray-300 bg-opacity-30 border-2 text-white py-2 rounded-full hover:bg-gray-200 hover:text-uslugi-text transition-colors"
                            style={{ pointerEvents: 'auto' }}
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
