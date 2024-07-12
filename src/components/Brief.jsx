import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import MapFooter from "./MapFooter";

const Brief = () => {
  const { t } = useTranslation();

  const notifySuccess = () => toast.success(t('zayavca-success'));
  const notifyError = () => toast.error(t('fill-form-warning'));

  const [inputValue, setInputValue] = useState("");
  const [phone, setPhone] = useState("");
  const [time, setTime] = useState("");
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    checkFormValidity();
  }, [inputValue, phone, time, result]);

  const checkFormValidity = () => {
    if (inputValue && phone && time && result) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  };

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

  const handleChangePhone = (event) => {
    let { value } = event.target;
    let numbersOnly = value.replace(/[^\d]/g, "");

    if (numbersOnly.startsWith("998")) {
      numbersOnly = numbersOnly.substring(3);
    }

    setPhone(numbersOnly);
  };

  const getFormattedPhone = () => {
    return formatValue(phone);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const tgBotToken = "7274329911:AAGdW7ppyWoVE3n4dby4mIjntK6FstZCeFw";  // Замените на ваш токен
    const chatId = "-1002166615539";  // Замените на ваш ID чата
    const text = `
      Name: ${inputValue}\n
      Phone: ${phone}\n
      Time: ${time}\n
      Message: ${result}
    `;

    try {
      const response = await axios.post(`https://api.telegram.org/bot${tgBotToken}/sendMessage`, {
        chat_id: chatId,
        text: text
      });
      console.log("Form submitted:", response.data);
      notifySuccess();
    } catch (error) {
      console.error("Error submitting form:", error);
      notifyError();
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
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className="text-[15px] 2xl:text-[20px] bg-transparent border-b-4 border-white text-white placeholder-white focus:border-green-500 focus:outline-none focus:border-b-[3px] pb-2"
                  style={{ pointerEvents: 'auto' }}
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder={t("brief-form-phone")}
                  required
                  value={getFormattedPhone()}
                  onChange={handleChangePhone}
                  className="text-[15px] 2xl:text-[20px] bg-transparent border-b-4 border-white text-white placeholder-white focus:border-green-500 focus:outline-none focus:border-b-[3px] pb-2"
                  style={{ pointerEvents: 'auto' }}
                />
                <input
                  type="text"
                  name="time"
                  placeholder={t("brief-form-time")}
                  required
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="text-[15px] 2xl:text-[20px] bg-transparent border-b-4 border-white text-white placeholder-white focus:border-green-500 focus:outline-none focus:border-b-[3px] pb-2"
                  style={{ pointerEvents: 'auto' }}
                />
                <textarea
                  name="result"
                  placeholder={t("brief-form-result")}
                  required
                  value={result}
                  onChange={(e) => setResult(e.target.value)}
                  className="text-[15px] 2xl:text-[20px] bg-transparent border-b-4 border-white text-white placeholder-white focus:border-green-500 focus:outline-none focus:border-b-[3px]"
                  style={{ pointerEvents: 'auto' }}
                />
                <button
                  type="submit"
                  disabled={!isFormValid || isSubmitting}
                  className={`mt-4 sm:mr-auto sm:ml-2 sm:px-16 py-2 rounded-full transition-colors ${isFormValid ? 'bg-gray-300 bg-opacity-30 border-2 text-white hover:bg-gray-200 hover:text-uslugi-text' : 'bg-gray-200 text-gray-500 border-gray-500 cursor-not-allowed'}`}
                  style={{ pointerEvents: 'auto' }}
                >
                  {t("brief-form-button")}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="z-[99999]">
        <Toaster />
      </div>
    </div>
  );
};

export default Brief;
