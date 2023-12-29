import React, { useState } from 'react';

interface InputBoxProps {
  name: string;
  type: string;
  id?: string;
  value?: string;
  placeholder?: string;
  icon: string;
  disable?: boolean;
}

const InputBox: React.FC<InputBoxProps> = ({ name, type, id, value, placeholder, icon, disable = false }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <div className="relative w-100 mb-4">
      <input
        name={name}
        type={type === "password" ? passwordVisible ? "text" : "password" : type}
        id={id}
        defaultValue={value}
        placeholder={placeholder}
        disabled={disable}
        className="input-box"
      />

      
        <i className={`fi ${icon} input-icon`}></i>

      {type === "password" && (
        <i
          className={`fi fi-rr-eye${passwordVisible ? "" : "-crossed"} input-icon left-[auto] right-4 cursor-pointer`}
          onClick={() => setPasswordVisible((currentVal) => !currentVal)}
        ></i>
      )}
    </div>
  );
};

export default InputBox;