namespace Fit_Fusion.Models;

public class Worker
{
    public string firstName { get; set; }
    public string lastName { get; set; }
    public int salary { get; set; }

    public string title { get; set; }
    public DateTime firstWorkDayDate { get; set; }

    public Worker(string firstName, string lastName, int salary)
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }

    public Worker(string firstName, string lastName, int salary, string title, DateTime firstWorkDayDate)
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
        this.title = title;
        this.firstWorkDayDate = firstWorkDayDate;
    }
}