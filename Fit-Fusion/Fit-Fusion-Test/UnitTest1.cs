using Fit_Fusion.Controllers;
using Fit_Fusion.Models;
using Microsoft.AspNetCore.Mvc;

namespace Fit_Fusion_Test;

public class UnitTest1
{
    [Fact]
    public void Test1()
    {
        // Arrange
        var controller = new BalanceController();

        // Act
        var result = controller.GetmothlyVisistation();

        // Assert
        Assert.IsType<ActionResult<IEnumerable<DaylyVisitation>>>(result);
    }
    
    [Fact]
    public void Test2()
    {
        // Arrange
        var controller = new BalanceController();

        // Act
        var result = controller.GethalfAYear();

        // Assert
        Assert.NotEmpty(result);
        Assert.Equal(7,result.Count);
        Assert.IsType<List<ChartVisitorsMoths>>(result);
    }
}