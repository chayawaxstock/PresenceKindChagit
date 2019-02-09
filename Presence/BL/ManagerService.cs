using DAL;
using Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL
{
    public class ManagerService
    {

        public static List<City> AddCity()
        {
            return new List<City>();
            // return DB.Cities.ToList();
        }

        public static List<City> GetAllCity()
        {
            using (MyContext DB = new MyContext())
            {
                List<City> cities=DB.Cities.ToList();
                cities.ForEach(p =>
                {
                    p.Areas = GetAreasById(p.CityId);
                });
                return cities; 
            }
        }

        public static List<Kind> GetAllKinds()
        {
            using (MyContext DB = new MyContext())
            {
                return DB.Kinds.ToList();
            }
        }

        public static List<Area> GetAreasById(int id)
        {
            using (MyContext DB = new MyContext())
            {
                return DB.Areas.Where(p=>p.CityId==id).ToList();
            }
        }

        public static List<Language> GetAllLanguage()
        {
            using (MyContext DB = new MyContext())
            {
                return DB.Languages.ToList();
            }

        }

        public static List<Kindergarten> GetAllKindergartens()
        {
            using (MyContext db = new MyContext())
            {
                return db.Kindergartens.ToList();
            }
        }

        public static List<Layer> GetAllLayers()
        {
            using (MyContext db = new MyContext())
            {
                List<Layer>layers=db.Layers.ToList();
                layers.ForEach(p =>
                {
                    p.Kindergartens = null;
                });
                return layers;
            }
        }

        public static List<Belonging> GetAllBelongings()
        {
            using (MyContext DB = new MyContext())
            {
                return DB.Belongings.ToList();
            }
        }

        public static List<Layer> GetAllLayer()
        {
            using (MyContext DB = new MyContext())
            {
                return DB.Layers.ToList();
            }

        }

        public static List<Child> GetChildrenInkindergarden(int kindergardenId)
        {
            using (MyContext DB = new MyContext())
            {
                return DB.Children.Where(p => p.KindergartenChildren.First(pp => pp.KindergartenId == kindergardenId) != null).ToList();
            }

        }

      

    }
}
