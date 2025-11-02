import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    loading: true,
    hasError: null,
  });
  //   const { data, loading, hasError } = state;
  const getFetch = async () => {
    try {
      setState({
        ...state,
        loading: true,
      });
      const resp = await fetch(url);
      if (!resp.ok) {
        throw new Error("Error al hacer el fetch");
      }
      const data = await resp.json();
      await new Promise((resolve) => setTimeout(resolve, 300));
      console.log(data);
      setState({
        ...state,
        data: data,
        loading: false,
      });
    } catch (error) {
      setState({
        data: null,
        loading: false,
        hasError: error,
      });
    }
  };
  useEffect(() => {
    getFetch();
  }, [url]);
  return {
    // que el hook devuelva directamente las propiedades esperadas
    data: state.data,
    loading: state.loading,
    hasError: state.hasError,
  };
};
