# APS · DeliveryExpress — Testes Automatizados

Projeto de testes automatizados e regras de negócio do sistema **DeliveryExpress**.

## Integrantes da Equipe
- Laryssa Martins Aguiar dos Santos
- Felipe Iury Soeiro Carneiro
- Victor Cauã de Andrade Castro

---

## Resumo das Funcionalidades
1. **F1 (`autenticar`)**: Validação de e-mail, senha e status de conta ativa.
2. **F2 (`forcaSenha`)**: Classificação da força em fraca, média e forte.
3. **F3 (`podeLogar`)**: Liberação de acesso considerando o limite de falhas.
4. **F4 (`calcularFrete`)**: Cálculo de taxa fixa até 3km e acréscimo por km excedente.
5. **F5 (`aplicarCupom`)**: Aplicação de cupons promocionais com desconto percentual.

---

## Como Executar os Testes

1. Instalar as dependências:
bash
   npm install
2.Executar os testes automatizados (20 casos de teste):
bash
npm test

3. Gerar relatório de cobertura de código (100% coverage):
bash
npm run test:coverage

## Relatório de Execução dos Testes e Cobertura
PASS  ./delivery.test.js
  ✓ CT-01: credenciais validas de usuario ativo
  ✓ CT-02: senha incorreta com e-mail valido
  ✓ CT-03: e-mail inexistente na base
  ✓ CT-04: conta inativa com senha correta
  ✓ CT-05: senha curta com menos de 8 caracteres
  ✓ CT-06: senha com 8 caracteres e apenas 1 tipo
  ✓ CT-07: senha com 8 caracteres e 2 tipos
  ✓ CT-08: senha forte com 8 caracteres e 4 tipos
  ✓ CT-09: usuario ativo sem falhas
  ✓ CT-10: usuario ativo no limite de 2 falhas
  ✓ CT-11: usuario ativo com 3 falhas bloqueia
  ✓ CT-12: usuario com status bloqueado
  ✓ CT-13: distancia de entrega curta (2 km)
  ✓ CT-14: distancia na fronteira de 3 km
  ✓ CT-15: distancia acima da fronteira (5 km)
  ✓ CT-16: distancia negativa gera erro
  ✓ CT-17: pedido sem cupom informado
  ✓ CT-18: aplicacao do cupom PRIMEIRA10
  ✓ CT-19: aplicacao do cupom VIP20
  ✓ CT-20: cupom desconhecido gera erro

-----------------|---------|----------|---------|---------|-------------------
File             | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
-----------------|---------|----------|---------|---------|-------------------
All files        |     100 |      100 |     100 |     100 |                   
 delivery.js     |     100 |      100 |     100 |     100 |                   
-----------------|---------|----------|---------|---------|-------------------
Test Suites: 1 passed, 1 total
Tests:       20 passed, 20 total
