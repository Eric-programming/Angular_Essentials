using System;
using System.ComponentModel.DataAnnotations;
namespace RazorBooks.Models
{
    public class Books
    {
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }
    }
}