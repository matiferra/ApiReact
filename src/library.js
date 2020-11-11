const rp = require("request-promise");

function obtenerInfoMedicamento(nroRegistroMedicamento){
    var options ={
        uri: "https://cimavet.aemps.es/cimavet/rest/medicamento?nregistro=" + nroRegistroMedicamento,
        headers: {
            'User-Agent': 'Request-Promise'
        },
        json:true
    }
    return rp(options)
    .catch(function (err) {
        console.log("\n----- Ah ocurrido el siguiente ERROR! -----\n");
        console.log(err.cause);
        console.log("\n-------------------------------------------\n");
    });
}

module.exports = obtenerInfoMedicamento;
