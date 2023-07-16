# Card Creator App

Este é um projeto Angular para criar e visualizar cartas personalizadas. A aplicação permite criar cartas com nome, imagem e atributos de força, inteligência e beleza. As cartas são exibidas em uma lista abaixo do formulário de criação.

## Funcionalidades

- Simula uma validação de login.
- Criar cartas com nome, imagem e atributos de força, inteligência e beleza.
- Validar as seguintes regras:
  - O nome deve ter no máximo 10 letras.
  - A soma dos atributos de força, inteligência e beleza deve ser no máximo 21.
  - Não é permitido criar uma carta sem nome ou imagem.
- Exibir mensagens de erro ao violar as regras de validação.
- Salvar as cartas criadas no armazenamento local (localStorage).
- Visualizar a lista de cartas criadas.

## Instalação

1. Certifique-se de ter o Node.js instalado em seu sistema.
2. Faça o download ou clone o repositório deste projeto.
3. Abra o terminal e navegue até o diretório do projeto.
4. Execute o comando `npm install` para instalar as dependências do projeto.

## Execução

- Para executar o projeto em um servidor de desenvolvimento, execute o comando `ng serve` no terminal. Em seguida, abra o navegador e acesse `http://localhost:4200`.
- A lógica de validação de login está comentada no arquivo login.component.ts, mas como não subi um banco de dados, o login deve ser feito com o username: 'admin' e a senha: 'senha123'
- Para executar os testes, execute o comando `ng test` no terminal.

## Contribuição

Contribuições são bem-vindas! Se você tiver sugestões de melhorias, correções de bugs ou novas funcionalidades, sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto está licenciado sob a licença [MIT](https://opensource.org/licenses/MIT).
