import React from "react";
import Select from 'react-select';



const Form = ({ formData }) => {
  const renderFormElements = () => {
    return formData.map((item) => {
      const { id, type, name, className, placeholder, iselement, element, options,inputChange,value,onBlur,onFocus,label } = item;

      if (!iselement) {
        return (
          <div key={id}>
            <input
              id={id}
              type={type}
              name={name}
              className={className}
              placeholder={placeholder}
              onChange={inputChange}
              value={value}
              onBlur={onBlur}
              onFocus={onFocus}
              

            />
             <label for={name}> {label}</label>
          </div>
        );
      }

      switch (element) {
        case 'Select':
          return (
            <div key={id}>
              <Select
                options={options}
              />
            </div>
          );
        case 'Password':
          return (
            <div key={id}>
              <input type="password" />
            </div>
          );
        default:
          return null;
      }
    });
  };

  return (
    <div>
      {renderFormElements()}
    </div>
  );
};

export default Form;



