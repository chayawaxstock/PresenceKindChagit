using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;

namespace Entities
{
    public class Belonging
    {
        [Key]
        public int BelongingId { get; set; }
        [Required]
        [MaxLength(50)]
        public string Name { get; set; }
   
        public virtual ICollection<Kindergarten> Kindergartens { get; set; } = new List<Kindergarten>();
    }
}
