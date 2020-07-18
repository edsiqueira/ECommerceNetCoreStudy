using Domain.Entity;
using Domain.Interface;
using Repository.Context;
using System;
using System.Collections.Generic;
using System.Text;

namespace Repository.Repositories
{
    public class OrderRepository : BaseRepository<Order>, IOrderRepository
    {
        public OrderRepository(EFCoreContext EFCoreContext) : base(EFCoreContext)
        {
        }
    }
}
