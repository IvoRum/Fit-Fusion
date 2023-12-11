namespace Fit_Fusion.Models;

public class Balance
{
    public DateTime date { get; set; }
    public int netIncome { get; set; }
    public string name { get; set; }

    public Balance(DateTime date, int netIncome, string name)
    {
        this.date = date;
        this.netIncome = netIncome;
        this.name = name;
    }
}