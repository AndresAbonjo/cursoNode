const express=require('express');

const app= express();
const PORT=3000;

app.get('/',(req,res)=>{
    res.json({
        message:'Hola mundo desde Express'
    })
})

app.listen(PORT,()=>{
    console.log(`servidor escuchando en http://localhost:${PORT}/`);
})