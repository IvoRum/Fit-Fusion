namespace Fit_Fusion.Models;

public class Worker
{
    public string firstName { get; set; }
    public string lastName { get; set; }
    public int salary { get; set; }

    public Worker(string firstName, string lastName, int salary)
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
}