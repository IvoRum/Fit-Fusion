namespace Fit_Fusion.Models;

public class DaylyVisitationCount
{
    public string firstName { get; set; }
    public string lastName { get; set; }
    public string subscriptionName { get; set; }
    public int subscriptionPrice { get; set; }
    public int count { get; set; }

    public DaylyVisitationCount(string firstName, string lastName, string subscriptionName, int subscriptionPrice, int count)
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.subscriptionName = subscriptionName;
        this.subscriptionPrice = subscriptionPrice;
        this.count = count;
    }
}