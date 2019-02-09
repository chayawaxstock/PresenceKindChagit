using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;

namespace Entities
{
    public class Alert//התראות
    {
        [Key]
        public int AlertId { get; set; }
        [Required]
        [MaxLength(100)]
        public string Description { get; set; }
        
        public DateTime DateTime { get; set; } = DateTime.Now;
        public int Level { get; set; } = 0;
        public bool Status { get; set; } = false;
        public int KindergartenChildId { get; set; }
        [IgnoreDataMember]
        public virtual KindergartenChild KindergartenChild { get; set; } = new KindergartenChild();


    }
}
