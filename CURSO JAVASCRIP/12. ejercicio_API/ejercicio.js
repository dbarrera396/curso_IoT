////// any_await API /////////
async function imagenes(){
const respuestas = [];

    for (let i=0;i<50;i++){
        const respuesta= await fetch(`https://picsum.photos/id/${i}/info`);
        const imagen= await respuesta.json();
        respuestas.push(imagen);
    }

    //console.log(i);
    console.log(respuestas);
}

imagenes();



