using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;

namespace Entities
{
    public class Parent
    {
       
        [Key]
        public int ParentId { get; set; }
        [Required]
        [StringLength(50)]
        public string NameMother { get; set; }
        [Required]
        [StringLength(50)]
        public string NameFather { get; set; }
        [Required]
        [StringLength(50)]

        public string PhoneMother { get; set; }
        [Required]
        [StringLength(50)]
        public string PhoneFather { get; set; }
        [Required]
        [StringLength(10)]
        public string Tell { get; set; }
        [StringLength(10)]
        public string AnotherTell { get; set; }
        [EmailAddress]
        public string Email1 { get; set; }
        [EmailAddress]
        public string Email2 { get; set; }
        public virtual ICollection<Child> Children { get; set; } = new List<Child>();
    }
}
