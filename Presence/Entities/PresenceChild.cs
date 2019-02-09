using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;

namespace Entities
{
    public class PresenceChild
    {

        [Key]
        public int PresenceChildId { get; set; }
        [Required]
        public int KindergartenChildId { get; set; }
        public virtual KindergartenChild KindergartenChild { get; set; } 
        public DateTime DateTime { get; set; } = DateTime.Now;
    }
}
