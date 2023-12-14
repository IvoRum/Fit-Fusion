using Fit_Fusion.Controllers;
using Fit_Fusion.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.VisualStudio.TestTools.UnitTesting;
namespace Fit_Fusion.test;

[TestClass]
public class UnitTest1
{
    [TestMethod]
    public void GetData_ReturnsOk()
    {
        var controller = new BalanceController();
        var result = controller.GetmothlyVisistation();
        Assert.IsInstanceOfType(result, typeof(ActionResult<IEnumerable<DaylyVisitation>>));
    }
}