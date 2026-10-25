
function autenticar(usuarios, email, senha) {
  for (let i = 0; i < usuarios.length; i++) {
    if (usuarios[i].email === email) {
      if (usuarios[i].senha === senha && usuarios[i].ativo === true) {
        return true;
      }
    }
  }
  return false;
}


function forcaSenha(senha) {
  if (senha.length < 8) {
    return 'fraca';
  }

  let temMinuscula = false;
  let temMaiuscula = false;
  let temNumero = false;
  let temSimbolo = false;

  for (let i = 0; i < senha.length; i++) {
    let char = senha[i];
    if (char >= 'a' && char <= 'z') {
      temMinuscula = true;
    } else if (char >= 'A' && char <= 'Z') {
      temMaiuscula = true;
    } else if (char >= '0' && char <= '9') {
      temNumero = true;
    } else {
      temSimbolo = true;
    }
  }

  let contadorTipos = 0;
  if (temMinuscula) contadorTipos++;
  if (temMaiuscula) contadorTipos++;
  if (temNumero) contadorTipos++;
  if (temSimbolo) contadorTipos++;

  if (contadorTipos >= 3) {
    return 'forte';
  } else {
    return 'media';
  }
}


function podeLogar(usuario) {
  if (usuario.status === 'ativo' && usuario.falhas < 3) {
    return true;
  } else {
    return false;
  }
}


function calcularFrete(distanciaKm) {
  if (distanciaKm <= 0) {
    throw new Error('Distância inválida');
  }

  if (distanciaKm <= 3) {
    return 5;
  } else {
    let kmExcedente = distanciaKm - 3;
    let valorFinal = 5 + (kmExcedente * 1.50);
    return valorFinal;
  }
}


function aplicarCupom(valor, cupom) {
  if (cupom === null || cupom === undefined || cupom === '') {
    return valor;
  }

  if (cupom === 'PRIMEIRA10') {
    let desconto = valor * 0.10;
    let resultado = valor - desconto;
    return Number(resultado.toFixed(2));
  } 
  else if (cupom === 'VIP20') {
    let desconto = valor * 0.20;
    let resultado = valor - desconto;
    return Number(resultado.toFixed(2));
  } 
  else {
    throw new Error('Cupom inválido');
  }
}

module.exports = {
  autenticar,
  forcaSenha,
  podeLogar,
  calcularFrete,
  aplicarCupom
};