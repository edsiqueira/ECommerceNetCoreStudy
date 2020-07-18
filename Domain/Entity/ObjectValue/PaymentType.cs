using Domain.Entity.Enum;
using System;
using System.Collections.Generic;
using System.Text;

namespace Domain.Entity.ObjectValue
{
    public class PaymentType
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public string Descricao { get; set; }

        public bool IsPaymentSlip
        {
            get { return ID == (int)PaymentTypeEnum.PaymentSlip; }
        }

        public bool IsCreditCard
        {
            get { return ID == (int)PaymentTypeEnum.CreditCard; }
        }

        public bool IsDeposit
        {
            get { return ID == (int)PaymentTypeEnum.Deposit; }
        }

        public bool IsNotDefined
        {
            get { return ID == (int)PaymentTypeEnum.NotDefined; }
        }
    }
}
