using Domain.Entity.ObjectValue;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace Repository.Configuration
{
    public class PaymentTypeConfiguration : IEntityTypeConfiguration<PaymentType>
    {
        public void Configure(EntityTypeBuilder<PaymentType> builder)
        {
            builder.HasKey(x => x.ID);
            builder.Property(x => x.Name).IsRequired().HasMaxLength(50);
            builder.Property(x => x.Descricao).IsRequired().HasMaxLength(50);


            builder.HasData(new PaymentType(){
                ID = 1,
                Name = "Payment slip",
                Descricao = "Generate a payment slip"
            }, new PaymentType(){
                ID = 2,
                Name = "Credit card",
                Descricao = "Make your payment with Credit card"
            }, new PaymentType(){
                ID = 3,
                Name = "Deposit",
                Descricao = "Realize deposit to payment"
            });
        }
    }
}
