# 📙 HTML - RESUMO

# 🔶Estrutura Básica

- **Declaração do tipo de documento:** Informa ao navegador qual versão do HTML está sendo utilizada.
- **Elemento `<html>`:** Envolve todo o conteúdo do documento HTML.
- **Elemento `<head>`:** Contém informações sobre o documento, como o título, metadados e links para arquivos CSS.
- **Elemento `<body>`:** Contém o conteúdo visível da página, ou seja, tudo o que o usuário verá.

```html
<!DOCTYPE html>
<html>
	<head> <!-- cabeçalho -->
		<title>Titulo da página</title>
	</head> 
	<body> <!-- corpo da página -->
		<h1>Bem-vindo ao meu site!</h1>
	  <p>Este é um parágrafo de exemplo.</p>
	</body> 
</html>
```

## 🟩Tags

São palavras-chave encerradas entre colchetes angulares (`<` e `>`). Elas definem os elementos da página e seu conteúdo. Algumas das tags mais comuns são:

- **Tags de cabeçalho:** `<h1>`, `<h2>`, `<h3>`, ..., `<h6>` (definem títulos de diferentes níveis).
- **Parágrafos:** `<p>` (define um parágrafo).
- **Quebras de linha:** `<br>` (insere uma quebra de linha).
- **Listas:** `<ul>` (lista não ordenada), `<ol>` (lista ordenada), `<li>` (item da lista).
- **Links:** `<a>` (cria um link para outra página).
- **Imagens:** `<img>` (insere uma imagem). Não possui tag de fechamento.
- **Tabelas:** `<table>`, `<tr>`, `<td>` (criam tabelas, linhas e células).
- **Formulários:** `<form>`, `<input>`(não possui tag de fechamento), `<button>` (criam formulários para coleta de dados).
- **Divisões:** `<div>` (cria uma divisão para agrupar elementos).
- **Seções:** `<section>`, `<article>`, `<header>`, `<footer>` (definem seções e partes de um documento).
- **Editores de texto:** `<i>`*italico*, `<strong>`**negrito,** `<u>`sublinhado, <mark>marca texto

## 🟩Atributos

Os atributos fornecem informações adicionais sobre as tags. Por exemplo, o atributo `src` na tag `<img>` especifica o caminho para a imagem, e o atributo `href` na tag `<a>` define o destino do link.

- **id:** identificador do elemento
- **class:**  voltado para o CSS, padroniza tudo que possuir essa classe.
- **style:** voltado para o CSS, formata o navegador da forma desejada
- **type:** altera  o valor do campo
- **src:** fonte/ endereço da imagem/ recurso
- **width(largura) e height(altura):** estipulam o tamanho da imagem

## 🟩Textos

### **Tags de Cabeçalho**

- **`<h1>` a `<h6>`:** Definem títulos de diferentes níveis, do mais importante (h1) ao menos importante (h6).
    
    ```html
    <h1>Título principal</h1>
    <h2>Subtítulo</h2>
    <h3>Subtítulo de nível 3</h3>
    ```
    

### **Parágrafos**

- **`<p>`:** Define um parágrafo. Corpo do texto.
    
    ```html
    <p>Este é um parágrafo de exemplo. Ele contém texto normal e pode ser formatado c
    ```
    

### **Quebra de Linha**

- **`<br>`:** Insere uma quebra de linha dentro de um elemento de bloco.
    
    ```html
    <p>Este é um parágrafo com<br>uma quebra de linha.</p>
    ```
    

### **Citações**

- **`<blockquote>`:** Cria uma citação longa.
- **`<q>`:** Cria uma citação curta.

```html
<p>Como disse Albert Einstein, "A imaginação é mais importante que o conhecimento."</p>
<blockquote>
	<p>A vida é o que acontece enquanto você está fazendo outros planos.</p>
	<footer>John Lennon</footer>
</blockquote>
```

### **Abreviações e Acrônimos**

- **`<abbr>`:** Define uma abreviação ou acrônimo.
- **`<address>`:** Define informações de contato.

```html
<p>A <abbr title="World Wide Web">WWW</abbr> é um sistema de documentos interligados.</p>
<address>
Contato: <a [href="mailto:contato@exemplo.com](mailto:href=%22mailto:contato@exemplo.com)">[contato@exemplo.com](mailto:contato@exemplo.com)</a>
</address>
```

