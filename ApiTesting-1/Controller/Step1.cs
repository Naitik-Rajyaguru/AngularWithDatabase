using ApiTesting_1.Models;
using ApiTesting_1.Models.Datavalue;
using Microsoft.AspNetCore.Mvc;

namespace ApiTesting_1.Controller
{
    [ApiController]
    [Route("[controller]")]
    public class Step1 : ControllerBase
    {
        [HttpGet]   
        public List<personalData> Get()
        {
            return ForPersonal.getdata();

        }
        [HttpPost]
        public IActionResult Post([FromBody] personalData pd)
        {
            ForPersonal.savedata(pd);

            return Ok(pd);

        }
    }
}
