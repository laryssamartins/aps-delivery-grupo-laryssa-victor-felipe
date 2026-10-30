const delivery = require('./delivery');

test('CT-Teste-Victor-01: verificando se o usuário está ativo no sistema', () => {
  let user = { status: 'ativo', falhas: 0 };
  expect(delivery.podeLogar(user)).toBe(true);
});

test('CT-Teste-Victor-02: verificando usuario ativo no limite de 2 falhas', () => {
  let user = { status: 'ativo', falhas: 2 };
  expect(delivery.podeLogar(user)).toBe(true);
});

test('CT-Teste-Victor-03: observnado usuario ativo com 3 falhas = bloqueia', () => {
  let user = { status: 'ativo', falhas: 3 };
  expect(delivery.podeLogar(user)).toBe(false);
});

test('CT-Teste-Victor-04: usuario com status bloqueado', () => {
  let user = { status: 'bloqueado', falhas: 0 };
  expect(delivery.podeLogar(user)).toBe(false);
});

test('CT-Teste-Victor-05: testando distancia de entrega curta (2 km)', () => {
  expect(delivery.calcularFrete(2)).toBe(5);
});

test('CT-Teste-Victor-06: testando a distancia na fronteira de 3 km', () => {
  expect(delivery.calcularFrete(3)).toBe(5);
});

//Testes Laryssa Martins
test('CT-07: senha com 8 caracteres e 2 tipos', () => {
  expect(delivery.forcaSenha('Abcdefgh')).toBe('media');
});

test('CT-08: senha forte com 8 caracteres e 4 tipos', () => {
  expect(delivery.forcaSenha('Abcdef1!')).toBe('forte');
});

// F3 · podeLogar
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
//Fim dos Testes Laryssa Martins