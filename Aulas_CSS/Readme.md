# 📘INTRODUÇÃO AO CSS

**Cascading Style Sheets (CSS)** - Folha de estilo em cascata, é um mecanismo para adicionar estilos a um documento web (HTML);

Determina como deve ser o layout de uma página e como os elementos do site deve ser;

Criado em 1994, 1995 o CSS1 foi desenvolvido pela W3C;

Atualmente está na versão CSS3;

É uma linguagem de estilos;

Não é uma linguagem de programação;

Não é uma linguagem de marcação;

*Pode criar:*

- animações
- layouts e estilizações de paginas web
- filtros
- contadores
- formas geométricas e desenhos

## Propriedades e valores

**Propriedade →** é uma característica de um elemento do HTML (cor de fundo, largura, altura, espaçamento, etc).

**Valor →** define o resultado de uma propriedade e como o navegador deve exibir o estilo daquele elemento.

***EXEMPLO:***

```css
/*propriedade: valor;*/
background:red;
color: white;
```

## Formas de declaração do CSS

### ⇒ Não permitem reutilização do estilo para outras páginas

**CSS Inline:** adicionamos o codigo CSS utilizando o atributo *style* dentro das tags HTML, elemento por elemento. ⇒ essa forma não é muito recomendada nem usada. Dificulta manutenção e não torna muito reutilizável. 

*Cuidado!!! Tem mais prioridade em relação as outras formas, ele sobrescreve o estilo anterior.*

**CSS Interno:** código CSS é adicionado dentro da tag <head> da página HTML. Dentro da tag <head> adicionamos outra tag, a <style>, e colocamos as regras CSS nessa área.

### ⇒ Permite reutilização do estilo para outras páginas

**CSS Externo:** é criado um arquivo com a extensão .css com todas as regras CSS que queremos aplicar e esse arquivo é referenciado no HTML da página através da tag <link>.

### Depurando o CSS

O debug é uma forma de identificar problemas no código-fonte de uma aplicação e entender seu comportamento.

Abrindo o Dev Tools do Google Chrome:

- segundo botão do mouse → inspecionar;
- CTRL + SHIFT + I
- CTRL + SHIFT + C;
- F12