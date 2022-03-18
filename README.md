## Recursos Utilizados no Desenvolvimento da Aplicação:

- Visual Studio 2017
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
- [x] Categorizar por cor
- [x] Aplicar descontos

---

## 🎨 Layout

<a href="https://ibb.co/DWvjkLZ"><img src="https://i.ibb.co/XLKGpVq/layout.png" alt="layout" border="0"></a>

---

### Pré-requisitos

Instale:
[Visual Studio Community 2017](https://www.visualstudio.com/thank-you-downloading-visual-studio/?sku=Community&rel=15&WT.mc_id=javascript-0000-gllemos)

Selecione as seguintes opções na instalação:
<a href="https://ibb.co/dfwfVDF"><img src="https://i.ibb.co/NFdFJK5/recursos-visual-studio.png" alt="recursos-visual-studio" border="0"></a>

## 🚀 Como executar o projeto

1. Execute "CRUD_pedidos.sln" em ".\CRUD-Pedidos-ProvaDev\CRUD_pedidos\CRUD_pedidos.sln" para abrir o projeto no Visual Studio

2. Recriar a DataBase e a tabela no seu pc:

Dentro da pasta "App_Data" delete o arquivo "Pedidos.mdf":

<a href="https://ibb.co/sbwptP6"><img src="https://i.ibb.co/17qYbnd/App-Data-deletando.png" alt="App-Data-deletando" border="0"></a>

Adicione um novo arquivo do tipo "Banco de Dados do SQL Server dentro" da "App_Data" com o nome de "Pedidos.mdf":

<a href="https://ibb.co/bXC6Fw5"><img src="https://i.ibb.co/5LS1kph/Adicionar-novo-Pedidos-mdf.png" alt="Adicionar-novo-Pedidos-mdf" border="0"></a>
<a href="https://ibb.co/r6fL262"><img src="https://i.ibb.co/Njnk2j2/Adicionar-novo-Pedidos-mdf-part2.png" alt="Adicionar-novo-Pedidos-mdf-part2" border="0"></a>

Clique duas vezes no "Pedidos.mdf criado para abrir o BD, e crie uma nova tabela:
<a href="https://imgbb.com/"><img src="https://i.ibb.co/Hh0jzGf/Adicionar-novo-Pedidos-mdf-part3.png" alt="Adicionar-novo-Pedidos-mdf-part3" border="0"></a>

<a href="https://imgbb.com/"><img src="https://i.ibb.co/s970P2N/ADICIONAR-UMA-NOVA-TABELA-NO-BD.png" alt="ADICIONAR-UMA-NOVA-TABELA-NO-BD" border="0"></a>

Copie e cole dentro do T-SQL o código abaixo :

```sql
CREATE TABLE [dbo].[Pedido]
(
    [PedidoId] INT            IDENTITY (1, 1) NOT NULL,
    [nome_produto]          NVARCHAR (100) NULL,
    [valor]  				DECIMAL NULL,
    [data_vencimento]        DATE NULL,
    PRIMARY KEY CLUSTERED ([PedidoId] ASC)
)

```

<a href="https://ibb.co/NWP024L"><img src="https://i.ibb.co/SV8kwLK/Colando-o-sql.png" alt="Colando-o-sql" border="0"></a>

Clique no botão Update:

<a href="https://imgbb.com/"><img src="https://i.ibb.co/vLk88wv/clicando-no-botao-update.png" alt="clicando-no-botao-update" border="0"></a>

Clique no Update Database:

<a href="https://imgbb.com/"><img src="https://i.ibb.co/4pKfvdN/clicando-no-update-database.png" alt="clicando-no-update-database" border="0"></a>

3. Clique no botão "IIS Express"
   <a href="https://ibb.co/wJQVswC"><img src="https://i.ibb.co/PTWKQ94/executar.png" alt="executar" border="0"></a>

Caso de o erro: Erro ao encontrar o arquivo: roslyn\csc.exe

<a href="https://ibb.co/JBr364x"><img src="https://i.ibb.co/tmYLjtZ/ERRo.png" alt="ERRo" border="0"></a>

Use o comando no console do NuGet

```
Install-Package Microsoft.CodeDom.Providers.DotNetCompilerPlatform -Version 2.0.1
```

E caso de outros erros de pacote do NuGet, use o comando abaxo para reinstalar os pacotes do projeto:

```
Update-Package -reinstal
```

---

## Observação:

Tudo funcionando so falta limpar o codigo. -> em andamento ...

## Demonstração:

link youtube-> https://youtu.be/sQi8p3bZ2uI
