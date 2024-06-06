import React from 'react'
import logo_zaglushka_mob from "../../src/assets/img/logo_zaglushka_mob.png";
import logoresbig from "../../src/assets/img/logoresbig.png";
import SwiperCases from '../components/Cases/OurCasesSlider';
import ToTopButton from '../components/Blog/ToTopButton';
import ButtonPodrobnee from '../components/Cases/ButtonPodrobnee';
import Brief from '../components/Brief';

const Cases = () => {
  return (
    <div className='pt-16 mx-[10px]'>
      {/* будет кнопка назад */}
      <div>
        <button></button>
      </div>

      <div class="mx-auto flex h-auto flex-col bg-indigo-500 text-white rounded-2xl p-6 shadow-lg w-64 m:w-4/5 ">
        <div class="rounded-xl flex items-center justify-center h-auto mb-4">
          <img src={logo_zaglushka_mob} alt="social-icon" />
        </div>
        <h2 class="text-center text-xl font-semibold mb-4 mt-2 m:text-2xl">Контент-план для Intermed Innovation</h2>
        <div class="space-y-8">
          <div className="flex justify-between gap-x-8 items-center">
            <span>Заявок</span>
            <span className="font-bold text-4xl">+25%</span>
          </div>
          <div className="flex justify-between gap-x-8 items-center">
            <span className='ml-4'>ROI</span>
            <span className="font-bold text-4xl">+40%</span>
          </div>
          <div className="flex justify-between gap-x-8 items-center">
            <span>Клиентов</span>
            <span className="font-bold text-4xl mr-6">×2</span>
          </div>
        </div>
      </div>

      <div className='text-uslugi-text inline-block mt-10'>
        <span className=' inline-block font-semibold text-3xl mb-[7px]'>О клиенте</span>
        <span className='inline-block'>Lorem ipsum dolor sit amet consectetur. Et elit interdum eget maecenas molestie in ac quisque</span>
      </div>

      <div className='mb-[51px] mt-[21px] flex justify-end '>
        <div><ButtonPodrobnee/></div>
      </div>

      <div class="gradient-item-cases rounded-[30px] border-item-cases p-8 shadow-md items-center min-h-[343px]">
        <div className='flex text-uslugi-text flex-col items-center'>
          <h2 class="text-[35px] font-bold mb-4">Запросы</h2>
          <ul class="list-disc text-[24px] font-normal leading-[48px] list-inside mt-[30px]">
            <li>отжумания</li>
            <li>пресс качат</li>
            <li>бег 10000000км</li>
          </ul>
        </div>
      </div>
      <div class="rounded-[16px] border-[1px] border-uslugi-text p-4 font-semibold text-cases-text text-[36px] mt-[54px] text-center">
      Результаты
      </div>
      
      <div >  {/*будет колонка для грида при десктоп */}
        <div className='relative mt-[48px] w-full'>
          {/* левая полоса */}
          <div className='absolute'>
            <div className="flex mt-[60px] justify-center items-center min-h-full ml-[5px] z-50 m:ml-[8px] l:ml-[12.5px] s:ml-[14px] xs:ml-[20px] xxs:ml-[27px] sm:ml-[34px]">
              <div className="relative z-10 ">
                <div className="absolute  left-1/2 transform-translate-x-1/2 w-[5px] bg-footer-icon h-full"></div>
                <div className=" relative flex flex-col gap-[140px] items-center space-y-10">
                  <div className="w-[40px] h-[40px] bg-footer-icon rounded-full border-4 border-white"></div>
                  <div className="w-[40px] h-[40px] bg-footer-icon rounded-full border-4 border-white"></div>
                  <div className="w-[40px] h-[40px] bg-footer-icon rounded-full border-4 border-white"></div>
                </div>
              </div>
            </div>
          </div>
          {/* правая контейнер с сообщ */}
          <div className='relative flex flex-col items-end'>
            <div className='rounded-[12px] h-[147px] w-11/12 bg-footer-icon p-1 l:pt-[15px]'>
              <div className='ml-[36px]'>
                <span className='text-[17px]  text-white font-medium l:text-[18px]'>Мы не делаем однотипных предложений</span>
                <p className='text-[13px] text-white mt-[5px] font-normal l:mt-[15px]'>Lorem ipsum dolor sit amet consectetur. 
                Diam nec sem a purus amet tellus. Eget a lacus amet aenean nisl sit. </p>
              </div>
            </div>
            <div className='my-[21px] flex justify-end'>
              <ButtonPodrobnee/>
            </div>

            <div className='rounded-[12px] h-[147px] w-11/12 bg-footer-icon p-1 l:pt-[15px]'>
              <div className='ml-[36px]'>
                <span className='text-[17px]  text-white font-medium l:text-[18px]'>Мы не делаем однотипных предложений</span>
                <p className='text-[13px] text-white mt-[5px] font-normal l:mt-[15px]'>Lorem ipsum dolor sit amet consectetur. 
                Diam nec sem a purus amet tellus. Eget a lacus amet aenean nisl sit. </p>
              </div>
            </div>
            <div className='my-[21px] flex justify-end'><ButtonPodrobnee/></div>

            <div className='rounded-[12px] h-[147px] w-11/12 bg-footer-icon p-1 l:pt-[15px]'>
              <div className='ml-[36px]'>
                <span className='text-[17px]  text-white font-medium l:text-[18px]'>Мы не делаем однотипных предложений</span>
                <p className='text-[13px] text-white mt-[5px] font-normal l:mt-[15px]'>Lorem ipsum dolor sit amet consectetur. 
                Diam nec sem a purus amet tellus. Eget a lacus amet aenean nisl sit. </p>
              </div>
            </div>
            <div className='my-[21px] flex justify-end'><ButtonPodrobnee/></div>
          </div>
        </div>
        {/* Конец полосы с мессендж */}

        <div className='w-full mb-14'>
        <img src={logoresbig} alt="logo_big" className='my-0 mx-auto'/>
        </div>

      </div>

      <div className='w-full flex self-center items-center justify-center content-center'>
        
        <SwiperCases/>

      </div >
        <ToTopButton/>
        <Brief/>
      </div>
    
  )
}

export default Cases
