const delivery = require('./delivery');

const usuarios = [
  { email: 'ana@delivery.com',   senha: 'Ana12345',   ativo: true },
  { email: 'bruno@delivery.com', senha: 'Bruno#2024', ativo: false }
];


test('CT-01: credenciais validas de usuario ativo', () => {
  let resultado = delivery.autenticar(usuarios, 'ana@delivery.com', 'Ana12345');
  expect(resultado).toBe(true);
});

test('CT-02: senha incorreta com e-mail valido', () => {
  let resultado = delivery.autenticar(usuarios, 'ana@delivery.com', 'senhaerrada');
  expect(resultado).toBe(false);
});

test('CT-03: e-mail inexistente na base', () => {
  let resultado = delivery.autenticar(usuarios, 'ninguem@delivery.com', 'Ana12345');
  expect(resultado).toBe(false);
});

test('CT-04: conta inativa com senha correta', () => {
  let resultado = delivery.autenticar(usuarios, 'bruno@delivery.com', 'Bruno#2024');
  expect(resultado).toBe(false);
});


test('CT-05: senha curta com menos de 8 caracteres', () => {
  expect(delivery.forcaSenha('Ab1')).toBe('fraca');
});

test('CT-06: senha com 8 caracteres e apenas 1 tipo', () => {
  expect(delivery.forcaSenha('12345678')).toBe('media');
});

test('CT-07: senha com 8 caracteres e 2 tipos', () => {
  expect(delivery.forcaSenha('Abcdefgh')).toBe('media');
});

test('CT-08: senha forte com 8 caracteres e 4 tipos', () => {
  expect(delivery.forcaSenha('Abcdef1!')).toBe('forte');
});


test('CT-09: usuario ativo sem falhas', () => {
  let user = { status: 'ativo', falhas: 0 };
  expect(delivery.podeLogar(user)).toBe(true);
});

test('CT-10: usuario ativo no limite de 2 falhas', () => {
  let user = { status: 'ativo', falhas: 2 };
  expect(delivery.podeLogar(user)).toBe(true);
});

test('CT-11: usuario ativo com 3 falhas bloqueia', () => {
  let user = { status: 'ativo', falhas: 3 };
  expect(delivery.podeLogar(user)).toBe(false);
});

test('CT-12: usuario com status bloqueado', () => {
  let user = { status: 'bloqueado', falhas: 0 };
  expect(delivery.podeLogar(user)).toBe(false);
});

test('CT-13: distancia de entrega curta (2 km)', () => {
  expect(delivery.calcularFrete(2)).toBe(5);
});

test('CT-14: distancia na fronteira de 3 km', () => {
  expect(delivery.calcularFrete(3)).toBe(5);
});

test('CT-15: distancia acima da fronteira (5 km)', () => {
  expect(delivery.calcularFrete(5)).toBe(8);
});

test('CT-16: distancia negativa gera erro', () => {
  expect(() => {
    delivery.calcularFrete(-2);
  }).toThrow('Distância inválida');
});


test('CT-17: pedido sem cupom informado', () => {
  expect(delivery.aplicarCupom(80, null)).toBe(80);
});

test('CT-18: aplicacao do cupom PRIMEIRA10', () => {
  expect(delivery.aplicarCupom(100, 'PRIMEIRA10')).toBe(90);
});

test('CT-19: aplicacao do cupom VIP20', () => {
  expect(delivery.aplicarCupom(50, 'VIP20')).toBe(40);
});

test('CT-20: cupom desconhecido gera erro', () => {
  expect(() => {
    delivery.aplicarCupom(80, 'CUPOM123');
  }).toThrow('Cupom inválido');
});