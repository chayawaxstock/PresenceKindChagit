using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;

namespace Entities
{
    public class Response
    {
        [Key]
        public int ResponseId { get; set; }
        [Required]
        public int KindergartenChildId { get; set; }
    
        public virtual KindergartenChild KindergartenChild { get; set; }
        [Required]
        [StringLength(50)]
        public string Header { get; set; }
        [Required]
        [StringLength(200)]
        public string Description { get; set; }
        public DateTime DateTime { get; set; } = DateTime.Now;
        public bool Status { get; set; } = false;
    }
}
