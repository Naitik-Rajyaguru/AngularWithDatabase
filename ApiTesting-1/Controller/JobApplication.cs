using ApiTesting_1.Models;
using ApiTesting_1.Models.Datavalue;
using Microsoft.AspNetCore.Mvc;

namespace ApiTesting_1.Controller
{
    [ApiController]
    [Route("[controller]")]
    public class JobApplication : ControllerBase
    {
        [HttpGet]   
        public List<dynamic> Get()
        {
            return JobApply.getdata();
        }
        [HttpPost]
        public IActionResult Post([FromBody] JobApplyData jd)
        {
            JobApply.savedata(jd);
            return Ok(jd);
        }
    }
}
