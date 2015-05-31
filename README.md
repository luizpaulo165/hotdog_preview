# Hotdog Preview Layout
v.1.0.1

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
        width: 980px;
        height:1550px;
        margin: 0 auto;
    }
</style>
<!-- Estilo da página -->

<div id="hotpage"></div><!-- Div onde o estilo é empregado -->

```
![pasta_view_edit](https://cloud.githubusercontent.com/assets/573227/7899950/4dc699b8-0710-11e5-86e5-a76a77d83613.gif)
