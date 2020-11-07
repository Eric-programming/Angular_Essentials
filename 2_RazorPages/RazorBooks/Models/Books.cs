using System.ComponentModel.DataAnnotations;
namespace RazorBooks.Models
{
    public class Books
    {
         public int Id { get; set; }

        [Required, StringLength(10)]
        public string Name { get; set; }
    }
}