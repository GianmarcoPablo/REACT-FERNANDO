const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("2 segundos despues");
    }, 2000);
});

promesa.then((mensaje) => {
    console.log(mensaje);
})
.catch(err=> console.warn(err))