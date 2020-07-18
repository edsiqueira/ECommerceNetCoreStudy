using Domain.Entity.ObjectValue;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Domain.Entity
{
    public class Order : Entity
    {
        public int ID { get; set; }
        public DateTime OrderDate { get; set; }
        public int UserID { get; set; }
        public virtual User User { get; set; }
        public virtual ICollection<OrderItem> OrderItems { get; set; }
        public DateTime EstimatedSendDate { get; set; }
        public string CEP { get; set; }
        public string State { get; set; }
        public string City { get; set; }
        public string Address { get; set; }
        public string Number { get; set; }
        public int PaymentTypeID { get; set; }
        public virtual PaymentType PaymentType { get; set; }

        public override void Validate()
        {
            if (!OrderItems.Any())
                AddNewValidationMessage("Order must have OrderItem");
        }
    }
}
