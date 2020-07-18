using System;
using System.Collections.Generic;
using System.Text;

namespace Domain.Entity
{
    public class Product : Entity
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public double Value { get; set; }

        public string FileName { get; set; }

        public override void Validate()
        {
            if (String.IsNullOrEmpty(Name))
                AddNewValidationMessage("Order must have OrderItem");
        }
    }
}
