# EduzzStore
EduzzStore é um ecommerce feito em ReactJS, esse projeto também conta com um BackEnd feito em NodeJS e Banco de Dados MongoDB, pode ser acessado em produção no link: https://eduzzstore.netlify.app/.

## Sobre
Esse projeto usa gerência de estados por meio do Redux e Redux-Saga e navegação através do react-router-dom.

## Observações
A cada vez que um produto é adicionado ao carrinho é verificado em tempo real a disponibilidade do produto em estoque, caso tenha a quantidade do produto desejado em estoque o produto é adicionado ao carrinho, caso contrário é notificado ao usuário que a quantidade solicitada está indisponível.

## Como rodar o projeto
```
# Clone o repositório
$ git clone https://github.com/DausterBarbosa/eduzzstore.git

# Instale as dependências
$ yarn

# Inicie o projeto
$ yarn start
```
### Observações

Antes de rodar o projeto trate de configurar as variáveis de ambiente.<br/>
Crie um arquivo <strong>.env</strong> na raiz do projeto com o conteúdo abaixo e insira o link da API no local indicado, qualquer dúvida consulte o arquivo <strong>.env.example</strong> que mostra como deve ser o formato do arquivo.

```
#BackEnd

REACT_APP_LINK_API="Aqui vai o link da API"
```
## Backend
O Backend dessa aplicação pode ser visto no link: https://github.com/DausterBarbosa/eduzzstore-server.
