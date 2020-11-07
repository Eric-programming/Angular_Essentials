using Microsoft.EntityFrameworkCore;
using RazorBooks.Models;
namespace RazorBooks
{
    public class BooksDbContext : DbContext
    {
        public BooksDbContext(DbContextOptions options)
            : base(options)
        {
        }

        public DbSet<Books> Books { get; set; }
    }
}

