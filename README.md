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
- **Backend:** API REST criada em PHP ou API Fake (ex: JSON-SERVER)
- **Persistência de Dados:** Banco de dados ou armazenamento adequado para manter as informações das ofertas.

## Estrutura do Projeto
meu-projeto/
│
├── src/
│ ├── components/
│ │ ├── CarCard.jsx
│ │ ├── CarGrid.jsx
│ │ ├── CarList.jsx
│ │ ├── Structure/
│ │ │ ├── 
│ │ │ ├── navbar.jsx
│ │ │ ├── offerForm.jsx
│ │ │ ├── offerTable.jsx
│ │ └ └── banner.jsx
│ │
│ ├── pages/
│ │ ├── admin.jsx
│ │ ├── home.jsx
│ │ ├── Login.jsx
│ │ └── offers.jsx
│ │
│ ├── App.jsx
│ ├── main.jsx
│ └── styles.css
│
├── README.md
├── package.json
├── index.html
├── postcss.config.cjs
├── tailwind.config.js
└── vite.config.js
