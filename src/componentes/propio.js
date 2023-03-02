const HolaNombre = ({ name, isLogin }) => {
  if (isLogin) {
    return <p>hola {name} </p>;
  } else {
    return <p>logueate</p>;
  }
};
export default HolaNombre;
