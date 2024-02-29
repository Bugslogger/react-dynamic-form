import React, { memo } from "react";
import styles from "./form.module.css";
import response from "../apiResponse";
const Form = ({ formData, formClass,response }) => {
  const defaultFormClass = styles.defaultFormClass;
  const finalFormName = formClass ? formClass : defaultFormClass;


  const renderFormElements = () => {
    return formData.map((item) => {
      const {
        id,
        type,
        name,
        className,
        placeholder,
        iselement,
        element,
        inputChange,
        value,
        onBlur,
        onFocus,
        label,
        labelClass,
        render,
      
      } = item;
      // const defaultClasses = "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline";
   
      const defaultClasses = styles.defaultClasses;
      const defaultLabelClass = styles.defaultLabelClass;
      const finalLabelClass = labelClass ? labelClass : defaultLabelClass;
      const finalClassName = className ? className : defaultClasses;
      const renderedContent = render && render();
      if (!iselement) {
        return (
          <div key={id}>
            <label className={finalLabelClass} for={name}>
              {" "}
              {label}
            </label>
            <input
              id={id}
              type={type}
              name={name}
              className={finalClassName}
              placeholder={placeholder}
              onChange={inputChange}
              value={value}
              onBlur={onBlur}
              onFocus={onFocus}
            />

            {render && render()}
          </div>
        );
      } else {
        return (
          <div>
            {element}
            {Array.isArray(renderedContent)
              ? renderedContent.map((item, index) => (
                  <div key={index}>{item}</div>
                ))
              : renderedContent}
          </div>
        );
      }
    });
  };

  return <div className={finalFormName}>{renderFormElements()}</div>;
};

export default memo(Form);
