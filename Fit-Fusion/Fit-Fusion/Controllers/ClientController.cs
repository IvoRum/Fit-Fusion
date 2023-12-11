using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Fit_Fusion.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Fit_Fusion.Controllers
{
    [Route("api/client")]
    [ApiController]
    public class ClientController : Controller
    {
        // GET: Client
        [HttpGet]
        public ActionResult<string> Index()
        {
            ClientRepo clientRepo = new ClientRepo();
            return clientRepo.getClientInfo();
        }
    }
}