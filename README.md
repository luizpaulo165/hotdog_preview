# Hotdog Preview Layout
v.0.0.1

Pensando em facilitar o entendimento e navegação dos layouts, criei visualizador de layout **Hotdog**.

Com uma navegação simples e funcional, o cliente pode visualizar e navegar por todas as páginas que forem apresentadas de maneira rápida e prática.

O Designer do projeto deve apenas entender um pouco de html e css básicos, para que possa adaptar o seu layout na visualização que deseja e integrar as páginas do projeto ao menu de navegação.

Então vou fazer um breve tutorial de como cricar o seu preview usando o Hotdog.
Vamos lá! =)

### Entendendo a estrutura do Hotdog

A pasta do plugin é dividida da seguinte maneira:
* Index
* View
* Src

**Index** - É toda a estrutura html base.<br />
**View** - É onde ficarão toda as páginas que serão criadas e o favicon do projeto.<br />
**Src** - São todos as ferramentas nescessárias para que o plugin funcione.

**OBS**: No caso da pasta **src**, ela não será usada para desenvolver os previews.

![entendendo_estrutura](https://cloud.githubusercontent.com/assets/573227/7899756/f10863ae-0706-11e5-8f8e-75b5b762c06b.gif)

### Estrutura da pasta View

Para criarmos as páginas, vamos precisar criar um arquivo .html e ter uma imagem(no formato que você preferir) e que de preferência os arquivos tenham o mesmo nome.
Dentro da pasta **view**, temos três arquivos .html, três images .jpg, e um favicon.png(este não levamos em consideração na montagem da estrutura, ele é apenas o icone do projeto). No qual cada .html possui o mesmo nome das imagens .jpg.

**OBS**: As imagens e o .html não precisam ter necessariamente o mesmo nome. Mas, para manter uma organização e evitar conplicações, surgiro esse tipo de organização.

![pasta_view](https://cloud.githubusercontent.com/assets/573227/7899821/19111bf4-070a-11e5-8433-0f6f2f6bcdf7.gif)

### Criando as View

**Importe** o projeto para o seu editor favorito. No meu caso eu uso o edito [Atom](https://atom.io/), mas existem vários outros muito bons como o [Sublime Text](http://www.sublimetext.com/2), [Notepad++](https://notepad-plus-plus.org/), [Gedit](https://wiki.gnome.org/Apps/Gedit), dentre outros.

Depois que você importou o projeto para o seu editor, agora precisamos criar/editar as páginas do nosso projeto. Eu indico apagar as imagens e os arquivos .html com o nome de projtos, internas e editarmos o arquivo com nome de **home.html** e salvar uma nova imagem com o mesmo nome do arquivo(ex.: home.jpg). Como o home.html já possui a estrutura base implementada, fica mais fácil e rápido criamos a nossa primeira página, mas caso você queira escrever um arquivo do zero, segue a estrutura básica que a sua página deve ter/seguir:

```
<!-- Estilo da página -->
<style type="text/css">
    /* Remove bug body */
    body{
        margin:0;
        padding:0;
    }
    /* Layout da página */
    #hotpage {
        background:url(home.jpg) no-repeat center top;
        width:;/* valor em px,%,em */
        height:;/* valor em px,%,em */
        margin: 0 auto;/* centraliza a div na tela */
    }
</style>
<!-- Estilo da página -->

<div id="hotpage"></div><!-- Div onde o estilo é empregado -->

```
![pasta_view_edit](https://cloud.githubusercontent.com/assets/573227/7899950/4dc699b8-0710-11e5-86e5-a76a77d83613.gif)

### Editando o .html da página

Abra o home.html(ou arquivo que você criou), e agora eremos inserir o estilo que a página receberá e que será apresentado ao cliente. No meu caso, eu irei apenas colocar uma imagem como **background** na div de id **hotpage**. Irei inserir uma largura(width) e altura(height) correspondente ao tamanho da imagem(home.jpg), que no caso é de width=980px e height=1550px(lembrando que esses valorem vão depender do tamanho em que a imagem do layout for exportada).

**Obs**: Para quem tem um pouco mais de intimidade com HTML e CSS, é possível criar uma página interia, e não apenas adicionar uma imagem como background.

![pasta_view_code](https://cloud.githubusercontent.com/assets/573227/7899980/a1b05724-0712-11e5-8c39-c81b7ff0969b.gif)

### Adicionando as páginas no menu

Por último e não menos importante, iremos colocar as páginas criadas no menu de navegação, para que o usuário/cliente possa navegar sem problemas. Mas primeiro, precisamos entende onde e como deve ficar a estrutura do menu de navegação:

```
<nav id="list-menu">
    <a target="iframe-master" href="view/nome do arquivo.html" data-name="Nome que vai aparecer no título da página"></a>
</nav>
```

* Nós iremos acessar o arquivo **index.html** que encontra-se na raiz do projeto;
* Vamos procurar pela div com id **list-menu**;
* Você irá apenas editar os campos **href**(caminho onde a página encontra-se, ou seja, dentro da pasta view) e o **data-name**(Nome que ira aparecer no título da página e nos itens do Menu);
* Salvamos o arquivo index.html, abrimos o mesmo no seu navegador predileto e Badabím! Badabúm! A sua visualização dos previews está pronta.

**Obs**: Modificar o **target** no link, ou qualquer outra tag dentro do aquivo index.html pode danificar o funcionamento do plugin, com tudo, deve-se apenas alterar o arquivo se você souber realmente o que está fazendo.

![menu_index_edit](https://cloud.githubusercontent.com/assets/573227/7900016/cd7ede5e-0715-11e5-90dd-ab626ec55f86.gif)

# BA-DA-BING! BA-DA-BOOM!
Voilà! O seu layout pode ser navegado tranquilamente apenas usando o menu. =D

![menu_index_edit](https://cloud.githubusercontent.com/assets/573227/8660219/073fca1c-2986-11e5-8207-3530c19af9aa.gif)

# Por fim!

Bom! Espero que o plugin possa ajudar vocês. Qualquer dúvida, sugestão ou crítica basta criar um issue(github) que eu responderei o mais rápido que puder e com o maior prazer. \,,/_
