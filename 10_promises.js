//promises

const getData = (error) =>
  new Promise((resolve, reject) => {
    if (!error) {
      setTimeout(() => {
        resolve({
          nombre: "andres",
          apellido: "abonjo",
        });
      }, 3000);
    } else {
      reject("No pudimos obtener datos");
    }
  });

const getData2 = (error) =>
  new Promise((resolve, reject) => {
    if (!error) {
      resolve({
        nombre: "andres",
        apellido: "abonjo",
      });
    } else {
      reject("No pudimos obtener datos");
    }
  });

getData(true)
  .then((data) => {
    console.log(data);
    return getData2(false);
  })
  .then((data) => {
    console.log(true);
  })
  .catch((error) => {
    console.log(error);
  });

const getDato = (error) =>
  new Promise((resolve, reject) => {
    if (!error) {
      setTimeout(() => {
        resolve({
          nombre: "andres",
          apellido: "abonjo",
        });
      }, 3000);
    } else {
      reject("No pudimos obtener datos");
    }
  });

const getDato2 = (error) =>
  new Promise((resolve, reject) => {
    if (!error) {
      setTimeout(() => {
        resolve({
          nombre: "pepe",
          apellido: "garcia",
        });
      }, 3000);
    } else {
      reject("No pudimos obtener datos 2");
    }
  });

const main = async () => {
  try {
    let resul = await getDato(false);
    let resul2 = await getDato2(true);

    console.log(resul);
    console.log(resul2);
  } catch (error) {
    console.log(error);
  }
};

main();
