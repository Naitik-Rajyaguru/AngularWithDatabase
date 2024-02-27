using FluentAssertions.Common;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddControllers();


builder.Services.AddCors(options =>
{
    options.AddPolicy(name: "AllowAngularOrigins",
    policy=>
    {
        policy.WithOrigins(
                            "*"
                            )
                            .AllowAnyHeader()
                            .AllowAnyMethod();
    });
});

var app = builder.Build();
app.UseCors("AllowAngularOrigins");

app.UseHttpsRedirection();
app.MapControllers();

app.Run();

