using Fit_Fusion.Models;
using Npgsql;

namespace Fit_Fusion.Data;

public class ClientRepo
{
    string connectionString = "Server=ep-lively-queen-99751851.eu-central-1.aws.neon.tech; Database =Fit_Fusion; Username =IvoRum; Password=RXvnYfB9m1Uz;";
    
    public string GetClientInfo()
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

    public List<Worker> GetWorkerStats()
    {
        List<Worker> workers = new List<Worker>();
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
                        string firstName=reader["first_name"].ToString();
                        string lastName = reader["last_name"].ToString();
                        int salary = reader.GetInt32(reader.GetOrdinal("amount"));
                        DateTime date = reader.GetDateTime(reader.GetOrdinal("first_work_day_date"));
                        string title = reader["title"].ToString();
                        
                        workers.Add( new Worker(firstName,lastName,salary,title,date));
                    }
                }
            }
            connection.Close();
        }

        return workers;
    }
    
    public List<Balance> GetBalance()
    {
        List<Balance> balances = new List<Balance>();
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
                        string name = reader["name"].ToString();
                        int netIncome = reader.GetInt32(reader.GetOrdinal("net_income"));
                        DateTime date = reader.GetDateTime(reader.GetOrdinal("date"));
                        balances.Add( new Balance(date,netIncome,name));
                    }
                }
            }
            connection.Close();
        }
        return balances;
    }

    public Worker GetWorkerWhitHiestSalaray()
    {
        using (NpgsqlConnection connection = new NpgsqlConnection(connectionString))
        {
            connection.Open();
            string query =
                "select salary.amount, w.first_name, w.last_name " +
                "from salary" +
                "         join public.worker w on w.id = salary.worker " +
                "order by salary.amount desc " +
                "limit 1";
            using (NpgsqlCommand command = new NpgsqlCommand(query, connection))
            {
                using (NpgsqlDataReader reader = command.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        string firstName=reader["first_name"].ToString();
                        string lastName = reader["last_name"].ToString();
                        int salary = reader.GetInt32(reader.GetOrdinal("amount"));

                        return new Worker(firstName,lastName,salary);
                    }
                }
            }
    
            connection.Close();
        }

        return null;
    }

}