using ApiTesting_1.Models;
using ApiTesting_1.Models.Datavalue;
using Microsoft.AspNetCore.Mvc;

namespace ApiTesting_1.Controller
{
    [ApiController]
    [Route("[controller]")]
    public class LogIn : ControllerBase
    {
        [HttpPost]
        public IActionResult Post([FromBody] logInData data)
        {
            string qforcheck = $"select MAX(user.UserEmail=\"{data.Email}\" and user.UserPassword=\"{data.Password}\") as ans  " +
                $"from walkinportal.user";
            Console.WriteLine(qforcheck);   
            bool notvalid = DataBaseValidation.EmailPassword(qforcheck, "walkinportal");
            if (notvalid)
            {
                return BadRequest("Email or passsword not match");
            }
            else
            {
                //ForCheck.savedata(data);
                return Ok(data);
            }
            
            
        }
        [HttpGet]
        public List<logInData> Get()
        {

            return ForCheck.getdata();
        }

    }
}
