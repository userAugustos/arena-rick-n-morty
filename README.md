Bom, vou tentar subir esse projeto pro gh-pages, se não for, vou subir no netfly

Eu ainda vou descobrir o por que o github pages simplesmente para de atender meus deploys do nada, maaaas por enquanto só saber que imagens e animações só estão visivéis rodando localmente o projeto, mas todo o funcionamento está deployado [**aqui**](https://useraugustos.github.io/arena-rick-n-morty/), obrigado :)

para rodar o dev na sua máquina é bem simples

### Dependencies
```shell 
cd arena-rnm

pnpm i | npm i | yarn i
```

### Dev Vite

**vá até o arquivo `vite.config.ts` e remova o `base: ''` dentro do `defineConfig`**

_por que??_

Bom, para upar projetos react-vite no gh-pages, preciso configurar o base path desse projeto, como o mesmo da url do gh-page :)
após remover ou comentar, pode rodar o `dev` tranquilamente!

```shell 
pnpm dev | npm run dev | yarn dev
```

**Esse projeto usa o codegen: [docs](https://the-guild.dev/graphql/codegen)** então se quiser fazer alguma alteração nas queries, rode:

```shell 
pnpm run codegen | npm run codegen | yarn codegen
```

##### só fui escrevendo algumas coisas
então, eu preciso escrever pra pensar, por que nesse momento, eu não queria usar nada além do urql e react em si, a documentação é simples como o url mas poderosa, mas eu não domino a ferramenta o suficiente pra não usar um context, nesse momento
eu dei uma pesquisada, e não sei se o presistence resolve, acredito que não.

Sabe aquele momento dev, que você pensa algo, e começa e ai vem uma voz na sua cabeça e fala "por que raios você ta fazendo isso?", bom foi eu, eu não preciso resetar estado nenhum, graphql, só altero a query e ela da refetching, nesse caso, só faço a query completa e altero as variaveis, de acordo com a ação...
simples e limpo, vamos para a estilização

https://codepen.io/pizza3/pen/JjKjbZY acredito que isso mereça uma menção honrosa!

tentando finalizar adicionando o loading do portal, fiquei realmente interessado em como ele fez, vou pegar um png do portal e colocar pra rodar kjk

uma coisa legal seria um `dialog` só para mostrar mais informações sobre o personagem
