let autos = require('./autos')

const concesionaria = {
    autos: autos,
        
    buscarAuto: function(patente){
        const busqueda = autos.find(auto => auto.patente == patente);
        return busqueda || null;        
    },      
    venderAuto: function (patente) {
        let autoVendido = this.buscarAuto(patente);
        autoVendido.vendido = true;        
        return autoVendido; 
    },
    autosParaLaVenta: function(){
        let autosEnVenta = autos.filter(autoVendido => autoVendido.vendido == false)
        return autosEnVenta
    },
    autosNuevos: function(){
        return this.autosParaLaVenta().filter(autosEnVenta => autosEnVenta.km < 100 && autosEnVenta.vendido != true);
    },
    listaDeVentas: function (){       
        let autosVendido = this.autos.filter(auto => auto.vendido == true);        
        let precioAutos = autosVendido.map(unAuto => unAuto.precio);
        return precioAutos;        
    },   
    totalDeVentas: function(){
        let listaVenta = this.listaDeVentas();         
        if (listaVenta == 0){
             return 0;
         }else{
             let totalVentas = listaVenta.reduce(function(a, p){
                 return a+p;
             })
                 return totalVentas;
         }
     },
    puedeComprar: function(auto,persona){
        let costo = personalcapacidadDePagoTotal >= auto.precio;
        let capacidadDePago = persona.capacidadDePagoEnCuotas >= auto.precio/auto.cuotas;
        return (capacidadDePago && costo);
        },
    autosQuePuedeComprar: function(persona){ 
        
        let listaVenta = this.autosParaLaVenta();
        let lista = listaVenta.filter(auto => persona.capacidadDePagoTotal >= auto.precio && 
        persona.capacidadDePagoEnCuotas >= auto.precio/auto.cuotas);
        return lista;       
    }
};
     
// Lista de autos que puede comprar la persona
console.log(concesionaria.autosQuePuedeComprar({
    nombre: "Juan",
    capacidadDePagoEnCuotas: 5000,
    capacidadDePagoTotal: 1000000000
}));


// puedeComprar: function(auto,persona){
//     let costoTotal = persona.capacidadDePagoTotal >= auto.precio;
//     let capacidadDePagoEnCuotas = persona.capacidadDePagoEnCuotas >= auto.precio/auto.cuotas;
//     return (capacidadDePagoEnCuotas && costoTotal);
// },
// autosQuePuedeComprar: function(persona){
//     let arrayDisponibles = this.autosParaLaVenta();
//     const puedeComprarLista = arrayDisponibles.filter(auto => persona.capacidadDePagoTotal >= auto.precio && 
//         persona.capacidadDePagoEnCuotas >= auto.precio/auto.cuotas);
//     return puedeComprarLista;
// }




