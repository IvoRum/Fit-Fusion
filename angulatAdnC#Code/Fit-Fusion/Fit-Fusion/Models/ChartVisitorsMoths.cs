namespace Fit_Fusion.Models;

public class ChartVisitorsMoths
{
    public List<int> visistations { get; set; }
    public List<string> visitors { get; set; }

    public ChartVisitorsMoths(List<int> visistations, List<string> visitors)
    {
        this.visistations = visistations;
        this.visitors = visitors;
    }
}