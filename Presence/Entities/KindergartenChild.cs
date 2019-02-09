using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;

namespace Entities
{
    public class KindergartenChild
    {
        [Key]
        public int KindergartenChildId { get; set; }
        [Required]
        public int ChildId { get; set; }
        [Required]
        public int KindergartenId { get; set; }
        public virtual Child Child { get; set; } 
        public virtual Kindergarten Kindergarten { get; set; } 
        public DateTime Year { get; set; } = DateTime.Now;
        [Required]
        public DateTime TimeComeFrom { get; set; }
        [Required]
        public DateTime TimeComeTill { get; set; }
        [StringLength(50)]
        public string WhoComeTake { get; set; }

        public virtual ICollection<PresenceChild> PresenceChilds { get; set; } = new List<PresenceChild>();
       
        public virtual ICollection<Alert> Alerts { get; set; } = new List<Alert>();
     
        public virtual ICollection<Response> Responses { get; set; } = new List<Response>();
    }
}
