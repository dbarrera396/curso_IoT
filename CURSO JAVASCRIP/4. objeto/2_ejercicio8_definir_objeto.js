const persona = {
    nombre: `Roger`,
    apellido: `Burgos`,
    edad: 30,
    programar: function(){
        return 'Tick Tick tick'
    }
};

console.log(`Mi nombre es ${persona.nombre} ${persona.apellido}`);
console.log(persona.programar());