import React from 'react'
import logo_zaglushka_mob from "../../src/assets/img/logo_zaglushka_mob.png";
import logoresbig from "../../src/assets/img/logoresbig.png";
import SwiperCases from '../components/Cases/OurCasesSlider';
import ToTopButton from '../components/Blog/ToTopButton';
import ButtonPodrobnee from '../components/Cases/ButtonPodrobnee';
import BackButton from '../components/Blog/BackButton';
import Brief from '../components/Brief';

const Cases = () => {
  return (
    <div className=' mx-[10px] lg:mx-[80px]'>
      {/* будет кнопка назад */}
      <div>
        <BackButton/>
      </div>

      <div class="mx-auto flex h-auto flex-col bg-indigo-500 text-white rounded-2xl p-6 shadow-lg w-64 m:w-4/5 ">
        <div class="rounded-xl flex items-center justify-center h-auto mb-4">
          <img src={logo_zaglushka_mob} className='w-11/12' alt="social-icon" />
        </div>
        <h2 class="text-center text-xl font-semibold mb-4 mt-2 m:text-2xl md:mt-6 md:mb-8 md:text-3xl">Контент-план для Intermed Innovation</h2>
        <div class="space-y-8">
          <div className="flex justify-between gap-x-8 items-center">
            <span className="text-xl md:text-2xl">Заявок</span>
            <span className="font-bold text-4xl md:text-5xl">+25%</span>
          </div>
          <div className="flex justify-between gap-x-8 items-center">
            <span className='ml-4 text-xl md:text-2xl'>ROI</span>
            <span className="font-bold text-4xl md:text-5xl">+40%</span>
          </div>
          <div className="flex justify-between gap-x-8 items-center">
            <span className="text-xl md:text-2xl">Клиентов</span>
            <span className="font-bold text-4xl mr-6 md:text-5xl">×2</span>
          </div>
        </div>
      </div>

      <div className='text-uslugi-text inline-block mt-10 sm:mx-[15px]'>
        <span className=' block font-semibold text-3xl mb-[7px] s:text-4xl '>О клиенте</span>
        <span className='block text-[17px] sm:text-[18px]'>Lorem ipsum dolor sit amet consectetur. Et elit interdum eget maecenas molestie in ac quisque</span>
      </div>

      <div className='mb-[51px] mt-[21px] flex justify-end '>
        <div><ButtonPodrobnee/></div>
      </div>

      <div class="gradient-item-cases rounded-[30px] border-item-cases p-8 shadow-md items-center mx-auto min-h-[343px] s:w-4/5">
        <div className='flex text-uslugi-text flex-col items-center'>
          <h2 class="text-[35px] font-bold mb-4">Запросы</h2>
          <ul class="list-disc text-[24px] font-normal leading-[48px] list-inside mt-[30px]">
            <li>отжумания</li>
            <li>пресс качат</li>
            <li>бег 10000000км</li>
          </ul>
        </div>
      </div>
      <div class="rounded-[16px] border-[1px] border-uslugi-text p-4 font-semibold text-cases-text text-[36px] mt-[54px] text-center s:w-4/5 mx-auto">
      Результаты
      </div>
      
      <div >  {/*будет колонка для грида при десктоп */}
        <div className='relative mt-[48px]  w-full'>
          {/* левая полоса */}
          <div className='absolute ml-[2%]  m:ml-[3%] l:ml-[3.5%] s:ml-[4%] xs:ml-[4.6%] xxs:ml-[5%] sm:ml-[6%] md:ml-[6.2%] lg:ml-[6.3%] 2xl:ml-[6.5%]'>
            <div className="flex mt-[50px] justify-center items-center min-h-full ">
              <div className="relative z-10 flex flex-col items-center ">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-[5px] bg-footer-icon xxs:w-[7px] lg:w-[10px]" style={{ top: "0", bottom: "0" }}></div>
                <div className="relative flex flex-col gap-[190px]  items-center lg:gap-[180px]">
                <div className="relative w-[40px] h-[40px] bg-footer-icon rounded-full border-4 border-white z-10 lg:w-[50px] lg:h-[50px]" ></div>
                  <div className="relative w-[40px] h-[40px] bg-footer-icon rounded-full border-4 border-white z-10 lg:w-[50px] lg:h-[50px]" ></div>
                  <div className="relative w-[40px] h-[40px] bg-footer-icon rounded-full border-4 border-white z-10 lg:w-[50px] lg:h-[50px]" ></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* правая контейнер с сообщ */}
          <div className='relative flex flex-col items-end md:w-11/5'>
            <div className='rounded-[12px] min-h-[147px] w-11/12 bg-footer-icon p-1 l:pt-[15px]'>
              <div className='ml-[36px]'>
                <span className='text-[17px]  text-white font-medium l:text-[18px] sm:text-[19px]'>Мы не делаем однотипных предложений</span>
                <p className='text-[13px] text-white mt-[5px] font-normal l:mt-[15px] sm:text-[15px]'>Lorem ipsum dolor sit amet consectetur. 
                Diam nec sem a purus amet tellus. Eget a lacus amet aenean nisl sit. </p>
              </div>
            </div>
            <div className='my-[21px] flex justify-end'>
              <ButtonPodrobnee/>
            </div>

            <div className='rounded-[12px] h-[147px] w-11/12 bg-footer-icon p-1 l:pt-[15px] '>
              <div className='ml-[36px]'>
                <span className='text-[17px]  text-white font-medium l:text-[18px] sm:text-[19px]'>Мы не делаем однотипных предложений</span>
                <p className='text-[13px] text-white mt-[5px] font-normal l:mt-[15px] sm:text-[15px]'>Lorem ipsum dolor sit amet consectetur. 
                Diam nec sem a purus amet tellus. Eget a lacus amet aenean nisl sit. </p>
              </div>
            </div>
            <div className='my-[21px] flex justify-end'><ButtonPodrobnee/></div>

            <div className='rounded-[12px] h-[147px] w-11/12 bg-footer-icon p-1 l:pt-[15px]'>
              <div className='ml-[36px]'>
                <span className='text-[17px]  text-white font-medium l:text-[18px] sm:text-[19px]'>Мы не делаем однотипных предложений</span>
                <p className='text-[13px] text-white mt-[5px] font-normal l:mt-[15px] sm:text-[15px]'>Lorem ipsum dolor sit amet consectetur. 
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
      </div>
    
  )
}

export default Cases
