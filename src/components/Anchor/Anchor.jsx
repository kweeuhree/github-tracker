import React from 'react';
import { BiLinkExternal } from "react-icons/bi";
import './AnchorStyles.css';

const Anchor = ({ href, innerHtml }) => {
  return (
    <a href={href} target='_blank'>
        {innerHtml}
         &nbsp;
        <span>
            <BiLinkExternal />
        </span>
     </a>
  )
}

export default Anchor;