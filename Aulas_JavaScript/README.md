# Aulas de JavaScript
## Principais pontos
### Funções Imediatamente Invocadas (IIFE)
Uma IIFE (Immediately Invoked Function Expression) é uma função em JavaScript que é definida e executada imediatamente após sua criação. É como se a função fosse uma expressão que, ao ser avaliada, já executa seu código. As IIFEs são uma ferramenta poderosa em JavaScript que permite criar código mais organizado, modular e seguro. Ao entender seus conceitos básicos e aplicações, você poderá escrever código JavaScript de alta qualidade.

**Sintaxe básica:**
```
(function() {
  // Código a ser executado imediatamente
})();
```
Os parênteses ao redor da função fazem com que ela seja tratada como uma expressão, e os parênteses vazios no final a invocam.
As IIFEs são úteis em diversas situações, mas as principais razões são:
- **Encapsulamento:** Cria um escopo local, evitando conflitos de nomes com variáveis globais. Isso é especialmente útil em projetos grandes com muitos arquivos JavaScript.
- **Modularidade:** Permite criar módulos independentes, facilitando a organização do código e a reutilização.
- **Execução imediata:** Garante que o código dentro da IIFE seja executado assim que o script é carregado, o que pode ser útil para inicializações.

#### Quando usar IIFEs?
- **Criando módulos:** Cada módulo pode ser encapsulado em uma IIFE, evitando colisões de nomes e criando um namespace próprio.
- **Inicializando variáveis:** Variáveis declaradas dentro da IIFE não são acessíveis fora dela, o que ajuda a evitar poluição do escopo global.
- **Protegendo código:** Código sensível pode ser colocado dentro de uma IIFE para evitar que seja alterado acidentalmente.
- **Criando padrões de projeto:** IIFEs são usadas em diversos padrões de projeto, como o Module Pattern.

***Exemplo:***
```
(function() {
  // Variáveis privadas
  let nome = "João";
  let idade = 30;

  // Função privada
  function saudacao() {
    console.log("Olá, meu nome é " + nome + " e tenho " + idade + " anos.");
  }

  // Execução da função privada
  saudacao();
})();
```
No exemplo acima, as variáveis nome e idade e a função saudacao são privadas, pois estão dentro do escopo da IIFE. A função saudacao é executada imediatamente após a criação da IIFE.
