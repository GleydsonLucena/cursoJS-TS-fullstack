function criaPessoa(nome, sobrenome) {
    const criaPrototype = {
        falar() {
        console.log(`${this.nome} está falando!`);
        },
        comer() {
            console.log(`${this.nome} está comendo!`);
        },
        beber() {
            console.log(`${this.nome} está bebendo!`);
        }
    }
    
    return Object.create(criaPrototype,{ 
        nome: {value: nome},
        sobrenome: {value: sobrenome}
    })
};

const p1 = criaPessoa('Gleydson', 'Lucena');

console.log(p1);