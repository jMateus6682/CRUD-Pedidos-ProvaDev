## Recursos Utilizados no Desenvolvimento da Aplicação:

- Visual Studio 2017 -
- Asp.NET MVC 5
- Entity Framework 5.0 (ADO.NET Entity Data Model)
- .NET Framework 4.5.2
- AngularJs 1.6.4
- Bootstrap 3

## 💻 Sobre o projeto

Prova Prática - Desenvolvedor (UCDB)

O candidato deverá desenvolver um CRUD para cadastrar pedidos de pagamentos para produtos.
Os produtos possuem os seguintes atributos:

| Pedido |
| nome_produto | string |
| valor | decimal |
| data_vencimento| date |

Na listagem dos pedidos o sistema deve categorizar por cores os pedidos que:

1. Estão vencendo
   Pedidos que a data de vencimento são menores que a data atual;
2. Estão quase vencendo
   Pedidos que a data de vencimento está com 3 dias para vencer;
3. Estão validos
   Pedidos em que a data de vencimento é maior que 3 dias da data atual;

## O candidato também terá que desenvolver uma tela para adicionar descontos no valor do pedido. Somente os pedidos que não estão vencidos podem receber descontos.

## ⚙️ Funcionalidades

- [x] CRUD de pedidos
- [ ] Categorizar por cor
- [x] Aplicar descontos

---

## 🎨 Layout

<a href="https://ibb.co/jLx9R9k"><img src="https://i.ibb.co/mHYr8r5/layot.png" alt="layout" border="0"></a>

---

### Pré-requisitos

Instale:
[Visual Studio Community 2017](https://www.visualstudio.com/thank-you-downloading-visual-studio/?sku=Community&rel=15&WT.mc_id=javascript-0000-gllemos)
Selecione as seguintes opções na instalação:
<a href="https://ibb.co/dfwfVDF"><img src="https://i.ibb.co/NFdFJK5/recursos-visual-studio.png" alt="recursos-visual-studio" border="0"></a>

## 🚀 Como executar o projeto

1. Execute "script SQL de criação da tabela - Pedido.sql" para criar a tabela Pedido no SQL server
2. Execute "CRUD_pedidos.sln" para abrir o projeto no Visual Studio
3. Clique no botão "IIS Express"
   <a href="https://ibb.co/wJQVswC"><img src="https://i.ibb.co/PTWKQ94/executar.png" alt="executar" border="0"></a>

---
