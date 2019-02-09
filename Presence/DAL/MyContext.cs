using Entities;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public class MyContext : DbContext
    {
        public MyContext() : base() {

           this.Configuration.LazyLoadingEnabled = false;
          // this.Configuration.ProxyCreationEnabled = false;
        }
        public virtual DbSet<Alert> Alerts { get; set; }
        public virtual DbSet<Area> Areas { get; set; }
        public virtual DbSet<Belonging> Belongings { get; set; }
        public virtual DbSet<Child> Children { get; set; }
        public virtual DbSet<City> Cities { get; set; }
        public virtual DbSet<Kindergarten> Kindergartens { get; set; }
        public virtual DbSet<KindergartenChild> KindergartenChildren { get; set; }
        public virtual DbSet<Language> Languages { get; set; }
        public virtual DbSet<Parent> Parents { get; set; }
        public virtual DbSet<PresenceChild> PresenceChildren { get; set; }
        public virtual DbSet<Response> Responses { get; set; }
        public virtual DbSet<Teacher> Teachers { get; set; }
        public virtual DbSet<Layer> Layers { get; set; }
        public virtual DbSet<Kind> Kinds { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
                
            modelBuilder.Conventions.Remove<OneToManyCascadeDeleteConvention>();
            modelBuilder.Conventions.Remove<ManyToManyCascadeDeleteConvention>();
        }

    }
}
