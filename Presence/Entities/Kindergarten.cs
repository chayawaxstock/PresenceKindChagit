
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;

namespace Entities
{
   
    public class Kindergarten
    {
        [Key]
        public int KindergartenId { get; set; }
        [Required]
        [StringLength(50)]
        public string Name { get; set; }
        [Required]
        [StringLength(10)]
        public string Tell { get; set; }
        [Required]
        [StringLength(20)]
        public string Code { get; set; }     
        public int AreaId { get; set; }
        [IgnoreDataMember]
        public virtual Area Area { get; set; }
        [Required]
        [StringLength(50)]
        public string Address { get; set; }
        public int BelongingId { get; set; }
        [IgnoreDataMember]
        public virtual Belonging Belonging { get; set; }//שיכות עירייה פרטי וכו
        [Required]
        [Range(0,120)]
        public int FromAge { get; set; }
        [Required]
        [Range(0,120)]
        public int TillAge { get; set; }
     
        public int LayerId { get; set; }
        [IgnoreDataMember]
        public virtual Layer Layer { get; set; } //שכבת גיל
        public int KindId { get; set; }//סוג גן
        [IgnoreDataMember]
        public virtual Kind Kind { get; set; }
        public int LanguageId { get; set; }
        [IgnoreDataMember]
        public virtual Language Language { get; set; } //שפה
        public TimeSpan FromHour { get; set; }
        public TimeSpan TillHour { get; set; }
        [IgnoreDataMember]
        public virtual ICollection<KindergartenChild> KindergartenChildren { get; set; } = new List<KindergartenChild>();
        [IgnoreDataMember]
        public virtual ICollection<Teacher> Teachers { get; set; } = new List<Teacher>();


    }

    public class Layer
    {
        [Key]
        public int LayerId { get; set; }
        [Required]
        [StringLength(50)]
        public string LayerName { get; set; }
        [IgnoreDataMember]
        public virtual ICollection<Kindergarten> Kindergartens { get; set; }
    }

    public class Kind
    {
        [Key]
        public int KindId { get; set; }
        [Required]
        [StringLength(50)]
        public string KindName { get; set; }
        [IgnoreDataMember]
        public virtual ICollection<Kindergarten> Kindergartens { get; set; } = new List<Kindergarten>();
    }
}
