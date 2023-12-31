using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Fit_Fusion.Data;
using Fit_Fusion.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Fit_Fusion.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WorkerController : ControllerBase
    {
        // GET: api/Worker
        [HttpGet("/highest/salary")]
        public ActionResult<Worker> GetHiestSalary()
        {
            ClientRepo repo = new ClientRepo();
            return repo.GetWorkerWhitHiestSalaray();
        }
        
        [HttpGet("/lowes/salary")]
        public ActionResult<Worker> GetLowestSalary()
        {
            ClientRepo repo = new ClientRepo();
            return repo.GetWorkerWhitLowestSalaray();
        }
        
        [HttpGet]
        public ActionResult<IEnumerable<Worker>> Get()
        {
            ClientRepo repo = new ClientRepo();
            return repo.GetWorkerStats();
        }
    }
}
