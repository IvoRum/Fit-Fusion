using Npgsql;

namespace Fit_Fusion.Data;

public class ClientRepo
{
    string connectionString = "Server=ep-lively-queen-99751851.eu-central-1.aws.neon.tech; Database =Fit_Fusion; Username =IvoRum; Password=RXvnYfB9m1Uz;";
    
    public string getClientInfo()
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
                        return reader["first_name"].ToString();
                    }
                }
            }
    
            connection.Close();
        }

        return null;
    }

    public void getWorkerStats()
    {
        using (NpgsqlConnection connection = new NpgsqlConnection(connectionString))
        {
            connection.Open();
            string query =
                "select worker.first_name,worker.last_name,r.title,s.amount,worker.first_work_day_date from worker " +
                "join public.role r on r.id = worker.role " +
                "join public.salary s on worker.id = s.worker " +
                "order by worker.first_work_day_date;";
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
    
    public void getBalance()
    {
        using (NpgsqlConnection connection = new NpgsqlConnection(connectionString))
        {
            connection.Open();
            string query =
                "select balance.date,balance.net_income,bt.name from balance " +
                "join public.balance_type bt on bt.id = balance.type " +
                "order by balance.date;";
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