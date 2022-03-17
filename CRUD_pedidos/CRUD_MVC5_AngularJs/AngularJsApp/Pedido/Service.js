/**
 * Arquivo: Service.js
 * Descrição: arquivo responsável por carregar os dados via $http - do MVC Controller
 * (onde transformará os dados em Json)
 */

pedidoApp.service('pedidoService', function ($http) {

    //Método responsável por Listar todos os Pedidos: READ
    this.getTodosPedidos = function () {

        return $http.get("/Pedido/GetPedido");
    }

    //Método responsável por mostrar o estado do pedido de acordo com a data: READ
    this.getEstado = function (pedido) {

        var request = $http({
            method: 'post',
            url: '/Pedido/Estado',
            data: pedido
        });

        return request;
    }

    //Método responsável por Adicionar Pedido: CREATE
    this.adicionarPedido = function (pedido) {

        var request = $http({
            method: 'post',
            url: '/Pedido/AdicionarPedido',
            data: pedido
        });

        return request;
    }

    //Método responsável por Atualizar Pedido Por Id: Update
    this.atualizarPedido = function (pedido) {

        var requestAtualizado = $http({
            method: 'post',
            url: '/Pedido/AtualizarPedido',
            data: pedido
        });
        return requestAtualizado;
    }

    //Método responsável por dar desconto: Update
    this.darDesconto = function (pedido) {

        var requestDescontado = $http({
            method: 'post',
            url: '/Pedido/DarDesconto',
            data: pedido
        });
        return requestDescontado;
    }

    //Método responsável por Excluir Pedido Por Id: Delete
    this.excluirPedido = function (AtualizadoPedidoId) {

        return $http.post('/Pedido/ExcluirPedido/' + AtualizadoPedidoId);
    }
});