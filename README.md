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

<table>
<thead>
<tr><th colspan="4">Pedido</th></tr>
</thead>
<tbody>
<tr>
<td>nome_produto</td>
<td>string</td>
</tr>
<tr>
<td>valor</td>
<td>decimal</td>
</tr>
<tr>
<td>data_vencimento</td>
<td>date</td>
</tr>
</tbody>
</table>

Na listagem dos pedidos o sistema deve categorizar por cores os pedidos que:

1. Estão vencendo
   Pedidos que a data de vencimento são menores que a data atual;
2. Estão quase vencendo
   Pedidos que a data de vencimento está com 3 dias para vencer;
3. Estão validos
   Pedidos em que a data de vencimento é maior que 3 dias da data atual;

O candidato também terá que desenvolver uma tela para adicionar descontos no valor do pedido. Somente os pedidos que não estão vencidos podem receber descontos.

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

1. Execute "script SQL de criação da tabela - Pedido.sql" em "\CRUD-Pedidos-ProvaDev\CRUD_pedidos\script SQL de criação da tabela - Pedido.sql" para criar automaticamente a tabela Pedido no BD

2. Se der certo pula para o item 3.

Caso de problema na criação automática da tabela siga os passos asseguir para criar no projeto a tabela manualmente:

Dentro da pasta "App_Data" delete o arquivo "Pedidos.mdf":

<a href="https://ibb.co/sbwptP6"><img src="https://i.ibb.co/17qYbnd/App-Data-deletando.png" alt="App-Data-deletando" border="0"></a>

Adicione um novo arquivo do tipo "Banco de Dados do SQL Server dentro" da "App_Data" com o nome de "Pedidos.mdf":

<a href="https://ibb.co/bXC6Fw5"><img src="https://i.ibb.co/5LS1kph/Adicionar-novo-Pedidos-mdf.png" alt="Adicionar-novo-Pedidos-mdf" border="0"></a>
<a href="https://ibb.co/r6fL262"><img src="https://i.ibb.co/Njnk2j2/Adicionar-novo-Pedidos-mdf-part2.png" alt="Adicionar-novo-Pedidos-mdf-part2" border="0"></a>

Clique duas vezes no "Pedidos.mdf criado para abrir o BD e cria uma nova tabela:
<a href="https://imgbb.com/"><img src="https://i.ibb.co/Hh0jzGf/Adicionar-novo-Pedidos-mdf-part3.png" alt="Adicionar-novo-Pedidos-mdf-part3" border="0"></a>

<a href="https://imgbb.com/"><img src="https://i.ibb.co/s970P2N/ADICIONAR-UMA-NOVA-TABELA-NO-BD.png" alt="ADICIONAR-UMA-NOVA-TABELA-NO-BD" border="0"></a>

Copie e cole dentro do T-SQL o código abaixo :

<p> CREATE TABLE [dbo].[Pedido] (                               </p>
<p>    [PedidoId]        INT            IDENTITY (1, 1) NOT NULL, </p>
<p>    [nome_produto]    NVARCHAR (100) NULL, </p>
<p>    [valor]           DECIMAL (18)   NULL, </p>
<p>    [data_vencimento] DATE           NULL, </p>
<p>    PRIMARY KEY CLUSTERED ([PedidoId] ASC) </p>
<p>);

<a href="https://ibb.co/NWP024L"><img src="https://i.ibb.co/SV8kwLK/Colando-o-sql.png" alt="Colando-o-sql" border="0"></a>

Clique no botão Update:

<a href="https://imgbb.com/"><img src="https://i.ibb.co/vLk88wv/clicando-no-botao-update.png" alt="clicando-no-botao-update" border="0"></a>

Clique no Update Database:

<a href="https://imgbb.com/"><img src="https://i.ibb.co/4pKfvdN/clicando-no-update-database.png" alt="clicando-no-update-database" border="0"></a>

3. Execute "CRUD_pedidos.sln" em ".\CRUD-Pedidos-ProvaDev\CRUD_pedidos\CRUD_pedidos.sln" para abrir o projeto no Visual Studio

4. Clique no botão "IIS Express"
   <a href="https://ibb.co/wJQVswC"><img src="https://i.ibb.co/PTWKQ94/executar.png" alt="executar" border="0"></a>

---

## 😢 Observação:

Devido a um problema na conversão do formato DateTime para uma string formatada ("dd/MM/yyyy") o formato de exibição das datas ficou errado:

<a href="https://imgbb.com/"><img src="https://i.ibb.co/qM225kw/formato-errado.png" alt="formato-errado" border="0"></a>

Consequentemente quebrou a função de definir a cor do background de acordo com o estado, porque o Pedido.data_vencimento no formato estranho como na imagem acima, ao converter esta chegando na função como "01/01/0001", mesmo no banco de dados mostrando a data certa, sendo assim, sempre retornando como produto vencido.

<a href="https://imgbb.com/"><img src="https://i.ibb.co/YPVZxsK/fun-o-estado.png" alt="fun-o-estado" border="0"></a>

De tabela quebrou tambem a parte da função de dar desconto que bloqueia o adicionar o desconto para um produto vencido, deixei comentado essa parte.

<a href="https://ibb.co/Hp4kYKk"><img src="https://i.ibb.co/zHx0bm0/fun-o-Dar-Desconto.png" alt="fun-o-Dar-Desconto" border="0"></a>

## Demonstração:

<a href="https://ibb.co/D1fXN8g"><img src="https://i.ibb.co/2F32wsY/giff.gif" alt="giff" border="0"></a>
