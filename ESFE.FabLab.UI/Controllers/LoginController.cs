using Microsoft.AspNetCore.Mvc;

namespace ESFE.FabLab.UI.Controllers
{
    public class LoginController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
