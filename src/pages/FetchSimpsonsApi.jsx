import { CharacterInfo } from "../components/CharacterInfo";
import { Loading } from "../components/Loading";
import { useCounter } from "../hooks/useConter";
import { useFetch } from "../hooks/useFetch";

export const FetchSimpsonsApi = () => {
  const { count, handleIncrement, handleDecrement } = useCounter(1);
  const url = `https://thesimpsonsapi.com/api/characters/${count}`;
  const { data, loading, hasError } = useFetch(url);
  return (
    <div>
      {/* parte de cargando */}
      <Loading loading={loading} />
      {/* parte de error */}
      {hasError && <h2>Error al cargar los personajes: {hasError}</h2>}
      {/* acá muestra los personajes */}
      {!loading && !hasError && <CharacterInfo data={data} />}

      {/* botones */}
      <button onClick={() => handleDecrement()} disabled={count === 1}>
        Anterior
      </button>
      <button onClick={() => handleIncrement()} disabled={loading}>
        Siguiente
      </button>
    </div>
  );
};
