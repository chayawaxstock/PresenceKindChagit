using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;

namespace Entities
{
    public class City
    {
        [Key]
        public int CityId { get; set; }
        [Required]
        [StringLength(50)]
        public string Name { get; set; }
        //[IgnoreDataMember]
        public virtual  ICollection<Area> Areas { get; set; } = new List<Area>();
    }
}
