// useFormValidation.js
import { useState } from "react";

function useFormValidation(initialState, validationRules) {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "", // Clear error when the field is changed
    });
  };

  const validateForm = () => {
    const newErrors = {};

    for (const [field, rule] of Object.entries(validationRules)) {
      if (rule.required && !formData[field]) {
        newErrors[field] = `${
          field.charAt(0).toUpperCase() + field.slice(1)
        } is required`;
      }
      if (rule.validate && !rule.validate(formData[field])) {
        newErrors[field] = rule.errorMessage || `Invalid ${field}`;
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return { formData, errors, handleChange, validateForm };
}

export default useFormValidation;
