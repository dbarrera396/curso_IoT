const frutas=['Cerez','Naranja', 'Banana', 'Manzana'];

frutas.forEach((fruta,posicion)=>{
    console.log(`La fruta ${fruta} se encuentra en la posicion ${posicion}`);
});

frutas[20]="Pera";

frutas.forEach((fruta,posicion)=>{
    console.log(`La fruta ${fruta} se encuentra en la posicion ${posicion}`);
});

