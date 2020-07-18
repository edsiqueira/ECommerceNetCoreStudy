using Domain.Entity;
using Domain.Interface;
using Repository.Context;
using System;
using System.Collections.Generic;
using System.Text;

namespace Repository.Repositories
{
    public class ProductRepository : BaseRepository<Product>, IProductRepository
    {
        public ProductRepository(EFCoreContext EFCoreContext) : base(EFCoreContext)
        {

        }
    }
}
