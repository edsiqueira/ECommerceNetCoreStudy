using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain.Entity;
using Domain.Interface;
using Microsoft.AspNetCore.Mvc;

namespace WebApp.Controllers
{
 
    [Route("api/[Controller]")]
    public class OrderController : Controller
    {

        private readonly IOrderRepository _orderRepository;

        public OrderController(IOrderRepository orderRepository)
        {
            this._orderRepository = orderRepository;
        }

        public IActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Post([FromBody]Order pOrder )
        {
            try
            {
                if (pOrder == null)
                {
                    return BadRequest("Error in Post Method for Order");
                }
                _orderRepository.Add(pOrder);
                return Ok(pOrder.ID);
            }
            catch (Exception)
            {

                throw;
            }
           
        }
    }
}