## 🟩Listas

Elementos essenciais em HTML, permitindo que você organize informações de forma clara e concisa. Elas são especialmente úteis para apresentar listas de itens, instruções, menus de navegação e outros tipos de conteúdo.

- **`<ul>`:** Define o início de uma lista não ordenada.
- **`<ol>`:** Define o início de uma lista ordenada.
- **`<li>`:** Define um item da lista.

### Listas ordenadas

**Listas ordenadas (`<ol>`):** Utilizadas para listas onde a ordem dos itens é significativa. Os itens são numerados automaticamente.

```html
<ol>
	<li>Item 1</li>
	<li>Item 2</li>
	<li>Item 3</li>
</ol>
```

### Listas não ordenadas

**Listas não ordenadas (`<ul>`):** Utilizadas para listas onde a ordem dos itens não é importante. Cada item é marcado com um marcador, geralmente um ponto preto.

```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

### Personalizando Listas

Você pode personalizar a aparência das listas usando CSS. Algumas propriedades CSS comuns para listas incluem:

- **`list-style-type`:** Define o tipo de marcador para listas não ordenadas (por exemplo, `disc`, `circle`, `square`) e o tipo de numeração para listas ordenadas (por exemplo, `decimal`, `roman`, `lower-alpha`).
- **`margin`:** Define as margens da lista.
- **`padding`:** Define o espaço interno dos itens da lista.

**Exemplo:**

```html
<ul style="list-style-type: circle; margin: 0; padding: 0;">
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
```

### Listas Aninhadas

Você pode criar listas dentro de outras listas para organizar informações hierarquicamente:

```html
<ul>
  <li>Frutas
    <ul>
      <li>Maçã</li>
      <li>Banana</li>
    </ul>
  </li>
  <li>Legumes
    <ul>
      <li>Cenoura</li>
      <li>Beterraba</li>
    </ul>
  </li>
</ul>
```

### Outros Atributos e Elementos

- **`<dl>`:** Define uma lista de definições, onde cada item da lista consiste em um termo e sua descrição.
- **`<dt>`:** Define um termo em uma lista de definições.
- **`<dd>`:** Define a descrição de um termo em uma lista de definições.

**Exemplo de lista de definições:**

```html
<dl>
  <dt>HTML</dt>
  <dd>Linguagem de marcação para criar a estrutura de páginas web.</dd>
  <dt>CSS</dt>
  <dd>Linguagem de estilo para definir a apresentação de páginas web.</dd>
</dl>
```

## 🟩Links

Hiperlinks, são elementos que conectam uma página da web a outra, seja dentro do mesmo site ou em um site diferente. Eles são a base da navegação na internet, permitindo que os usuários passem de uma página para outra com um simples clique.

A tag HTML utilizada para criar links é a `<a>`. Dentro desta tag, o atributo `href` indica o endereço (URL) para onde o link irá direcionar o usuário.

**Exemplo:**

```html
<a href="https://www.exemplo.com">Visite nosso site</a>
```

## **Tipos de links:**

- **Links internos:** Conectam a página atual a outras páginas dentro do mesmo site.
- **Links externos:** Conectam a página atual a páginas em outros sites.
- **Links para âncoras:** Permitem que você crie links para seções específicas dentro da mesma página.
- **Links para arquivos:** Podem ser usados para baixar arquivos, como PDFs, imagens ou documentos.
- **Links para e-mail:** Criam links que, quando clicados, abrem um programa de e-mail para enviar uma mensagem.

## **Outros atributos úteis:**

- **`target`:** Define onde o link será aberto (na mesma aba, em uma nova aba, etc.).
    - **_self:** abre na mesma aba
    - **_blank:** abre em uma nova aba
- **`title`:** Adiciona um texto de dica que aparece quando o mouse passa sobre o link.
- **`rel`:** Especifica a relação entre a página atual e a página vinculada (por exemplo, `nofollow` para indicar que o link não deve ser seguido por mecanismos de busca).

**Exemplo com atributos:**

```html
<a href="contato.html" target="_blank" title="Entre em contato">Entre em contato conosco</a>
```

**Links para âncoras:**

Para criar um link para uma seção específica de uma página, você precisa adicionar um ID à seção desejada e criar um link com esse ID no atributo `href`.

```html
<h2 id="contato">Entre em contato</h2>

