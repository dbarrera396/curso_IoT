/*const usuarios=()=> new Promise((resolve,reject)=>{

    settimeout(()=>{
        const informacion = [
            {id:1, nombre:"Pedro"},
            {id:2, nombre:"Jorge"},
            {id:3, nombre:"Mariana"},
            {id:4, nombre:"Sergio"},
            {id:5, nombre:"Luz"}
        ];
        resolve(informacion);
    }, 3000);        
});

console.log(usuarios());

usuarios().then(usuarios => console.log(usuarios));*/

const usuarios= function(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            const informacion = [
                {id:1, nombre:"Pedro"},
                {id:2, nombre:"Jorge"},
                {id:3, nombre:"Mariana"},
                {id:4, nombre:"Sergio"},
                {id:5, nombre:"Luz"}
            ];
            resolve(informacion);
        }, 3000)//tres segundos
    });
}

console.log(usuarios());

usuarios().then(function(usuarios){
    console.log(usuarios);
})

console.log('hola');
