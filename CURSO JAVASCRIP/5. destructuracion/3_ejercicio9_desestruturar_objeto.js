const persona = {
    nombre: `Roger`,
    apellido: `Burgos`,
    edad: 30,
    programar: function(){
        return 'Tick Tick tick'
    }
};

const {nombre,apellido}=persona;
console.log(`Mi nombre es ${nombre} ${apellido}`);
