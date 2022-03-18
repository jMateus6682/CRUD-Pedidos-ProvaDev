using CRUD_MVC5_AngularJs.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CRUD_MVC5_AngularJs.Controllers
{
    public class PedidoController : Controller
    {
        #region Método para Listar Pedido - READ

        // GET Pedido/GetPedido
        public JsonResult GetPedido()
        {
            using (var db = new PedidosEntities())
            {
                List<Pedido> listarPedidos = db.Pedidos.ToList();


                return Json(listarPedidos, JsonRequestBehavior.AllowGet);
            }
        }

        #endregion

        #region Método para Adicionar Pedido - CREATE

        //POST Pedido/AdicionarPedido
        [HttpPost]
        public JsonResult AdicionarPedido(Pedido pedido)
        {
            if (pedido != null)
            {
                using (var db = new PedidosEntities())
                {

                    db.Pedidos.Add(pedido);
                    db.SaveChanges();

                    return Json(new { success = true });
                }
            }
            return Json(new { success = false });
        }

        #endregion

        #region Método para Atualizar Pedido - UPDATE

        [HttpPost]
        public JsonResult AtualizarPedido(Pedido pedido)
        {
            using (var db = new PedidosEntities())
            {
                var pedidoAtualizado = db.Pedidos.Find(pedido.PedidoId);

                if (pedidoAtualizado == null)
                {
                    return Json(new { success = false });
                }

                else
                {
                    pedidoAtualizado.nome_produto = pedido.nome_produto;
                    pedidoAtualizado.valor = pedido.valor;
                    pedidoAtualizado.data_vencimento = pedido.data_vencimento;

                    db.SaveChanges();
                    return Json(new { success = true });

                }
            }
        }
        #endregion

        #region Método para dar Desconto - UPDATE

        [HttpPost]
        public JsonResult DarDesconto(Pedido pedido)
        {
            using (var db = new PedidosEntities())
            {
                var estad = Estado(pedido);
                var pedidoAtualizado = db.Pedidos.Find(pedido.PedidoId);
                if (pedidoAtualizado == null || estad==1)  //<---quando arrumar o problema da data trocar o if de baixo por esse que o desconto só vai acontecer com produtos que não estão vencidos
                //if (pedidoAtualizado == null)
                {
                    return Json(new { success = false });
                }

                else
                {
                    pedidoAtualizado.valor -= pedido.valor;

                    db.SaveChanges();
                    return Json(new { success = true });

                }
            }
        }
        #endregion

        #region Método para Excluir Pedido - DELETE

        [HttpPost]
        public JsonResult ExcluirPedido(int id)
        {
            using (var db = new PedidosEntities())
            {
                var pedido = db.Pedidos.Find(id);
                if (pedido == null)
                {
                    return Json(new { success = false });
                }

                db.Pedidos.Remove(pedido);
                db.SaveChanges();

                return Json(new { success = true });
            }
        }
        #endregion

        #region Método para Verificar se o produto é valido/vencido/quase vencido
        [HttpPost]
        public int Estado(Pedido pedido)
        {
            DateTime Agora = DateTime.Now;
            //DateTime DataVencimento = pedido.data_vencimento.GetValueOrDefault();
            DateTime DataVencimento = pedido.data_vencimento;
            // 1= Vencido; 2 = Valido; 3= QuaseVencendo;
            if (DataVencimento < Agora) {
                return 1;
            } else if (DataVencimento > Agora.AddDays(3)) {
                return 2;
            }
            else {
                return 3;
            }
        }
        #endregion
    }
}