import React, { useRef, useEffect ,useCallback} from "react";

const FocusableInput = ({ shouldFocus }) => {
 
  const inpElem = useRef();

  useEffect(() => {
    if(shouldFocus && inpElem.current){
    inpElem.current.focus();
    }
  }, []);

  

  return (
    <div>
        
      <input autoFocus={shouldFocus} />
      <input type="text" ref={inpElem} placeholder="Enter Name"/>
     
    </div>
  );
};

export default FocusableInput;
