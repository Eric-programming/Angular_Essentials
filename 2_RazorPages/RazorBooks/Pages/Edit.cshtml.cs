using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using RazorBooks.Models;

namespace RazorBooks.Pages
{
    public class EditModel : PageModel
    {
        private readonly BooksDbContext _context;

        public EditModel(BooksDbContext context)
        {
            _context = context;
        }

        [BindProperty]
        public Books Book { get; set; }

        public async Task<IActionResult> OnGetAsync(int id)
        {
            Book = await _context.Books.FindAsync(id);

            if (Book == null)
            {
                return RedirectToPage("./Index");
            }

            return Page();
        }

        public async Task<IActionResult> OnPostAsync()
        {
            if (!ModelState.IsValid)
            {
                return Page();
            }
            _context.Books.Update(Book);

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                throw new Exception($"Book {Book.Id} not found!");
            }

            return RedirectToPage("./Index");
        }
    }
}
