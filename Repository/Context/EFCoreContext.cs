using Domain.Entity;
using Domain.Entity.ObjectValue;
using JetBrains.Annotations;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using Repository.Configuration;
using System;
using System.Collections.Generic;
using System.Text;

namespace Repository.Context
{
    public class EFCoreContext : DbContext
    {


        public DbSet<User> User { get; set; }
        public DbSet<Product> Product { get; set; }
        public DbSet<Order> Order { get; set; }
        public DbSet<OrderItem> OrderItem { get; set; }
        public DbSet<PaymentType> PaymentType { get; set; }

        public EFCoreContext(DbContextOptions options) : base(options)
        {

        }
       

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new UserConfiguration());
            modelBuilder.ApplyConfiguration(new ProductConfiguration());
            modelBuilder.ApplyConfiguration(new OrderConfiguration());
            modelBuilder.ApplyConfiguration(new OrderItemConfiguration());
            modelBuilder.ApplyConfiguration(new PaymentTypeConfiguration());


            base.OnModelCreating(modelBuilder);
        }
    }
}
