import React from 'react';
import './StatsStyle.css';

const Stats = ({ mostUsedLang }) => {

  return (
   
    <div className='display-flex flex-center all-languages'>
         {/* mostUsedLang[0] is largest */}
        <div>{mostUsedLang[0]}</div>
        {/* mostUsedLang[1] is second largest */}
        <div>{mostUsedLang[1]}</div>
        {/* mostUsedLang[2] is smallest */}
        <div>{mostUsedLang[2]}</div>
    </div>
  )
}

export default Stats;