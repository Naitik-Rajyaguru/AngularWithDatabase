using ApiTesting_1.Models;
using ApiTesting_1.Models.Datavalue;
using Microsoft.AspNetCore.Mvc;

namespace ApiTesting_1.Controller
{
    [ApiController]
    [Route("[controller]")]
    public class CreateAccount : ControllerBase
    {
        [HttpPost]
        public IActionResult Post([FromBody] logInData data)
        {
            //Console.WriteLine(data.Email);
            //Console.WriteLine(data.Password);
            //Console.WriteLine(data.Remember);
            string checkEmailquery = $"select UserId from zeus_user_registration.personalinformation where personalinformation.Email=\"{data.Email}\"";
            Console.WriteLine(checkEmailquery); 
            bool notvalid = DataBaseValidation.EmailExist(checkEmailquery, "zeus_user_registration");
            if (notvalid)
            {
                return BadRequest("Email alredy exist!!");
            }
            else
            {
                ForLogIn.savedata(data);
                return Ok(data);
            }
            
        }
        [HttpGet]
        public List<logInData> Get()
        {
            
            return ForLogIn.getdata();
        }

    }
}
