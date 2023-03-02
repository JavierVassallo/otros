import { useEffect, useState } from "react";
import { Alert } from "react-bootstrap";

const Effect = () => {
  const [persona, setPersona] = useState();

  const handleChangePersona = (person) => {
    setPersona({
      nombre: person.nombre,
      apellido: person.apellido,
    });
  };

  let arrayMap = [
    { nombre: "javier" },
    { nombre: "enrico" },
    { nombre: "holis" },
  ];
  useEffect(() => {
    if (persona) {
      console.log(persona);
    } else {
      console.log("no hay personas");
    }
  }, [persona]);
  /*useEffect(() => {
    console.log("mounted");
    return () => alert("unmounting...");
  }, []);*/
  return (
    <>
      {!persona ? (
        "aun no hay ninguna persona"
      ) : (
        <Alert key={"variant"} variant={"primary"}>
          This is a {persona?.nombre} alert—check it out!
        </Alert>
      )}

      <button
        onClick={() => {
          handleChangePersona({
            nombre: "javier",
            apellido: "vassallo",
          });
        }}
      >
        cambio de nombre
      </button>
      {persona && <p>kjasndkjasdn</p>}

      {arrayMap.map((persona, index) => {
        return (
          <div key={index} style={{ display: "block" }}>
            {persona.nombre}
          </div>
        );
      })}
    </>
  );
};
export default Effect;
