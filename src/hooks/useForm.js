import { useState } from "react";

export const useForm = (initialValues) => {
  const [form, setForm] = useState(initialValues);

  const handleChange = (event) => {
    // name es el nombre del input, "value" lo que el usuario escribe
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value,
      // se cambia solo el campo que se modificó
    });
  };
  // Aca resetea el formulario con el valor inicial
  const handleReset = () => {
    setForm(initialValues);
  };
  // el hook siempre debe retornar un objeto o un array
  return {
    form,
    handleChange,
    handleReset,
  };
};
