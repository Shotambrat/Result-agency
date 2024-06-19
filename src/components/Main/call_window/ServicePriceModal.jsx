import React from "react";
import { useTranslation } from "react-i18next";

export default function ServiceModal({
  defaultNumber,
  data,
  close,
  modal,
  name
}) {
  const { t } = useTranslation();

  let liStyle = "text-[14px] list-disc text-left text-white font-light m:text-[14.5px] l:my-[2px] s:text-[15px] xs:text-[17px] sm:text-[18.5px] md:text-[19.5px] lg:text-[21.5px] xl:text-[23px] 2xl:my-[0px]"
  console.log(defaultNumber);
  return (
    <div className="fixed inset-0 flex items-center justify-center z-[21] backdrop-blur-md shadow-md">
      <div className='h-auto overflow-y-auto p-4 w-11/12 rounded-[11px] m:p-6 xs:px-7 xs:py-7 sm:px-9 2xl:p-10 2xl:w-3/4 lg:rounded-[41px] bg-gradient-to-b from-[#746FAE] to-[#8A66F0] flex items-start justify-center flex-col sm:overflow-y-auto lg:px-9 lg:py-9 price-list'>
        <div className='w-full mb-[10px] flex justify-between align-baseline flex-row-reverse'>
          <button className='block bg-transparent border-none close-button ml-0' onClick={close}>
            <svg className='mb-[3px] w-[18px] h-[20px] l:mb-[0px] xs:w-[23px] xs:h-[25px] lg:w-[30px] lg:h-[34px] xl:w-[29px] xl:h-[31px] svg-img-close' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31 35" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M29.0267 33.5975C30.3955 32.4489 30.5741 30.4081 29.4255 29.0392L19.3154 16.9905L29.111 5.31661C30.2596 3.94776 30.0811 1.90695 28.7122 0.758348C27.3434 -0.390255 25.3026 -0.211709 24.154 1.15714L15.0918 11.957L6.02854 1.15583C4.87993 -0.213021 2.83913 -0.391567 1.47028 0.757035C0.10143 1.90564 -0.0771133 3.94644 1.07149 5.31529L10.8682 16.9905L0.757036 29.0405C-0.391566 30.4094 -0.213023 32.4502 1.15583 33.5988C2.52468 34.7474 4.56548 34.5689 5.71408 33.2L15.0918 22.0241L24.4684 33.1987C25.617 34.5676 27.6578 34.7461 29.0267 33.5975Z" fill="white" fill-opacity="0.61" />
            </svg>
          </button>
          <span className='text-[18px] m:text-[19px] l:mb-[5px] s:mb-[7px] s:text-[20px] text-white xs:text-[22px] sm:text-[20px] md:text-[24px] xl:text-[29px] 2xl:text-[31px] 2xl:mb-[0px] font-semibold lg:mb-[14px] page-list-text'>
            {t(`service-card-title-${name}-${defaultNumber}`)}
          </span>
        </div>
        <ul className='h-auto ml-[7.3px] m:ml-[10px] lg:p-4 lg:px-8 s:ml-[15px] xs:ml-[20px]'>
          <li className={liStyle}>
            {t(`service-card-${modal}-title${defaultNumber}`)}
          </li>
          <li className={liStyle}>{t(`service-modal-${modal}-price${defaultNumber}`)}</li>
          <li className={liStyle}>{t(`service-modal-${modal}-size${defaultNumber}`)}</li>
          <li className={liStyle}>{t(`service-modal-${modal}-duration${defaultNumber}`)}</li>
          {
            name == 'smm' ? (
              <ul>
                <p className={liStyle}>Преимущества:</p>
                <li className={liStyle}>{t(`service-modal-smm-preimushestva-${defaultNumber}`)}</li>
                {defaultNumber == 1 ? (
                  <li className={liStyle}>в дальнейшем клиент сможет вести блог самостоятельно</li>
                ) : (<></>)}
                <li></li>
              </ul>
            ) : (<></>)
          }
          <li className={liStyle}>{t(`service-modal-${modal}-condition${defaultNumber}`)}</li>
          <li className={liStyle}>{t(`service-modal-${modal}-services${defaultNumber}`)}</li>
          <li className={liStyle}>{t(`service-modal-${modal}-webDev${defaultNumber}`)}</li>
          {name == 'smm' ? (
            <div className="h-auto overflow-x-scroll w-[260px] lg:w-full lg:overflow-x-auto l:w-[300px] s:w-[350px] xxs:w-[430px] sm:w-[490px] md:w-[620px]">
              <table class="table-auto border-collapse w-full max-w-2xl">
                <thead>
                  <tr class="bg-keys_item-bg">
                    <th class="px-4 py-2">{t(`service-modal-smm-title-1`)}</th>
                    <th class="px-4 py-2">{t(`service-modal-smm-title-2`)}</th>
                    <th class="px-4 py-2">{t(`service-modal-smm-title-3`)}</th>
                    <th class="px-4 py-2">{t(`service-modal-smm-title-4`)}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="bg-keys_item-bg">
                    <td class="border px-4 py-2">Контент-план</td>
                    <td class="border px-4 py-2">{t(`service-modal-smm-content-${defaultNumber}-1`)}</td>
                    <td class="border px-4 py-2">{t(`service-modal-smm-content-${defaultNumber}-2`)}</td>
                    <td class="border px-4 py-2">{t(`service-modal-smm-content-${defaultNumber}-3`)}</td>
                  </tr>
                  <tr class="bg-keys_item-bg">
                    <td class="border px-4 py-2">Публикации</td>
                    <td class="border px-4 py-2">{t(`service-modal-smm-content-${defaultNumber}-4`)}</td>
                    <td class="border px-4 py-2">{t(`service-modal-smm-content-${defaultNumber}-5`)}</td>
                    <td class="border px-4 py-2">{t(`service-modal-smm-content-${defaultNumber}-6`)}</td>
                  </tr>
                  <tr class="bg-keys_item-bg">
                    <td class="border px-4 py-2">Истории</td>
                    <td class="border px-4 py-2">{t(`service-modal-smm-content-${defaultNumber}-7`)}</td>
                    <td class="border px-4 py-2">{t(`service-modal-smm-content-${defaultNumber}-8`)}</td>
                    <td class="border px-4 py-2">{t(`service-modal-smm-content-${defaultNumber}-9`)}</td>
                  </tr>
                  <tr class="bg-keys_item-bg">
                    <td class="border px-4 py-2">Иконки</td>
                    <td class="border px-4 py-2">{t(`service-modal-smm-content-${defaultNumber}-10`)}</td>
                    <td class="border px-4 py-2">{t(`service-modal-smm-content-${defaultNumber}-11`)}</td>
                    <td class="border px-4 py-2">{t(`service-modal-smm-content-${defaultNumber}-12`)}</td>
                  </tr>
                  <tr class="bg-keys_item-bg">
                    <td class="border px-4 py-2">Наполнение актуального</td>
                    <td class="border px-4 py-2">{t(`service-modal-smm-content-${defaultNumber}-13`)}</td>
                    <td class="border px-4 py-2">{t(`service-modal-smm-content-${defaultNumber}-14`)}</td>
                    <td class="border px-4 py-2">{t(`service-modal-smm-content-${defaultNumber}-15`)}</td>
                  </tr>
                  <tr class="bg-keys_item-bg">
                    <td class="border px-4 py-2">Запуск рекламы</td>
                    <td class="border px-4 py-2">{t(`service-modal-smm-content-${defaultNumber}-16`)}</td>
                    <td class="border px-4 py-2">{t(`service-modal-smm-content-${defaultNumber}-17`)}</td>
                    <td class="border px-4 py-2">{t(`service-modal-smm-content-${defaultNumber}-18`)}</td>
                  </tr>
                  {

                    defaultNumber === 1 ? (
                      <div>

                      </div>
                    ) : (
                      <>
                        <tr class="bg-keys_item-bg">
                          <td class="border px-4 py-2">Оформление аккаунтов</td>
                          <td class="border px-4 py-2">{t(`service-modal-smm-content-${defaultNumber}-19`)}</td>
                          <td class="border px-4 py-2">{t(`service-modal-smm-content-${defaultNumber}-20`)}</td>
                          <td class="border px-4 py-2">{t(`service-modal-smm-content-${defaultNumber}-21`)}</td>
                        </tr>
                        <tr class="bg-keys_item-bg">
                          <td class="border px-4 py-2">Фото-видеосъемка</td>
                          <td class="border px-4 py-2">{t(`service-modal-smm-content-${defaultNumber}-22`)}</td>
                          <td class="border px-4 py-2">{t(`service-modal-smm-content-${defaultNumber}-23`)}</td>
                          <td class="border px-4 py-2">{t(`service-modal-smm-content-${defaultNumber}-24`)}</td>
                        </tr>
                      </>
                    )
                  }
                </tbody>
              </table>
            </div>
          ) : (
            <div>
              <li className={liStyle}>{t(`service-modal-${modal}-completion${defaultNumber}`)}</li>
              <li className={liStyle}>{t(`service-modal-${modal}-integration${defaultNumber}`)}</li>
              <li className={liStyle}>{t(`service-modal-${modal}-indexation${defaultNumber}`)}</li>
              <li className={liStyle}>{t(`service-modal-${modal}-seo${defaultNumber}`)}</li>
              <li className={liStyle}>{t(`service-modal-${modal}-hosting${defaultNumber}`)}</li>
              <li className={liStyle}>{t(`service-modal-${modal}-domen${defaultNumber}`)}</li>
            </div>
          )}

          <li className={liStyle}>{t(`service-modal-${modal}-expCode${defaultNumber}`)}</li>
        </ul>
      </div>
    </div>
  );
}
