# Projeto: CarShowRoom

## Visão Geral

Este projeto consiste na criação de uma aplicação web utilizando ReactJS com Material UI para consumir uma API REST. A aplicação simula uma loja de venda de carros online, onde os usuários podem visualizar as ofertas disponíveis e administrar essas ofertas através de operações CRUD básicas.

## Funcionalidades Principais

1. **Ofertas**
   - Visualizar os carros disponíveis em formato de lista ou grade.
   - Ao clicar em um carro, abrir um modal ou tela detalhada com informações completas do veículo.
   - Incrementar o número de visualizações do veículo ao abrir o modal.

2. **Administração**
   - CRUD de ofertas para administrar as ofertas de carros.
   - Tabela de ofertas com opção de filtro por um campo de busca textual.
   - Editar e excluir ofertas existentes.
   - Adicionar novas ofertas com os seguintes campos obrigatórios: Marca, Modelo, Ano, Preço, Cor, Quilometragem, Placa, Cidade, Fotos (múltiplas) e Data de Cadastro.

## Requisitos de Implementação

- A aplicação deve ser desenvolvida seguindo o conceito "Mobile First", ou seja, deve ser responsiva e otimizada para dispositivos móveis.
- A organização do repositório deve ser clara, seguindo as melhores práticas de estrutura de projeto em React.
- O design da interface e a clareza dos códigos serão avaliados.
- A lógica utilizada para consumir os dados da API (seja uma API criada em PHP ou uma API Fake como JSON-SERVER) deve ser eficiente e bem estruturada.

## Tecnologias Utilizadas

- **Frontend:** ReactJS, Material UI
- **Backend:** API FAKE usando (Json-server)
- **Persistência de Dados:** Banco de dados ou armazenamento adequado para manter as informações das ofertas.

## Executando o Projeto

Para executar o projeto localmente:

1. Clone o repositório.
2. Instale as dependências utilizando `npm install`.
3. Inicie o servidor local com `npm run dev`.
4. Acesse a aplicação em seu navegador através do endereço fornecido pelo servidor local.

## Conclusão

Este projeto visa demonstrar habilidades em desenvolvimento web utilizando ReactJS, Material UI e integração com APIs REST. Siga as orientações acima para garantir uma implementação bem-sucedida e alinhada aos requisitos especificados.

## Links:

[Vercel](car-showroom-puce.vercel.app)  
[Api Json-server](https://json-server-vercel-git-main-pascal-project.vercel.app/api/offers)