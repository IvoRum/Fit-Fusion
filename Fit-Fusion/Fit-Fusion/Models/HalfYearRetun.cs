namespace Fit_Fusion.Models;

public class HalfYearRetun
{
    public List<List<DaylyVisitationCount>> montlyResult { get; set; }
    

    public HalfYearRetun()
    {
        this.montlyResult = new List<List<DaylyVisitationCount>>();
    }

    public void addMontlyResult(List<DaylyVisitationCount> daylyVisitationCount)
    {
        montlyResult.Add(daylyVisitationCount);
    }
}