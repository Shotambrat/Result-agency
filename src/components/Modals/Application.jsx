import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

const Application = ({ isOpen, onClose }) => {
  const { t } = useTranslation();

  const notifySuccess = () => toast.success(t('zayavca-success'));
  const notifyError = () => toast.error(t('zayavca-error'));

  const [inputValue, setInputValue] = useState("");
  const [selectedOption, setSelectedOption] = useState("usluga");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    checkFormValidity();
  }, [inputValue, selectedOption, phone, message]);

  const checkFormValidity = () => {
    if (inputValue && selectedOption !== "usluga" && phone && message) {
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
      Service: ${selectedOption}\n
      Phone: ${phone}\n
      Message: ${message}
    `;

    try {
      const response = await axios.post(`https://api.telegram.org/bot${tgBotToken}/sendMessage`, {
        chat_id: chatId,
        text: text
      });
      console.log("Form submitted:", response.data);
      notifySuccess();
      onClose();
    } catch (error) {
      console.error("Error submitting form:", error);
      notifyError();
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center top-0 z-[999]">
      <div className="z-[99999]">
        <Toaster />
      </div>
      <div className="md:w-2/4 lg:w-1/3 lg:my-8 xl:w-2/5 2xl:w-1/4 bg-gradient-to-b from-[#746FAE] to-[#8A66F0] p-8 rounded-[20px] relative z-[999]">
        <button
          onClick={onClose}
          className="absolute top-0 right-0 m-4 text-white text-2xl"
        >
          <svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M17.3065 20.0503C18.1227 19.3752 18.2278 18.1742 17.5412 17.3678L11.5168 10.2916L17.3537 3.43576C18.0403 2.62928 17.9352 1.42829 17.119 0.753268C16.3028 0.0782508 15.0845 0.184825 14.3979 0.991309L8.9984 7.33352L3.59668 0.988723C2.91007 0.182239 1.69179 0.0756651 0.875577 0.750682C0.0593646 1.4257 -0.0456994 2.62669 0.640911 3.43318L6.47996 10.2916L0.453411 17.3703C-0.233199 18.1768 -0.128135 19.3778 0.688077 20.0528C1.50429 20.7279 2.72257 20.6213 3.40918 19.8148L8.9984 13.2498L14.5854 19.8122C15.272 20.6187 16.4903 20.7253 17.3065 20.0503Z" fill="white" fillOpacity="0.61" />
          </svg>
        </button>
        <div className="flex-1">
          <div className="flex flex-col space-y-6">
            <input
              type="text"
              name="name"
              placeholder={t("cover-form-name")}
              required
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              style={{ fontSize: "18px" }}
              className="bg-transparent border-b-2 border-white text-white placeholder-white focus:border-green-500 focus:outline-none focus:border-b-[3px] pb-2"
            />
            <select
              name="service"
              required
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
              style={{ fontSize: "18px" }}
              className="bg-transparent border-b-2 border-white text-white placeholder-white focus:border-green-500 focus:outline-none focus:border-b-[3px] pb-2 custom-select"
            >
              <option value="usluga" disabled>{t("cover-form-service")}</option>
              <option value="SMM">SMM</option>
              <option value="Разработка сайтов">{t("cover-form-site")}</option>
              <option value="Запуск рекламы">{t("cover-form-ads")}</option>
              <option value="SEO">SEO</option>
              <option value="Брендинг">{t("cover-form-brending")}</option>
              <option value="Telegram-бот">{t("cover-form-tgbot")}</option>
              <option value="другое">{t("cover-form-others")}</option>
            </select>
            <input
              type="text"
              name="phone"
              placeholder={t("cover-form-phone")}
              required
              value={getFormattedPhone()}
              onChange={handleChangePhone}
              style={{ fontSize: "18px" }}
              className="bg-transparent border-b-2 border-white text-white placeholder-white focus:border-green-500 focus:outline-none focus:border-b-[3px] pb-2"
            />
            <textarea
              name="message"
              placeholder={t("cover-form-message")}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              style={{ fontSize: "18px" }}
              className="bg-transparent border-b-2 border-white text-white placeholder-white focus:border-green-500 focus:outline-none focus:border-b-[3px] pb-2"
            />
            <div className="text-center">
              <button
                onClick={handleSubmit}
                className="mt-4 bg-gray-300 bg-opacity-30 border-2 text-white py-2 px-2 xs:px-8 rounded-full hover:bg-gray-200 hover:text-uslugi-text transition-colors"
                disabled={!isFormValid}
              >
                {t("cover-form-button")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Application;