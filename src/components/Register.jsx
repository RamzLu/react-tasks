import { useForm } from "../hooks/useForm";

export const Register = () => {
  const { form, handleChange, handleReset } = useForm({
    username: "",
    email: "",
    password: "",
    firstname: "",
    lastname: "",
  });
  const handleSubmit = (evento) => {
    evento.preventDefault();
    console.log(form);
    handleReset();
  };
  return (
    <div className="form-container">
      <h2>Registro</h2>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          className="input"
          name="username"
          value={form.username}
          onChange={handleChange}
          required
        />
        <label>Email:</label>
        <input
          type="email"
          className="input"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <label>Password:</label>
        <input
          type="password"
          className="input"
          name="password"
          value={form.password}
          onChange={handleChange}
          required
        />

        <label>First name:</label>
        <input
          type="text"
          name="firstname"
          value={form.firstname}
          onChange={handleChange}
        />

        <label>Last name:</label>
        <input
          type="text"
          name="lastname"
          value={form.lastname}
          onChange={handleChange}
        />
        <button type="submit" onClick={handleSubmit}>
          Registrarse
        </button>
      </form>
    </div>
  );
};
