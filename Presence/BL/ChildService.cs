using DAL;
using Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL
{
   public class ChildService
    {
        public static int AddChild(Child child)
        {
            using (MyContext DB = new MyContext())
            {
                DB.Children.Add(child);
                DB.SaveChanges();
                DB.Entry(child).GetDatabaseValues();
                return child.ChildId;
            }
        }

        public static bool UpdateImageChild(int childId,string image)
        {
            using (MyContext DB = new MyContext())
            {
                DB.Children.Find(childId).Image = image;
                DB.SaveChanges();
                return true;
            }
        }

    }
}
