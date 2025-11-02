export const Loading = ({ loading }) => {
  if (!loading) return null;
  return (
    <div>
      <h1>Cargando data..</h1>
    </div>
  );
};
