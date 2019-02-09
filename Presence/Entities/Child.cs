using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;

namespace Entities
{
    public class Child
    {
        [Key]
        public int ChildId { get; set; }
        [Required]
        [StringLength(50)]
        public string FirstName { get; set; }
        [Required]
        [StringLength(50)]
        public string LastName { get; set; }
        [Required]
        [StringLength(10)]
        public string Password { get; set; }
        [Required]
        [StringLength(50)]
        public string Address { get; set; }     
        public int AreaId { get; set; }
       
        public virtual Area Area { get; set; } //אזור
        [Required]
        [Range(0,120)]
        public float Age { get; set; }
        [Required]
        [StringLength(9)]
        public string Tz { get; set; }
        public string Image { get; set; }
        [Required]
        public int ParentId { get; set; }
       
        public virtual Parent Parent { get; set; }
        
        public virtual ICollection<KindergartenChild> KindergartenChildren { get; set; } = new List<KindergartenChild>();



    }
}
