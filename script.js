function programa() {
    const diasemana = document.querySelector('#diasemana').value;
    const int = document.querySelector('#int').value;
    const men = document.querySelector(".men");
    
    if ((num == 1 || num == 2) && (dia == "segunda" || dia == "segunda")) {
        men.innerHTML = "não pode dirigir";
    }

    else if ((num == 3 || num == 4) && (dia == "terça" || dia == "Terça")) {
        men.innerHTML = "não pode dirigir";
    }

    else if ((num == 5 || num == 6) && (dia == "quarta" || dia == "Quarta")) {
        men.innerHTML = "não pode dirigir";
    }

    else if ((num == 7 || num == 8) && (dia == "quinta" || dia == "Quinta")) {
        men.innerHTML = "não pode dirigir";
    }

    else if ((num == 9 || num == 0) && (dia == "sexta" || dia == "Sexta")) {
        men.innerHTML = "não pode dirigir";
    }

    else {
        men.innerHTML = "pode dirigir";
    }
}