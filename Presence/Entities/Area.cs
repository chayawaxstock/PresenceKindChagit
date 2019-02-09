using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;

namespace Entities
{
    public class Area
    {
        [Key]
        public int AreaId { get; set; }
        [Required]
        public string AreaName { get; set; }
        public int CityId { get; set; }

        [ForeignKey("CityId")]
        public virtual City City { get; set; } = new City();
        public virtual ICollection<Child> Children { get; set; } = new List<Child>();
    }
}
