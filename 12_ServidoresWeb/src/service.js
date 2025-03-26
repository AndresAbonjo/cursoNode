const data = require("./MOCK_DATA.json");

module.exports = {
  getUsers: () => data,
  getUser: (id) => {
    let identificador = Number(id);
    let user = data.filter((person) => person.id === identificador)[0];
    return user;
  },
  createUser: (dataUser) => {
    let newUser = {
      id: data.length + 1,
      ...dataUser,
    };
    data.push(newUser);
    return newUser;
  },
  updateUser: (identificador, dataUpdate) => {
    let id = Number(identificador);
    let userFound = data.find((usuario) => {
      return usuario.id === id;
    });

    userFound.first_name = dataUpdate.first_name;
    userFound.last_name = dataUpdate.last_name;
    userFound.email = dataUpdate.email;
    return userFound;
  },
  deleteUser: (identificador) => {
    let id = Number(identificador);
    let index=data.findIndex(usuario=>usuario.id===id)

    if(index!== -1){
      data.splice(index,1)
    }
    return data;
  },
};
