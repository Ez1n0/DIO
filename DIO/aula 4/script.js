var jogador1 = 0;
var jogador2 = 0;
var placar;
    
//if ternário
    jogador1 != -1 && jogador2 != -1 ? console.log('OS jogadores são válidos') : console.log('Os jogadores são inválidos');
    if (jogador1 > jogador2 ){
        console.log('Jogador 1 marcou ponto');
        placar = jogador1 > jogador2;
    } else if (jogador2 > jogador1){
        console.log('Jogador 2 marcou ponto')
        placar = jogador2 > jogador1;
    } else {
        console.log('Ninguem marcou ponto')
    }    

switch (placar){
    case placar = jogador1 > jogador2:
        console.log('jogador 1 ganhou');
        break;
        case placar = jogador2 > jogador1:
            console.log('jogador 2 ganhou');
            break;
            default:
            console.log('Ninguem ganhou');
}