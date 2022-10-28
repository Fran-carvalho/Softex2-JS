var locadora = {
    suspense: 80, 
    acao: 100, 
    romance: 60, 
}

for ( let categorias in locadora ) {

    
    console.log(`${categorias} => ${locadora[categorias]}`);
}

var romance = ["Continência ao Amor", "Orgulho e Preconceito", "O Amor não tira férias"]

for ( let filmes of romance ) {

    // Valores
    console.log(filmes);
