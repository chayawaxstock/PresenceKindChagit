using BL;
using Entities;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;

namespace Presence.Controllers
{
    [RoutePrefix("api/child")]
    public class ChildController : ApiController
    {
        [HttpPost]
        [Route("AddChild")]
        public HttpResponseMessage AddChild([FromBody]Child child)
        {
            int id= ChildService.AddChild(child);
            return Request.CreateResponse(HttpStatusCode.Created,id);
        }

        [HttpPost]
        [Route("UploadImage/{id}")]
        public HttpResponseMessage UploadImage([FromUri] int id)
        {
            string imageName = null;
            var httpRequest = HttpContext.Current.Request;
            //Upload Image
            var postedFile = httpRequest.Files["Image"];
            //Create custom filename
            imageName = new String(Path.GetFileNameWithoutExtension(postedFile.FileName).Take(10).ToArray()).Replace(" ", "-");
            imageName = imageName + DateTime.Now.ToString("yymmssfff") + Path.GetExtension(postedFile.FileName);
            var filePath = HttpContext.Current.Server.MapPath("~/Images/" + imageName);
            postedFile.SaveAs(filePath);

            ChildService.UpdateImageChild(id,filePath);
            return Request.CreateResponse(HttpStatusCode.Created);
        }
    }
}
