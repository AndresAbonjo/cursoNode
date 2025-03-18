//promises

const getData = (error) =>
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
