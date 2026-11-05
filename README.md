# Brasil em Foco

Site acadêmico sobre cultura, paisagens e regiões brasileiras, desenvolvido para praticar HTML, CSS e JavaScript.

## Objetivo e contexto

Organizar conteúdos sobre o Brasil em uma página acessível pelo navegador, aplicando navegação por seções, identidade visual inspirada na bandeira brasileira e interações com JavaScript.

A atividade original envolveu adicionar um item ao menu, criar a seção correspondente e adaptar o tema visual do site.

## Tecnologias utilizadas

- HTML5: estrutura e conteúdo.
- CSS3: estilos, animações e adaptação a diferentes telas.
- JavaScript: menu, janelas de detalhes e interações.
- SVG: ilustrações locais.

Não utiliza frameworks, banco de dados ou bibliotecas externas.

## Funcionalidades

- Menu adaptado para telas menores.
- Navegação pelas seções da página.
- Cartões sobre Brasília, Amazônia e cultura brasileira.
- Janelas com informações dos cartões.
- Seção Brasil Hoje com consulta simples de temas.
- Botão para voltar ao topo.
- Tela inicial de carregamento.

## Como executar

1. Clone o repositório:

   ```bash
   git clone https://github.com/igorzk2/brasil-em-foco.git
   ```

2. Abra a pasta `brasil-em-foco`.
3. Abra o arquivo `index.html` em um navegador.

Como alternativa, utilize **Code → Download ZIP**, extraia os arquivos e abra `index.html`.

Não é necessário instalar dependências. Mantenha a pasta `assets` junto dos arquivos HTML, CSS e JavaScript para carregar as imagens.

## Como utilizar

- Use o menu para navegar pelas seções.
- Toque em **Ver detalhes** nos cartões para abrir mais informações.
- Feche os detalhes pelo botão de fechar ou clicando fora da janela.
- Na seção **Brasil Hoje**, digite um tema e toque em **Pesquisar**.

## Organização dos arquivos

- `index.html`: página principal.
- `style.css`: estilos e adaptação de layout.
- `script.js`: interações.
- `assets/`: ilustrações SVG locais.
- `README.md`: documentação.

## Limitações

A pesquisa compara o texto digitado com uma lista de palavras-chave e exibe uma mensagem. Não consulta a internet nem apresenta uma lista de resultados.

O conteúdo é estático, sem painel administrativo ou armazenamento de dados.
