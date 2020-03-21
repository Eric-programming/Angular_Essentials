# CSharp-InterviewQA
> C-Sharp Interview Questions and Answers
### C# Questions

1. Difference between Reference and Value Types
* Reference types are objects that store references to actual data. Ex. Classes, Interfaces, Delegates, Objects, and strings. For values, it iterally assign the value or copies the value.
2. What is Interface
* Interface specify fields and methods that dervived (Child Class) can have access to, class can inherit many interfaces, and it doesn't allow access modifiers for the methods and fields.
3. What is Abstract Class
* Abstract specify fields and methods that base class can have access to or same logic for all dervived class. It can only inherit one Abstract per class, it does allow access modifiers.
4. What is static class
* Static Class is use to create data or function that don't need to instantiated.
```c#
namespace Example{
  static class Program
  {
    static void Main(string[] arg){
       Console.WriteLine(CompanyInfo.getCompanyName);
    }
  }
  static class CompanyInfo{
      public static string getCompanyName {get; set;}
  }
}
```
