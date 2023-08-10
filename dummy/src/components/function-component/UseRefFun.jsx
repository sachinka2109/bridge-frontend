import React, { useRef, useImperativeHandle, forwardRef } from 'react';

const UseRefFun = ({setFocusInput}) => {
  const myInputRef = useRef();

  const focusInput = () => {
    myInputRef.current.focus();
  };

  // Expose the focusInput function using useImperativeHandle
//   useImperativeHandle(ref, () => ({
//     focusInput: focusInput
//   }));
setFocusInput(focusInput);

  return (
    <div>
      <input type="text" ref={myInputRef} />
    </div>
  );
}

export default UseRefFun;