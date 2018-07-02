using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Todo.Model
{
    public class Todo
    {
        public int pkey { get; set; }
        public string name { get; set; }
        public bool? hasDone { get; set; }
    }
}
