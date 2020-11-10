using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc.Rendering;

namespace Bookstore.Models
{
    public class BookGenreViewModel
    {
        public List<Book> Books { get; set; }
        public SelectList Genres { get; set; }//"Represents a list that lets users select one item."
        public string BooksGenre { get; set; }
        public string Search { get; set; }
    }
}