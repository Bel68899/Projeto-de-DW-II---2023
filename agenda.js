function Cadastro(){

    var nome = document.getElementById("nome").value;
    var siape = document.getElementById("siape").value;
    var email = document.getElementById("email").value;
    var area = document.getElementById("area").value;
    var horas = document.getElementById("horas").value;

    var dados = document.getElementsByClassName("dados").value;
    
    if (dados != null){
        //"iniciar a página tarefas."
    }
    else {
        alert("ATENÇÃO!!! Todos os campos devem ser preenchidos!");
    }
}

Cadastro();

function Verifica(){
    var docente = document.getElementById("docente").value;
    var time = document.getElementById("time").value;
    var atividade = document.getElementById("atividade").value;
    var dias = document.getElementById("dias").value;
    var horario1 = document.getElementById("horario1").value;
    var horario2 = document.getElementById("horario2").value;

    var campos = document.getElementsByClassName("campos").value;

    //A verificação dos campos acima só seja possível caso tenha um arquivo que armazene cada uma dessas informações, ou seja, um BD.
    //Por exemplo: Para conferir se há outro horário o sistema terá que conferir em um arquivo com todos os horários

    if (campos != null){
        //"cadastrar a tarefa em uma lista, para posteriormente fazer a verificação de possiveis tarefas vai impedir o cadastro de tarefas em um mesmo horário ou outro dado igual."
    }
    else {
        alert("ATENÇÃO!!! Todos os campos devem ser preenchidos!");
    }
}

Verifica(); 

//CONTADOR:

//-> intervalo de tempo entre o horário cadastrado pelo usuário

//-> horário de início em minutos:

var inicio = (minlast_inicio + minfirst_inicio);
var minfirst_inicio = (60*firsttwo_inicio);
var firsttwo_inicio = horario1.substr(0,1);
var minlast_inicio = horario1.substr(-1,-2);

//-> horário final em minutos:

var final = (minlast_final + minfirst_final);
var minfirst_final = (60*firsttwo_final);
var firsttwo_final = horario2.substr(0,1);
var minlast_final = horario2.substr(-1,-2);

var min_intervalos = (final - inicio);
var intervalos = (min_intervalos/60);

//horastotais sempre estará atualizada
var horastotais = (horas - intervalos);

let horastotais = 0;
function contador(){
    horastotais ++; // horastotais = horastotais + 1 // horastotais +=1    
}
    
if (horastotais < horas) {
    alert("Você ainda não completou sua carga horária semanal");
}

if (horastotais > horas) {
    alert("Você ultrapassou o horário semanal proposto");
}

if (horastotais = horas) {
    alert("Parabéns! Você cumpriu sua carga horária semanal");
}

//Lista:

var tarefas = [];
tarefas [0] = docente;
document.write(tarefas[0]);
tarefas [1] = time;
document.write(tarefas[1]);
tarefas [2] = atividade;
document.write(tarefas[2]);
tarefas [3] = dias;
document.write(tarefas[3]);
tarefas [4] = horario1;
document.write(tarefas[4]);
tarefas [5] = horario2;
document.write(tarefas[6]);



