using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Domain.Entity
{
    public abstract class Entity
    {
        private List<string> _ValidationsMessages { get; set; }

        private List<string> ValidationMessage { get { return _ValidationsMessages ?? (_ValidationsMessages = new List<string>()); } }

        protected void ClearValidations()
        {
            ValidationMessage.Clear();
        }

        public string GetValidatationMessage()
        {
            return string.Join(". ", ValidationMessage);
        }

        protected void AddNewValidationMessage(string message)
        {
            ValidationMessage.Add(message);
        }

        public abstract void Validate();

        public bool IsValid
        {
            get { return !ValidationMessage.Any(); }
        }
    }
}
