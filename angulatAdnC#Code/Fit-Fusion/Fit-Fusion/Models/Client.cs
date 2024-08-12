namespace Fit_Fusion.Models;

public class Client
{
    public int id { get; set; }
    public string firstName { get; set; }
    public string lastName { get; set; }
    public DateTime subFrom { get; set; }
    public DateTime subTo { get; set; }
    public string subType { get; set; }
    public DateTime addedAt { get; set; }
    public int numberRenewing { get; set; }
    public string email { get; set; }
    public string phoneNumber { get; set; }
}