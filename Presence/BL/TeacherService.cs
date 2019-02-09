using DAL;
using Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL
{
    public class TeacherService
    {
        public static bool Addkindergarden(Kindergarten kindergarten)
        {
            using (MyContext DB = new MyContext())
            {
                
                DB.Kindergartens.Add(kindergarten);
                DB.SaveChanges();
                return true;
            }
        }

        public static bool AddTeacher(Teacher teacher)
        {
            try
            {
                using (MyContext DB = new MyContext())
                {
                    if (teacher.KindergartenId != 0)
                    {
                        teacher.Kindergarten = null;
                        teacher.Area = null;
                        DB.Teachers.Add(teacher);
                    }

                    else
                    {
                        Addkindergarden(teacher.Kindergarten);
                        teacher.Kindergarten = null;
                        teacher.KindergartenId = DB.Kindergartens.Last().KindergartenId;
                        DB.Teachers.Add(teacher);

                    }
                    DB.SaveChanges();
                    return true;
                }
            }
            catch (Exception)
            {

                return false;
            }
          
        }

        public static bool AddChildrenTokindergarden(int kindergardenId, List<KindergartenChild> children)
        {
            using (MyContext DB = new MyContext())
            {
                DB.KindergartenChildren.AddRange(children);
                DB.SaveChanges();
                return true;
            }
        }

        public static Teacher LogIn(string email,string password)
        {
            using (MyContext DB = new MyContext())
            {
                return DB.Teachers.FirstOrDefault(p => p.Password == password && p.Email == email);
            }
        }
       
    }
}
