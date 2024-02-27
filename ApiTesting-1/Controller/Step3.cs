using ApiTesting_1.Models;
using ApiTesting_1.Models.Datavalue;
using Microsoft.AspNetCore.Mvc;
using System.Text.Json;

namespace ApiTesting_1.Controller
{
    [ApiController]
    [Route("[controller]")]
    public class Step3 :ControllerBase
    {
        [HttpGet]
        public List<dynamic> Get()
        {
            return ForFinal.getdata();
        }
        [HttpPost]
        public IActionResult Post([FromBody] Root fd)
        {
            ForFinal.savedata(fd);
            //Console.WriteLine(q);
            //DataBase.Main(q);

            //Console.WriteLine(fd.GetType());

            //Navigate to the 'login' and 'password' properties directly using the null - conditional operator
            //string passwordValue = fd.GetProperty("login").GetProperty("password").GetString();
            //Console.WriteLine(passwordValue);

            return Ok(fd);
        }

    }
}
