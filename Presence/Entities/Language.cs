using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities
{
    public class Language
    {
        [Key]
        public int LanguageId { get; set; }
        [Required]
        [StringLength(50)]
        public string LanguageName { get; set; }
    }
}