<a href="#contato">Ir para a seção de contato</a>
```
# 🔶 Trabalhando com Formulários em HTML

**Formulários HTML** são elementos essenciais para coletar dados de usuários em páginas web. Eles permitem que os visitantes interajam com a página, preenchendo informações que podem ser enviadas para um servidor para processamento.

### Estrutura Básica

- **<form>:** Define o início e o fim do formulário. Possui atributos como `action` (onde os dados serão enviados) e `method` (o método de envio, geralmente GET ou POST).
- **<input>:** Cria os campos de entrada para os dados, como caixas de texto, senhas, botões de rádio, caixas de seleção e mais. O atributo `type` define o tipo de campo.
- **<label>:** Associa um rótulo a um elemento de formulário, melhorando a acessibilidade e a experiência do usuário.
- **<button>:** Cria botões para enviar o formulário ou realizar outras ações.
- **<textarea>:** Cria um campo de texto multiline, ideal para comentários ou textos maiores.

### Tipos de Elementos <input>

- **text:** Campo de texto de uma linha.
- **password:** Campo de senha, que mascara os caracteres digitados.
- **email:** Campo específico para endereços de e-mail.
- **number:** Campo para números.
- **date:** Campo para escolher uma data.
- **radio:** Botão de rádio, permite selecionar apenas uma opção de um grupo.
- **checkbox:** Caixa de seleção, permite selecionar múltiplas opções.
- **submit:** Botão para enviar o formulário.
- **reset:** Botão para limpar os campos do formulário.
- **button:** Botão personalizado, pode executar JavaScript ao ser clicado.

### Outros Elementos Úteis

- **<select>:** Cria uma lista suspensa (dropdown) com opções.
- **<option>:** Define cada opção dentro de uma lista suspensa.
- **<datalist>:** Sugere opções para um campo de entrada, como um autocomplete.
- **<fieldset>:** Agrupa elementos relacionados dentro de um formulário.
- **<legend>:** Define um título para um <fieldset>.

### Atributos Importantes

- **name:** Atribui um nome a um elemento, usado para identificar os dados enviados no formulário.
- **value:** Define o valor padrão de um elemento.
- **required:** Torna um campo obrigatório.
- **placeholder:** Exibe um texto de dica dentro do campo.
- **disabled:** Desabilita um elemento.
- **readonly:** Impede que o usuário edite um campo.

### Exemplo Básico

```html
<form action="processa_formulario.php" method="post">
  <label for="nome">Nome:</label>
  <input type="text" id="nome" name="nome" required>

  <label for="email">Email:</label>   <input type="email" id="email" name="email">   <button type="submit">Enviar</button>
</form>
```

### Validação de Formulários

A validação de formulários é crucial para garantir a qualidade dos dados enviados. Pode ser feita no lado do cliente (JavaScript) e/ou no lado do servidor (PHP, Python, etc.).

**Validação no cliente:**

- JavaScript pode ser usado para verificar se os campos estão preenchidos, se os dados estão no formato correto, etc.
- Bibliotecas como jQuery facilitam a criação de validações complexas.

**Validação no servidor:**

- O servidor verifica novamente os dados recebidos para garantir a segurança e a integridade.
- Linguagens de programação do lado do servidor oferecem funções para validar dados.

### Envio de Dados

- Os dados de um formulário são enviados para a URL especificada no atributo `action` do elemento `<form>`.
- O método `method` define como os dados serão enviados:
    - **GET:** Os dados são anexados à URL e visíveis na barra de endereço.
    - **POST:** Os dados são enviados no corpo da requisição e não são visíveis na URL.

**Observações:**

- A estrutura e os elementos de um formulário podem variar dependendo da complexidade da aplicação e das necessidades do usuário.
- A acessibilidade é fundamental em formulários. Utilize rótulos claros, ordene os elementos de forma lógica e forneça feedback ao usuário.
- A segurança é outro aspecto importante. Valide os dados do lado do servidor para evitar ataques como injeção de SQL e XSS.

