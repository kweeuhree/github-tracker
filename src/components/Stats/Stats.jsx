import React from 'react';
import './StatsStyle.css';

const Stats = ({ mostUsedLang }) => {

  return (
   
    <div className='display-flex flex-center all-languages'>
         {/* display most used language */}
        <div>{mostUsedLang[0]}</div>
        {/* display second most used language if exists */}
       {mostUsedLang[1] && <div>{mostUsedLang[1]}</div>}
        {/* display third most used language if exists */}
        {mostUsedLang[2] && <div>{mostUsedLang[2]}</div>}
    </div>
  )
}

export default Stats;