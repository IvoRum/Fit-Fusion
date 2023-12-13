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
    
    public Worker GetWorkerWhitLowestSalaray()
    {
        using (NpgsqlConnection connection = new NpgsqlConnection(connectionString))
        {
            connection.Open();
            string query =
                "select salary.amount, w.first_name, w.last_name " +
                "from salary" +
                "         join public.worker w on w.id = salary.worker " +
                "order by salary.amount asc " +
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

    
    public List<DaylyVisitation> GetDaylyOtchet()
    {
        List<DaylyVisitation> daylyVisitations = new List<DaylyVisitation>();
        using (NpgsqlConnection connection = new NpgsqlConnection(connectionString))
        {
            connection.Open();
            string query =
                "select c.first_name,c.last_name,s.name,s.price " +
                "from client_visitation cl " +
                "join public.client c on c.id = cl.client " +
                "join public.subscription s on s.id = c.sub_type " +
                "where date=CURRENT_DATE;";
            using (NpgsqlCommand command = new NpgsqlCommand(query, connection))
            {
                using (NpgsqlDataReader reader = command.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        string subscriptionName = reader["name"].ToString();
                        string firstName=reader["first_name"].ToString();
                        string lastName = reader["last_name"].ToString();
                        int price = reader.GetInt32(reader.GetOrdinal("price"));

                        daylyVisitations.Add(new DaylyVisitation(firstName,lastName,
                        subscriptionName,price));
                    }
                }
            }
    
            connection.Close();
        }
        return daylyVisitations;
    }
             public List<DaylyVisitation> GetMontlyOtchet()
             {
                 List<DaylyVisitation> daylyVisitations = new List<DaylyVisitation>();
                 using (NpgsqlConnection connection = new NpgsqlConnection(connectionString))
                 {
                     connection.Open();
                     string query =
                         "    select cl.date,c.first_name,c.last_name,s.name,s.price" +
                         "    from client_visitation cl" +
                         "             join public.client c on c.id = cl.client" +
                         "             join public.subscription s on s.id = c.sub_type" +
                         "    where (EXTRACT(MONTH FROM  date))=(EXTRACT(MONTH FROM  CURRENT_DATE));";
                     using (NpgsqlCommand command = new NpgsqlCommand(query, connection))
                     {
                         using (NpgsqlDataReader reader = command.ExecuteReader())
                         {
                             while (reader.Read())
                             {
                                 string subscriptionName = reader["name"].ToString();
                                 string firstName=reader["first_name"].ToString();
                                 string lastName = reader["last_name"].ToString();
                                 int price = reader.GetInt32(reader.GetOrdinal("price"));

                                 daylyVisitations.Add(new DaylyVisitation(firstName,lastName,
                                     subscriptionName,price));
                             }
                         }
                     }
    
                     connection.Close();
                 }
                 return daylyVisitations;
             }
             
             public HalfYearRetun GetHalfAYearsOtchet()
             {
                 HalfYearRetun halfYearRetun = new HalfYearRetun();
                 
                 string year = "2023-06-17";
                 List<string> allQuerys = new List<string>() { six,seven,eatch,nine,ten,aves,tlave};
                 using (NpgsqlConnection connection = new NpgsqlConnection(connectionString))
                 {
                     connection.Open();
                     foreach (var VARIABLE in allQuerys)
                     {
                         using (NpgsqlCommand command = new NpgsqlCommand(VARIABLE, connection))
                         { List<DaylyVisitationCount> daylyVisitations = new List<DaylyVisitationCount>();
                             using (NpgsqlDataReader reader = command.ExecuteReader())
                             {
                                
                                 while (reader.Read())
                                 {
                                     string subscriptionName = reader["name"].ToString();
                                     string firstName = reader["first_name"].ToString();
                                     string lastName = reader["last_name"].ToString();
                                     int price = reader.GetInt32(reader.GetOrdinal("price"));
                                     int count = reader.GetInt32(reader.GetOrdinal("visiations"));
                                     daylyVisitations.Add( new DaylyVisitationCount(firstName, lastName,
                                         subscriptionName, price, count));
                                 }
                             }

                             halfYearRetun.addMontlyResult(daylyVisitations);
                             command.Dispose();
                         }
                         
                     }

                     connection.Close();
                 }
                 return halfYearRetun;
             }   
             
             const string six="select c.first_name,c.last_name,s.name,s.price,count(cl.date) as visiations " +
                              "from client_visitation cl " +
                              "         join public.client c on c.id = cl.client " +
                              "         join public.subscription s on s.id = c.sub_type " +
                              "where (EXTRACT(MONTH FROM  date))=(EXTRACT(MONTH FROM TIMESTAMP '2023-06-17')) " +
                              "group by s.price, s.name, c.last_name, c.first_name;";
             const string seven="select c.first_name,c.last_name,s.name,s.price,count(cl.date) as visiations " +
                                "from client_visitation cl " +
                                "         join public.client c on c.id = cl.client " +
                                "         join public.subscription s on s.id = c.sub_type " +
                                "where (EXTRACT(MONTH FROM  date))=(EXTRACT(MONTH FROM TIMESTAMP '2023-07-17')) " +
                                "group by s.price, s.name, c.last_name, c.first_name;";
             const string eatch="select c.first_name,c.last_name,s.name,s.price,count(cl.date) as visiations " +
                                "from client_visitation cl " +
                                "         join public.client c on c.id = cl.client " +
                                "         join public.subscription s on s.id = c.sub_type " +
                                "where (EXTRACT(MONTH FROM  date))=(EXTRACT(MONTH FROM TIMESTAMP '2023-08-17')) " +
                                "group by s.price, s.name, c.last_name, c.first_name;";
             const string nine="select c.first_name,c.last_name,s.name,s.price,count(cl.date) as visiations " +
                                "from client_visitation cl " +
                                "         join public.client c on c.id = cl.client " +
                                "         join public.subscription s on s.id = c.sub_type " +
                                "where (EXTRACT(MONTH FROM  date))=(EXTRACT(MONTH FROM TIMESTAMP '2023-09-17')) " +
                                "group by s.price, s.name, c.last_name, c.first_name;";

             private const string ten = "select c.first_name,c.last_name,s.name,s.price,count(cl.date) as visiations " +
                                        "from client_visitation cl " +
                                        "         join public.client c on c.id = cl.client " +
                                        "         join public.subscription s on s.id = c.sub_type " +
                                        "where (EXTRACT(MONTH FROM  date))=(EXTRACT(MONTH FROM TIMESTAMP '2023-10-17')) " +
                                        "group by s.price, s.name, c.last_name, c.first_name;";
             const string aves="select c.first_name,c.last_name,s.name,s.price,count(cl.date) as visiations " +
                               "from client_visitation cl " +
                               "         join public.client c on c.id = cl.client " +
                               "         join public.subscription s on s.id = c.sub_type " +
                               "where (EXTRACT(MONTH FROM  date))=(EXTRACT(MONTH FROM TIMESTAMP '2023-11-17')) " +
                               "group by s.price, s.name, c.last_name, c.first_name;";
             const string tlave="select c.first_name,c.last_name,s.name,s.price,count(cl.date) as visiations " +
                               "from client_visitation cl " +
                               "         join public.client c on c.id = cl.client " +
                               "         join public.subscription s on s.id = c.sub_type " +
                               "where (EXTRACT(MONTH FROM  date))=(EXTRACT(MONTH FROM TIMESTAMP '2023-12-17')) " +
                               "group by s.price, s.name, c.last_name, c.first_name;";
}