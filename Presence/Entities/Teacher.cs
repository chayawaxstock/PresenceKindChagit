using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;

namespace Entities
{
    public class Teacher
    {
        [Key]
        public int TeacherId { get; set; }
        [Required]
        [MaxLength(50)]
        public string Name { get; set; }

        [Required]
        [MaxLength(50)]
        public string LastName { get; set; }

        [MaxLength(20)]
        public string Password { get; set; }
        [Required]
        [MaxLength(10)]
        public string Phone { get; set; }
        [Required]
        [MaxLength(10)]
        public string Tell { get; set; }
        public int KindergartenId { get; set; }
   
        public virtual Kindergarten Kindergarten { get; set; }
        [EmailAddress]
        public string Email { get; set; }
        [Range(0,120)]
        public int Age { get; set; }
        public int AreaId { get; set; }

        public virtual Area Area { get; set; }

    }
}
