import { useState } from "react";

export const useForm = (initialState) => {
  const [state, setState] = useState(initialState);

  const handleInputChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const reset = (newFormState = initialState) => {
    setState(newFormState);
  };

  return [state, handleInputChange, reset];
};
