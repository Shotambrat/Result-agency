import React, { useState } from "react";
import BriefImage from '../assets/img/brief-image.png'

const Brif = () => {
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
  

  return (
    <div className="w-10/12 mx-auto my-8 bg-gradient-to-b from-blue-600 to-purple-600 p-8 rounded-[50px] flex justify-between items-center">
      {/* Left Block */}
      <div className="flex-1 flex space-x-4">
        <img
          src={BriefImage}
          alt="Brief Description"

          className="w-1/2 -mr-[100px] relative -left-[100px] top-0"
        />
        <div>
          <h3 className="text-white text-3xl mb-2">
            Для получения наших услуг заполните короткий бриф
          </h3>
          <p className="text-white text-xl mt-9">
            Наши консультанты свяжутся с вами для уточнения вопросов о
            дальнейшем сотрудничестве.
          </p>
        </div>
      </div>

      {/* Right Block */}
      <div className="flex-1 ml-4">
        <form className="flex flex-col space-y-4">
          {/* Assuming you're asking for name, email, phone, and a message */}
          <input
            type="text"
            placeholder="Имя"
            required
            style={{fontSize: '18px'}}
            className="bg-transparent border-b-2 border-white text-white placeholder-white focus:border-green-500 focus:outline-none focus:border-b-[3px] pb-2"
          />
          <input
            type="email"
            placeholder="Эл. почта"
            required
            style={{fontSize: '18px'}}
            className="bg-transparent border-b-2 border-white text-white placeholder-white focus:border-green-500 focus:outline-none focus:border-b-[3px] pb-2"
          />
          <input
            type="tel"
            placeholder="Телефон"
            required
            value={displayValue}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            style={{fontSize: '18px'}}
            className="bg-transparent border-b-2 border-white text-white placeholder-white focus:border-green-500 focus:outline-none focus:border-b-[3px] pb-2"
          />
          <textarea
            placeholder="Ваше сообщение"
            style={{fontSize: '18px'}}
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
  );
};

export default Brif;
