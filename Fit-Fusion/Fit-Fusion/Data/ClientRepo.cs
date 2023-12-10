using Npgsql;

namespace Fit_Fusion.Data;

public class ClientRepo
{
    string connectionString = "Server=ep-lively-queen-99751851.eu-central-1.aws.neon.tech; Database =Fit_Fusion; Username =IvoRum; Password=RXvnYfB9m1Uz;";

    public void getClientInfo()
    {
        using (NpgsqlConnection connection = new NpgsqlConnection(connectionString))
        {
            connection.Open();
    
            string query = "SELECT * FROM Client";
            
            using (NpgsqlCommand command = new NpgsqlCommand(query, connection))
            {
                using (NpgsqlDataReader reader = command.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        // Access data using reader
                        Console.WriteLine(reader["first_name"]);
                    }
                }
            }
    
            connection.Close();
        }
    }
}