function meuEscopo() {
    const form = document.querySelector('.form');
    const dados = document.querySelector('.dados');

    form.addEventListener('submit', eventoEnviar=(evento)=> {
        evento.preventDefault();
        const nome = document.getElementById('txtnome');
        const sobrenome = document.getElementById('txtsobrenome');
        const peso = document.getElementById('txtpeso');
        const altura = document.getElementById('txtaltura');

        function cirarPessoa (nome, sobrenome, peso, altura) {
            return {
            nome,
            sobrenome, 
            peso,
            altura
            };
        } 

        let pessoas = [];
        let pessoa = cirarPessoa(nome.value, sobrenome.value, peso.value, altura.value);

        pessoas.unshift(pessoa);

        console.log(pessoas)
    });
}