//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace GoiQuaTet.Web.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class DeliveryChargeDetail
    {
        public int Id { get; set; }
        public int PolicyId { get; set; }
        public int FromKm { get; set; }
        public int ToKm { get; set; }
        public Nullable<int> ChargePerKm { get; set; }
        public Nullable<int> TotalCharge { get; set; }
        public int MinOrderPrice { get; set; }
    }
}
