using System;
using System.Collections.Generic;

namespace Domain.Entity
{
    public class User : Entity
    {
        public int ID { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string Name { get; set; }
        public string Lastname { get; set; }
        public bool IsAdministrator { get; set; }
        public virtual ICollection<Order> Order { get; set; }


        public override void Validate()
        {
            if (string.IsNullOrEmpty(Email))
            {
                AddNewValidationMessage("Email is required.");
            }
        }
    }
}
