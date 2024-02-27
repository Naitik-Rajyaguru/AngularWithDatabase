using ApiTesting_1.Models.Datavalue;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;

namespace ApiTesting_1.Filters
{
    public class dataIdfilter : ActionFilterAttribute
    {
        public override void OnActionExecuting(ActionExecutingContext context)
        {
            base.OnActionExecuting(context);

            var dataId = context.ActionArguments["idk"] as int?;
            if (dataId.HasValue)
            {
                if(dataId.Value < 0)
                {
                    context.ModelState.AddModelError("dataId", "data Id is not valid");
                    var problem = new ValidationProblemDetails(context.ModelState)
                    {
                        Status = StatusCodes.Status400BadRequest
                    };
                    context.Result = new BadRequestObjectResult(problem);
                }
                if (!DataValues.exist((int)dataId))
                {
                    context.ModelState.AddModelError("dataId", "data Id is not exist in data base");
                    var problem = new ValidationProblemDetails(context.ModelState)
                    {
                        Status = StatusCodes.Status400BadRequest
                    };
                    context.Result = new BadRequestObjectResult(problem);
                }
            }
        }
    }
}
