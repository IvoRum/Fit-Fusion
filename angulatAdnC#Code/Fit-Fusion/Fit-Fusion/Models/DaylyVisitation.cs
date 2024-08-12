namespace Fit_Fusion.Models;

public class DaylyVisitation
{
    public string firstName { get; set; }
    public string lastName { get; set; }
    public string subscriptionName { get; set; }
    public int subscriptionPrice { get; set; }

    public DaylyVisitation(string firstName, string lastName, string subscriptionName, int subscriptionPrice)
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.subscriptionName = subscriptionName;
        this.subscriptionPrice = subscriptionPrice;
    }
}