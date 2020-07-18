using System;
using System.Collections.Generic;
using System.Text;

namespace Domain.Entity
{
    public class OrderItem : Entity
    {
        public int ID { get; set; }
        public int ProductID { get; set; }
        public int Quantity { get; set; }

        public override void Validate()
        {
            if (Quantity == 0)
                AddNewValidationMessage("Order must have OrderItem");
        }
    }
}
