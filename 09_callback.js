//callback

const suma = (a, b, cb) => {
  cb(a + b);
};

suma(2, 5, (resul) => {
  console.log(resul);
});
