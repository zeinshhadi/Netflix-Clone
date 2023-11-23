import React from 'react'
    import translate from './../../images/icons/translate.svg'
    import downArrow from './../../images/icons/down-arrow.svg'
    import './index.css'
const TranslateButton = () => {
  return (
    <div className='translate-btn text-white'>
                        <img src={translate} alt="" /> English
                        <img src={downArrow} alt="" />

    </div>
//    <select>
//         <option  selected >
//             <div> 
//                 <img src={translate} alt="" />
//           <span className='text-white'>  English</span></div>
         
//         </option>
//         <option>
//             العربية
//         </option>
//         </select>
  )
}

export default TranslateButton