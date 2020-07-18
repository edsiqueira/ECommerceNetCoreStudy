using Domain.Entity;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace Repository.Configuration
{
    public class OrderConfiguration : IEntityTypeConfiguration<Order>
    {
        public void Configure(EntityTypeBuilder<Order> builder)
        {
            builder.HasKey(x => x.ID);
            builder.Property(x => x.OrderDate).IsRequired();
            builder.Property(x => x.EstimatedSendDate).IsRequired();
            builder.Property(x => x.CEP).IsRequired().HasMaxLength(10);
            builder.Property(x => x.City).IsRequired().HasMaxLength(50);
            builder.Property(x => x.State).IsRequired().HasMaxLength(50);
            builder.Property(x => x.Address).IsRequired().HasMaxLength(50);
            builder.Property(x => x.Number).IsRequired().HasMaxLength(10);


        }
    }
}
