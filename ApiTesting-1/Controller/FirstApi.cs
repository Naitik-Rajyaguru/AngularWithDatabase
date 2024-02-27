using ApiTesting_1.Filters;
using ApiTesting_1.Models;
using ApiTesting_1.Models.Datavalue;
using Microsoft.AspNetCore.Mvc;

namespace ApiTesting_1.Controller
{
    [ApiController]
    [Route("[controller]")]
    public class FirstApi :ControllerBase
    {
        [HttpGet]

        public IActionResult Get()
        {
            return Ok(DataValues.Get());
        }
        [HttpGet("{idk}")]
        [dataIdfilter]
        public IActionResult GetbyId(int idk)
        {
            return Ok(DataValues.getbyId(idk));
        }
        [HttpPost]
        public IActionResult Create([FromBody]DataInterface obj)
        {
            if(obj == null)
            {
                return BadRequest();
            }
            var temp = DataValues.getbyprop(obj.Name, obj.Description, obj.Age);
            if(temp != null)
            {
                return BadRequest();
            }
            DataValues.Create(obj);
            return Ok();
            //return CreatedAtAction(nameof(GetbyId), new { id = obj.Id }, obj);
        }


        [HttpPut("{idk}")]
        [dataIdfilter]
        public IActionResult Update(int idk, DataInterface obj)
        {
            if(idk != obj.Id)
            {
                return BadRequest();
            }
            try
            {
                DataValues.Update(obj);
            }
            catch
            {
                if (!DataValues.exist(idk))
                {
                    return BadRequest();

                    throw;
                }
            }
            return NoContent();
            

        }
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var data = DataValues.getbyId(id);
            DataValues.delete(id);

            return Ok(data);
        }
    }
}
