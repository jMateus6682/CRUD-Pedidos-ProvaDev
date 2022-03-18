/**
 * Arquivo: Controller.js
 * Descrição: Esse arquivo irá conter o código do 'pedidoCtrl' a qual controlará os módulos de
 * 'pedidos'
 */

// Controller - Pedido:
pedidoApp.controller('pedidoCtrl', function ($scope, pedidoService) {


    /* 
    //Por algum motivo a converção do formato da data não esta funcionado 
    //e consequentemente quebrando a função do desconto e da cor
    // Quando arrumar o problema com a data descomentar getStyle 
    //e trocar no index o ng-style do data_vencimento para ng-style="getStyle(func)"
    $scope.getStyle = function (Pedido) {
        var estad = pedidoService.getEstado(Pedido);
            if (estad == 1) {
                return { 'background-color': 'red' };
            } else if (estad == 2) {
                return { 'background-color': 'green' };
            } else {
                return { 'background-color': 'yellow' };
            }
        return { 'background-color':'red' };
    }
    */

    // usando essa função para definir a cor enquanto nao arrumei o problema da data
    function DefinirCor() {
        $scope.setarCor = 'DodgerBlue';
    }
    /*
    //string para data
    function toDate(dateStr) {
        var parts = dateStr.split("/");
        return new Date(parts[2], parts[1] - 1, parts[0]);
    }
    */

    //Aqui estamos carregando todos os dados gravados do Pedido quando a página for recarregada:
    carregarPedidos();

    //Método responsável por carregar todos as propriedades do Pedido:
    function carregarPedidos() {
        var listarPedidos = pedidoService.getTodosPedidos();

        listarPedidos.then(function (d) {
            //arrumando a exibição da data
            var lista = d.data;
            var DataVencimento;
            lista.forEach(item => {
                item.data_vencimento = moment(item.data_vencimento).format("DD/MM/YYYY");
            });
            /*
             
            if (DataVencimento < Agora) {
                return 1;
            } else if (DataVencimento > Agora.AddDays(3)) {
                return 2;
            }
            else {
                return 3;
            }
             */
            DefinirCor();
            //se tudo der certo:
            $scope.Pedidos = lista;
            
        },
            function () {
                alert("Ocorreu um erro ao tentar listar todos os pedidos!");
            });
    }

    //teste converter data 
    $scope.ConverterJsonDateToJavascriptDate =function (data) {
        return data.format("dd/MM/yyyy");
        
    }

    //Método responsável por adicionar cada propriedade de um Novo Pedido:
    $scope.adicionarPedido = function () {

        var pedido = {
            pedidoId: $scope.pedidoId,
            nome_produto: $scope.nome_produto,
            valor: $scope.valor,
            data_vencimento: $scope.data_vencimento
        };

        var adicionarInfos = pedidoService.adicionarPedido(pedido);

        adicionarInfos.then(function (d) {
            if (d.data.success === true) {
                carregarPedidos();
                alert("Pedido Adicionado com Sucesso!");

                $scope.limparDados();
            } else { alert("Pedido não Adicionado!"); }
        },
            function () {
                alert("Ocorreu um erro ao tentar adicionar um Novo Pedido!");
            });
    }

    //Limpar os campos após inserir os dados no db://Limpar os campos após inserir os dados no db:
    $scope.limparDados = function () {
        $scope.pedidoId = "";
        $scope.nome_produto = "";
        $scope.valor = "";
        $scope.data_vencimento = "";
    }

    //Limpar os campos no painel do desconto:
    $scope.adicionarDesconto = function (pedido) {
        $scope.AtualizadoPedidoId = pedido.PedidoId;
        $scope.AtualizadoNome_produto = pedido.nome_produto;
        $scope.AtualizadoValor = '';
        $scope.AtualizadoData_vencimento = pedido.data_vencimento;
        
    }

    //Método responsável por atualizar Pedido pelo Id:
    $scope.atualizarPedidoPorId = function (pedido) {

        $scope.AtualizadoPedidoId = pedido.PedidoId;
        $scope.AtualizadoNome_produto = pedido.nome_produto;
        $scope.AtualizadoValor = pedido.valor;
        $scope.AtualizadoData_vencimento = pedido.data_vencimento;
    }


    //Método responsável por resgatar dados para a exclusão do Pedido:
    $scope.excluirPedidoPorId = function (pedido) {
        $scope.AtualizadoPedidoId = pedido.PedidoId;
        $scope.AtualizadoNome_produto = pedido.nome_produto;
    }

    //Método responsável por atualizar dados do Pedido:
    $scope.atualizarPedido = function () {
        var pedido = {
            PedidoId: $scope.AtualizadoPedidoId,
            Nome_produto: $scope.AtualizadoNome_produto,
            Valor: $scope.AtualizadoValor,
            Data_vencimento: $scope.AtualizadoData_vencimento
        };
        var atualizarInfos = pedidoService.atualizarPedido(pedido);
        atualizarInfos.then(function (d) {
            if (d.data.success === true) {
                carregarPedidos();
                alert("Pedido Atualizado com Sucesso!");
                $scope.limparDadosAtualizados();
            }
            else {
                alert("Pedido não Atualizado");
            }
        },
            function () {
                alert("Ocorreu um erro ao tentar atualizar o Pedido!");
            });
    }

    //Método responsável por dar desconto:
    $scope.darDesconto = function () {
        var pedido = {
            PedidoId: $scope.AtualizadoPedidoId,
            Nome_produto: $scope.AtualizadoNome_produto,
            Valor: $scope.AtualizadoValor,
            Data_vencimento: $scope.AtualizadoData_vencimento
        };
        var descontar = pedidoService.darDesconto(pedido);
        descontar.then(function (d) {
            if (d.data.success === true) {
                carregarPedidos();
                alert("Desconto realizado com sucesso!");
                $scope.limparDadosAtualizados();
            }
            else {
                alert("Desconto não Realizado: Somente produtos que não estão vencidos podem receber descontos !");
            }
        },
            function () {
                alert("Ocorreu um erro ao tentar atualizar o Pedido!");
            });
    }

    //Método responsável por Limpar os Dados depois de Atualizar Pedido:
    $scope.limparDadosAtualizados = function () {
        $scope.AtualizadoPedidoId = '';
        $scope.AtualizadoNome_produto = '';
        $scope.AtualizadoValor = '';
        $scope.AtualizadoData_vencimento = '';
    }

    //Método responsável por excluir o Pedido pelo Id:
    $scope.excluirPedido = function (AtualizadoPedidoId) {

        var excluirInfos = pedidoService.excluirPedido($scope.AtualizadoPedidoId);
        excluirInfos.then(function (d) {

            if (d.data.success === true) {
                carregarPedidos();

                alert("Pedido excluído com Sucesso!");
            }
            else {
                alert("Pedido não excluído!");
            }
        });
    }

});