import { useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";

const FormPrueba = () => {
  const [dni, setDni] = useState("");
  const [nombre, setNombre] = useState("");
  const [errorNombre, setErrorNombre] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      "dni",
      dni,
      "nombre",
      nombre,
      dni === 35675348 && nombre === "javier"
    );
    if (dni === 35675348 && nombre === "javier") {
      alert("hola javi");
    } else {
      alert("no se quien sos");
    }
    return;
  };
  const handleChangeDocumento = (e) => {
    setDni(parseInt(e.target.value));
  };
  const handleChangeNombre = (e) => {
    if (e.target.value !== "javier") {
      setErrorNombre(true);
    } else {
      setErrorNombre(false);
    }
    setNombre(e.target.value);
  };

  useEffect(() => {
    console.log("nombre", nombre, "dni", dni);
  }, [nombre, dni]);
  return (
    <Container>
      <Form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <Form.Group>
          <Form.Label>Documento</Form.Label>
          <Form.Control
            type="number"
            onChange={(e) => {
              handleChangeDocumento(e);
            }}
            value={dni}
            name="dni"
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => {
              handleChangeNombre(e);
            }}
            value={nombre}
            name="nombre"
            style={{ borderColor: errorNombre ? "red" : "#000" }}
          ></Form.Control>
        </Form.Group>
        <Button type="submit">Enviar datos</Button>
      </Form>
    </Container>
  );
};

export default FormPrueba;
