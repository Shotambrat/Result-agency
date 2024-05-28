import React, { useState } from "react";

const Application = ({ isOpen, onClose }) => {
    const [inputValue, setInputValue] = useState('');
    // Состояние для определения фокуса на инпуте
    const [isFocused, setIsFocused] = useState(false);
  
    const formatValue = (value) => {
      if (!value) return '';
  
      let formattedValue = '+998(';
      
      // Добавляем цифры согласно шаблону
      for (let i = 0; i < Math.min(9, value.length); i++) {
        if (i === 2) formattedValue += ')';
        if (i === 5 || i === 7) formattedValue += '-';
        formattedValue += value[i];
      }
  
      return formattedValue;
    };
  
    const handleChange = (event) => {
      let { value } = event.target;
      let numbersOnly = value.replace(/[^\d]/g, '');
  
      // Если начинается с 998, удаляем эти цифры (если пользователь случайно их ввел)
      if (numbersOnly.startsWith('998')) {
        numbersOnly = numbersOnly.substring(3);
      }
  
      setInputValue(numbersOnly);
    };
  
    const handleFocus = () => setIsFocused(true);
  
    const handleBlur = () => setIsFocused(false);
  
    // Вычисляем отображаемое значение на основе фокуса и введенных цифр
    const displayValue = isFocused || inputValue ? formatValue(inputValue) : '';
  

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="w-4/5 lg:w-1/3 lg:h-1/2 lg:my-8 bg-gradient-to-b from-blue-600 to-purple-600 p-8 rounded-[20px] relative">
        <button
          onClick={onClose}
          className="absolute top-0 right-0 m-4 text-white text-2xl"
        >
          X
        </button>
        <div className="flex-1 ml-4">
          <form className="flex flex-col space-y-6">
            <input
              type="text"
              name="name"
              placeholder="Имя"
              required
              style={{ fontSize: "18px" }}
              className="bg-transparent border-b-2 border-white text-white placeholder-white focus:border-green-500 focus:outline-none focus:border-b-[3px] pb-2"
            />
            <input
              type="email"
              name="email"
              placeholder="Эл. почта"
              required
              style={{ fontSize: "18px" }}
              className="bg-transparent border-b-2 border-white text-white placeholder-white focus:border-green-500 focus:outline-none focus:border-b-[3px] pb-2"
            />
            <input
              type="text"
              name="phone"
              placeholder="Телефон"
              required
              value={displayValue}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              style={{ fontSize: "18px" }}
              className="bg-transparent border-b-2 border-white text-white placeholder-white focus:border-green-500 focus:outline-none focus:border-b-[3px] pb-2"
            />
            <textarea
              name="message"
              placeholder="Ваше сообщение"
              style={{ fontSize: "18px" }}
              className="bg-transparent border-b-2 border-white text-white placeholder-white focus:border-green-500 focus:outline-none focus:border-b-[3px] pb-2"
            />
            <button
              type="submit"
              className="mt-4 bg-gray-300 bg-opacity-30 border-2 text-white py-2 rounded-full hover:bg-gray-200 hover:text-uslugi-text transition-colors"
            >
              Заказать обратный звонок
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Application;
