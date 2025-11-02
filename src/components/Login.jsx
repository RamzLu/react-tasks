import { useForm } from "../hooks/useForm";
export const Login = ({ onLogin }) => {
  // el onLogin es un forma corta de escribir props.onLogin
  // por convencion de react cualquier prop que comience con on como onClick, onChange etc es una funcion "callback" que maneja eventos
  // el onLogi seria un prop que el componente Login espera recibir de su componente padre, este prop es una funcion,
  // el onLogin desarma el objeto de props
  //  desestructuramos el hook que hicimos
  //   console.log(onLogin);
  const { form, handleChange, handleReset } = useForm({
    username: "",
    password: "",
  });
  const { username, password } = form;
  const handleSubmit = (evento) => {
    evento.preventDefault();
    onLogin(username); // le pasamos el username al onLogin
    handleReset(); // reseteamos el formulario
    console.log(form);
  };
  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={(evento) => handleSubmit(evento, onLogin)}>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          placeholder="username aqui"
          value={username}
          onChange={handleChange}
          required
        />
        <label>Password:</label>
        <input
          type="password"
          name="password"
          placeholder="password aqui"
          value={password}
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
