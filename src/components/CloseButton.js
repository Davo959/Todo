// component for close button

import closeX from "../assets/images/close-white.png";

export const CloseButton = ({ handleClick }) => {
  return (
    <button
      onClick={ handleClick }
      className={ 'CloseSectionButton' } >
      <img
        src={ closeX }
        alt={ 'closeX' }
      />
    </button>
  )
}


