using ApiTesting_1.Models.Datavalue;
using MySql.Data.MySqlClient;
using System;
using System.Data;
using System.Security.Cryptography.Xml;
namespace ApiTesting_1
{
    public class DataBaseValidation
    {
        public static bool EmailExist(string q, string db)
        {
            bool exist = false;
            Console.WriteLine("hii1");
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
                    
                    using (MySqlDataReader reader = command.ExecuteReader())
                    {
                        while (reader.Read())
                        {
                            if (reader["UserId"] != "")
                            {
                                exist = true;
                            }
                            
                        }
                    }
                }
            }
            Console.WriteLine("Data inserted successfully.");
            return exist;
        }


        public static bool EmailPassword(string q, string db)
        {
            bool exist = false;
            Console.WriteLine("hii2");
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

                    using (MySqlDataReader reader = command.ExecuteReader())
                    {
                        while (reader.Read())
                        {
                            //Console.WriteLine(reader["ans"].GetType());
                            if (Convert.ToInt64(reader["ans"]) == 0)
                            {
                                exist = true;
                            }

                        }
                    }
                }
            }
            Console.WriteLine("Data inserted successfully.");
            return exist;
        }


    }
}
