import React from "react";
import { useEffect } from "react";
import { useForm } from "../hooks/useForm";

export default function SimpleForm() {
  const { form, handleChange } = useForm({
    username: "",
    password: "",
  });
  const getFechTareas = () => {
    console.log("lammada a api");
    console.log("guardar la respuesta en un stado");
  };
  useEffect(() => {
    getFechTareas();
  }, []);

  useEffect(() => {
    console.log("modificando username");
  }, [form.username]);

  //   getFechTareas();
  return (
    <>
      <form>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          placeholder="username aqui"
          value={form.username}
          onChange={handleChange}
          required
        />
        <label>Password:</label>
        <input
          type="password"
          name="password"
          placeholder="password aqui"
          value={form.password}
          onChange={handleChange}
          required
        />
      </form>
    </>
  );
}
