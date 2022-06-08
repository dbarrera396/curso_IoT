const personas = [
    { nombre: "Roger", apellido: "Burgos", edad: 30 },
    { nombre: "Alex", apellido: "Aragón", edad: 31 },
    { nombre: "Jorge", apellido: "Gutierrez", edad: 28 },
    { nombre: "Jesus", apellido: "Alarcon", edad: 17 },
]

/*personas.forEach(persona => {
    console.log(`Èl nombre de la persona es ${persona.nombre} ${persona.apellido}`);
});*/

//desestruturacio de persona.nommbre y persona.apellido

personas.forEach(({nombre,apellido}) => {
    console.log(`El nombre de la persona es ${nombre} ${apellido}`);
})