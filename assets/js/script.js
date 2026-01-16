function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    function calculoIMC(peso, altura) {
        return (peso / (altura ** 2))
    }

    function resultadoIMC(imc) {
        let mensagemResultado;
        if (imc <= 18.5) { // Abaixo do resultado
            mensagemResultado = `Morto de fome, IMC:${imc}`
            return mensagemResultado
        } else if (imc < 25) { // Normal
            mensagemResultado = `Pessoa Normal, IMC:${imc}`
            return mensagemResultado
        } else if (imc < 30) { // Sobrepeso
            mensagemResultado = `Gordinho atiçante, IMC:${imc}`
            return mensagemResultado
        } else if (imc < 35) { // Obesidade 1
            mensagemResultado = `Gordão, IMC:${imc}`
            return mensagemResultado
        } else if (imc < 40) { // Obesidade 2
            mensagemResultado = `Tão gordo que já tem gravidade própria, IMC:${imc}`
            return mensagemResultado
        } else { // Obesidade 3
            mensagemResultado = `Classificado como planeta pela NASA, IMC:${imc}`
            return mensagemResultado
        }
    }

    function recebeEventoForm(evento) {
        evento.preventDefault();
        const peso = (form.querySelector('.peso')).value;
        const altura = (form.querySelector('.altura')).value;
        
        let imc = calculoIMC(peso.value, altura.value).toFixed(2)

        resultado.innerHTML = `<p> ${resultadoIMC(imc)}</p>`

    }


    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();