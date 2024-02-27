using ApiTesting_1.Models;
using ApiTesting_1.Models.Datavalue;
using Microsoft.AspNetCore.Mvc;
using Microsoft.OpenApi.Any;

namespace ApiTesting_1.Controller
{
    [ApiController]
    [Route("[controller]")]
    public class Step2: ControllerBase
    {
        [HttpGet]
        public List<dynamic> Get()
        {
            return ForQualification.getdata();
        }
        [HttpPost]
        public IActionResult Post([FromBody] dynamic qd)
        {
            ForQualification.save(qd);
            return Ok(qd);
        }
    }
}
