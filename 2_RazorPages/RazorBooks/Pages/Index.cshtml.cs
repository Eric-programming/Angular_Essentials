using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Logging;

namespace RazorBooks.Pages
{
    public class IndexModel : PageModel
    {
        private readonly ILogger<IndexModel> _logger;

        public IndexModel(ILogger<IndexModel> logger)
        {
            _logger = logger;
        }

        public string Message { get; private set; }

        [BindProperty(SupportsGet = true)]
        public string Id { get; set; }

        //initialize the state for the page
        public void OnGet()
        {
            Message = "Hello Guys! " + Id;
        }
    }
}
