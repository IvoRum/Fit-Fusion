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
    public class BalanceController : ControllerBase
    {
        
        [HttpGet]
        public ActionResult<IEnumerable<Balance>> Get()
        {
            ClientRepo repo = new ClientRepo();
            return repo.GetBalance();
            //return new string[] { "value1", "value2" };
        }
        
        [HttpGet("/daylyVisistation")]
        public ActionResult<IEnumerable<DaylyVisitation>> GetDaylyVisistation()
        {
            ClientRepo repo = new ClientRepo();
            return repo.GetDaylyOtchet();
        }
    }
}
