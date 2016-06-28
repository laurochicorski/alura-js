/**
 * Created by Lauro on 27/06/2016.
 */

var trsPacientes = document.getElementsByClassName("paciente");

percorreArray(trsPacientes, function(pacienteTr) {
    var tdNome = pacienteTr.getElementsByClassName("info-nome")[0];
    var tdAltura = pacienteTr.getElementsByClassName("info-altura")[0];
    var tdPeso = pacienteTr.getElementsByClassName("info-peso")[0];
    var tdImc = pacienteTr.getElementsByClassName("info-imc")[0];
    var pacienteAtual = {   nome : tdNome.textContent,
        altura : tdAltura.textContent,
        peso : tdPeso.textContent,
        pegaImc : function() {
            if (this.altura != 0) {
                var imc = this.peso / (this.altura * this.altura);
                return imc;
            } else {
                console.log("Não e possível ter calcular o IMC com uma altura = 0");
            }
        }
    };
    console.log(pacienteAtual.nome);
});
