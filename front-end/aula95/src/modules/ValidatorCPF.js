export default class ValidatorCPF {
    constructor(cpf) {
        Object.defineProperty(this, 'cpfFull', {
                value: cpf.replace(/\D+/g, ''),
                writable: true, 
                enumerable: true, 
                configurable: true
            });

        Object.defineProperty(this, 'cpf', {
            value: this.cpfFull.slice(0, -2),
            writable: false, 
            enumerable: false, 
            configurable: false
        });
    };

    
    sumArray(cpf) {
        const arrayDoCPF = Array.from(cpf);
        let regressive = arrayDoCPF.length + 1
        const sum = arrayDoCPF.reduce(
            (ac, value) => {
                ac += (regressive * Number(value));
                regressive--
                return ac
            }, 0)
        return sum;
    };

    createDigit(cpf) {
        const digit = 11 - (this.sumArray(cpf) % 11);
        return digit > 9 ? 0 : digit;
    }

    isSequence() {
        const sequence = this.cpf[1].repeat(this.cpf.length + 2);
        return sequence === this.cpfFull ? true : false;
    }
    
    appendValidation() {
        if (this.valid() == false) {
            const result1 = document.querySelector('.result-off > p');
            result1.textContent = 'Digite um CPF válido!';
            this.openResult()
            return;
        };
        
        const spanCpf = document.querySelector('.info-cpf');
        const spanValidator = document.querySelector('.result-cpf');
        
        spanCpf.innerHTML = cpfDigit.value;
        spanValidator.innerHTML = this.valid();
        this.openResult();
    }

    valid() {
        if (!this.cpfFull) return false;
        if (typeof this.cpfFull !== 'string') return false;
        if (this.cpfFull.length !== 11) return false;
        if (this.isSequence()) return false;
    
        const oneDigit = this.createDigit(this.cpf);
        const twoDigit = this.createDigit(this.cpf + oneDigit);
        const newCpf = this.cpf + oneDigit + twoDigit;
        return this.cpfFull === newCpf ? 'VÁLIDO' : 'INVÁLIDO';
    };
}




