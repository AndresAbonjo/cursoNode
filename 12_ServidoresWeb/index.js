const express = require("express");

const Service = require("./src/service");

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Lista de Usuarios",
    body: Service.getUsers(),
  });
});

app.get("/:id", (req, res) => {
  let {
    params: { id },
  } = req;
  let user = Service.getUser(id);
  res.json({
    message: `Usuario ${id}`,
    body: user,
  });
});

app.post("/", (req, res) => {
  let { body: newUser } = req;
  res.status(201).json({
    message: "Usuario creado",
    body: Service.createUser(newUser),
  });
});

app.put("/:id", (req, res) => {
  let {
    params: { id },body: dataUpdate} = req;
  let user = Service.updateUser(id, dataUpdate);
  res.json({
    message: `Usuario ${id} ha sido actualizado`,
    body: user,
  });
});

app.delete("/:id", (req, res) => {
  let {
    params: { id },
  } = req;
  let user = Service.deleteUser(id);
  res.json({
    message: `usuario ${id} eliminado correctamente`,
    body: user,
  });
});

app.listen(PORT, () => {
  console.log(`servidor escuchando en http://localhost:${PORT}/`);
});
