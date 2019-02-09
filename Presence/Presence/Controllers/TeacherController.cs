using BL;
using Entities;
using Presence.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Presence.Controllers
{
    [RoutePrefix("api/teacher")]
    public class TeacherController : ApiController
    {
        [Route("login")]
        [HttpPost]
        public Teacher Login(TeacherLogIn teacherLogIn)
        {
            return TeacherService.LogIn(teacherLogIn.Email,teacherLogIn.Password);
        }

        [Route("addTeacher")]
        [HttpPost]
        public HttpResponseMessage AddTeacher(Teacher teacher)
        {
            if (TeacherService.AddTeacher(teacher) == true)
                return Request.CreateResponse(HttpStatusCode.Created, teacher);
            return Request.CreateResponse(HttpStatusCode.InternalServerError);
        }
    }
}
