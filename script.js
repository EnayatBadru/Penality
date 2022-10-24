//interface
var i = document.getElementById('interface');
var p = document.getElementById('introducaoPlayers');

//golos Players
var goloP1 = document.getElementById('golosP1');
var goloP2 = document.getElementById('golosP2');

//input radio
var E1p1 = document.getElementById("jogadorN1");
var E2p1 = document.getElementById("guardaredesN1");

var E1p2 = document.getElementById("jogador");
var E2p2 = document.getElementById("guardaredes");

//Jogadores
var p1 = document.getElementById('j1');
var p2 = document.getElementById('j2');

//lista de Players
var juga1 = {
    nome: p1.value,
    golos: goloP1.value
}

var juga2 = {
    nome: p2.value,
    golos: goloP2.vale
}

function escolher()
{  

    // if(E1p1.checked == true && E1p2.checked == true)
    if(E1p1.checked && E1p2.checked == true)
    {
    //    alert("O player 2 passará a ser guardaredes")
        E2p2.checked = true;
    }else if(E2p1.checked && E2p2.checked == true)
    {
    //    alert("O player 2 passará a ser jogador")
        E1p2.checked = true;
    }

    // if(E1p2.checked == true)
    // {
    //     alert("Checked")
    // }
}

//Introduzir Players
function submeter()
{

    var play1 = document.getElementById('nomeP1');
    var play2 = document.getElementById('nomeP2');

    //selecao
    var selecao = document.getElementById("select");

    if(p1.value != p2.value){
        if(p1.value.length > 0 && p2.value.length > 0)
        {
            i.style.opacity = 1;
            p.style.display = "none";

            play1.innerHTML = p1.value;
            play2.innerHTML = p2.value;

            selecao.style.display = "none";
        }
    }
    
}

//inputs
//class = Play1
var ply1 = document.getElementById('Play1');
//class = Play2
var ply2 = document.getElementById('Play2');

function mudarNome1()
{
    i.style.opacity = 0;
    p.style.display = "flex";
    ply1.style.display = "flex";
    ply2.style.display = "none";

}

function mudarNome2()
{
    i.style.opacity = 0;
    p.style.display = "flex";
    ply1.style.display = "none";
    ply2.style.display = "flex";
}

//Jogo

function esquerda()
{
        var mov = [];
        mov.push(1);
        alert(mov.length)
}


//Lista de movimentos

// var movimentos =
// {
//     esquerda: function(event){
//         let tecla = event.KeyCode;
//         alert(tecla)
//     },
//     direita: function(event){
//         let tecla = event.KeyCode;
//         alert(tecla)
//     },
//     meio: function(event){
//         let tecla = event.KeyCode;
//         alert(tecla)
//     }, 
//     cima: function(event){
//         let tecla = event.KeyCode;
//         alert(tecla)
//     }
// }