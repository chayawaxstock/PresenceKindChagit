using BL;
using Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Presence.Controllers
{
    [RoutePrefix("api/hellper")]
    public class HellperController : ApiController
    {
        [Route("GetAllKindergartens")]
        public List<Kindergarten> GetAllKindergartens()
        {
            return ManagerService.GetAllKindergartens();
        }

        [Route("GetAllCities")]
        public HttpResponseMessage GetAllCities()
        {
            return Request.CreateResponse(HttpStatusCode.OK, ManagerService.GetAllCity());
        }

        [Route("GetAllLanguge")]
        public List<Language> GetAllLanguge()
        {
            return ManagerService.GetAllLanguage();
        }

        [Route("GetAllKinds")]
        public List<Kind> GetAllKinds()
        {
            return ManagerService.GetAllKinds();
        }

        [Route("GetAllLayers")]
        public List<Layer> GetAllLayers()
        {
            return ManagerService.GetAllLayers();
        }

        [Route("GetAllBelonging")]
        public List<Belonging> GetAllBelongings()
        {
            return ManagerService.GetAllBelongings();
        }

    }
}
