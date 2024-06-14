import React from 'react';
// import external link icon
import { BiLinkExternal } from "react-icons/bi";
// css
import './AnchorStyles.css';

const Anchor = ({ href, innerHtml }) => {
  return (
    // anchor
    <a href={href} target='_blank'>
        {/* text of external link */}
        {innerHtml}
        {/* space between text and external link icon */}
         &nbsp;
        {/* external link icon */}
        <span>
            <BiLinkExternal />
        </span>

     </a>
  )
}

export default Anchor;