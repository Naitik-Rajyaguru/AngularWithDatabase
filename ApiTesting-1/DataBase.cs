using ApiTesting_1.Models.Datavalue;
using MySql.Data.MySqlClient;
using System;
using System.Data;
using System.Security.Cryptography.Xml;
namespace ApiTesting_1
{
    public class DataBase
    {
        public static void Main(string q, string db)
        {
            string connectionString = $"server=localhost;user=root;database={db};port=3306;password=1974";
            using (MySqlConnection connection = new MySqlConnection(connectionString))
            {
                connection.Open();

                using (MySqlCommand command = new MySqlCommand())
                {
                    command.Connection = connection;
                    command.CommandType = CommandType.Text;

                    // Assuming your table has columns 'Id' and 'Name'
                    command.CommandText = q;
                    //command.CommandText = "INSERT INTO college (CollegeName, CollegeId) VALUES ('Nirma', '1')";


                    command.ExecuteNonQuery();
                }
            }
            Console.WriteLine("Data inserted successfully.");
        }
        

    }
}
