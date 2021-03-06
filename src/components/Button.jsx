import React from "react";
import classnames from 'classnames';

function Button({cart, outline, add, black, circle, delimiter, cartBottom, onClick, children, payBtn}) {

   return (
      <button className={classnames('button', {
            'button--cart': cart,
            'button--outline': outline,
            'button--add': add,
            'button--black': black,
            'button--circle': circle,
            'button__delimiter': delimiter,
            'cart_bottom-buttons': cartBottom,
            'pay-btn': payBtn
         }
      )}
              onClick={onClick}>
         {children}
      </button>
   )
}

export default Button