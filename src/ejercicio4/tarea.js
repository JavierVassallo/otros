import { BsXLg } from "react-icons/bs";
const Tarea = ({ texto, index, eliminarTarea }) => {
  return (
    <div className="tarea">
      <p
        style={{
          textAlign: "start",
          marginLeft: "2vw",
          marginTop: "2vh",
        }}
      >
        {texto}
      </p>

      <BsXLg
        onClick={() => {
          eliminarTarea(index);
        }}
        style={{
          float: "right",
          marginRight: "2vw",
          cursor: "pointer",
        }}
      />
    </div>
  );
};

export default Tarea;
