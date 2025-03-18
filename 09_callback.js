//callback

const suma = (a, b, cb) => {
  cb(a + b);
};

suma(2, 5, (resul) => {
  console.log(resul);
});

const getData = (cb) => {
  setTimeout(() => {
    cb({
      nombre: "fran",
      apellido: "garcia",
    });
  }, 3000);
};

const impData = (data) => console.log(data);

getData(impData);

