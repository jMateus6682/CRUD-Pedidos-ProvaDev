/**
 * Arquivo: Controller.js
 * Descrição: Esse arquivo irá conter o código do 'pedidoCtrl' a qual controlará os módulos de
 * 'pedidos'
 */

// Controller - Pedido:
pedidoApp.controller('pedidoCtrl', function ($scope, pedidoService) {

    //retorna o estado do pedido-> 1= Vencido; 2 = Valido; 3= QuaseVencendo;
    function ESTADO(estdata)
    {
        var Agora = new Date();
        Agora = Date.parse(Agora);

        var AgoraMaisTres = new Date();
        AgoraMaisTres.setDate(AgoraMaisTres.getDate() + 3);
        AgoraMaisTres = Date.parse(AgoraMaisTres);
       
        var DataVencimento = estdata;
        DataVencimento = Date.parse(moment(DataVencimento, "DD/MM/YYYY").format("MM/DD/YYYY"));

        if (DataVencimento < Agora) {
            return 1;
        } else if (DataVencimento > AgoraMaisTres) {
            return 2;
        }
        else {
            return 3;
        }
    }

    $scope.getStyle = function (styledata)
    {
        var estado = ESTADO(styledata);
            if (estado == 1) {
                return { 'background-color': 'red' };
            } else if (estado == 2) {
                return { 'background-color': 'green' };
            } else {
                return { 'background-color': 'yellow' };
            }
    }

    //Aqui estamos carregando todos os dados gravados do Pedido quando a página for recarregada:
    carregarPedidos();

    //Método responsável por carregar todos as propriedades do Pedido:
    function carregarPedidos() {
        var listarPedidos = pedidoService.getTodosPedidos();

        listarPedidos.then(function (d)
        {

            //formatando a exibição da data
            var lista = d.data;
            lista.forEach(item => {
                item.data_vencimento = moment(item.data_vencimento).format("DD/MM/YYYY");
            });

            $scope.Pedidos = lista;
            
        },
            function () {
                alert("Ocorreu um erro ao tentar listar todos os pedidos!");
            });
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
            if (d.data.success === true)
            {
                carregarPedidos();
                $scope.limparDados();

            } else { alert("Ocorreu um erro ao tentar adicionar um Novo Pedido!!"); }
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
    $scope.adicionarDesconto = function (pedido)
    {
        $scope.AtualizadoPedidoId = pedido.PedidoId;
        $scope.AtualizadoNome_produto = pedido.nome_produto;
        $scope.AtualizadoValor = '';
        $scope.AtualizadoData_vencimento = pedido.data_vencimento;
        
    }

    //Método responsável por atualizar Pedido pelo Id:
    $scope.atualizarPedidoPorId = function (pedido)
    {
        $scope.AtualizadoPedidoId = pedido.PedidoId;
        $scope.AtualizadoNome_produto = pedido.nome_produto;
        $scope.AtualizadoValor = pedido.valor;
        $scope.AtualizadoData_vencimento = pedido.data_vencimento;
    }


    //Método responsável por resgatar dados para a exclusão do Pedido:
    $scope.excluirPedidoPorId = function (pedido)
    {
        $scope.AtualizadoPedidoId = pedido.PedidoId;
        $scope.AtualizadoNome_produto = pedido.nome_produto;
        $scope.AtualizadoValor = pedido.valor;
        $scope.AtualizadoData_vencimento = pedido.data_vencimento;

    }

    //Método responsável por atualizar dados do Pedido:
    $scope.atualizarPedido = function ()
    {
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
                //alert("Pedido Atualizado com Sucesso!");
                $scope.limparDadosAtualizados();
            }
            else {
                alert("Ocorreu um erro ao tentar atualizar o Pedido!!");
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
                $scope.limparDadosAtualizados();
            }
            else {
                $scope.limparDadosAtualizados();
                alert("Desconto não Realizado: Somente produtos que não estão vencidos podem receber descontos !");
            }
        },
            function () {
                alert("Ocorreu um erro ao tentar adicionar o Desconto!");
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
            }
            else {
                alert("Erro ao excluir o pedido!");
            }
        });
    }

});