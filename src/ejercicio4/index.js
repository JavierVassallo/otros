import { Card } from "react-bootstrap";
import "./index.css";
import Form from "react-bootstrap/Form";
import Tarea from "./tarea";
import { useEffect, useState } from "react";
const ListaTareas = () => {
  const [tareas, setTareas] = useState([]);
  const handleChangeTareas = (e) => {
    if (e.key.toUpperCase() === "ENTER") {
      let tareaCopia = [...tareas];
      tareaCopia.push(e.target.value);
      setTareas(tareaCopia);
      localStorage.setItem("tareas", tareaCopia);
    }
  };

  const eliminarTarea = (indice) => {
    let tareasCopia = [...tareas];
    tareasCopia.splice(indice, 1);
    setTareas(tareasCopia);
    localStorage.setItem("tareas", tareasCopia);
  };

  useEffect(() => {
    let tareasLocalStorage = localStorage.getItem("tareas", tareas);

    if (tareasLocalStorage) setTareas(tareasLocalStorage.split(","));
  }, []);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card className="carta">
        <Card.Body>
          <Card.Title>Bienvenido</Card.Title>
          <h5>ingresa tus tareas</h5>
          <Form.Control
            onKeyDown={(e) => {
              handleChangeTareas(e);
            }}
            type="text"
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
            placeholder={
              tareas.length
                ? `ingresa tu tarea ${tareas.length + 1}`
                : `ingresa tu primer tarea`
            }
          />
        </Card.Body>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: "4vh",
          }}
        >
          {tareas.map((tarea, index) => {
            return (
              <Tarea
                eliminarTarea={eliminarTarea}
                texto={tarea}
                index={index}
                key={index}
              />
            );
          })}
        </div>
      </Card>
    </div>
  );
};

export default ListaTareas;
