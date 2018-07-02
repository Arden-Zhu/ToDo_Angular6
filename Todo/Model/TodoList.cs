using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Todo.Model
{
    public static class TodoList
    {
        private static List<Todo> __todo;
        public static List<Todo> Value
        {
            get
            {
                if (__todo == null)
                    initiate();
                return __todo;
            }
        }

        private static void initiate()
        {
            __todo = new List<Todo>();
            for (int i = 0; i < 12; i++)
            {
                __todo.Add(new Todo
                {
                    pkey = i,
                    name = $"todo-{i}",
                    hasDone = false,
                });
            }
        }

        public static Todo AddNew(Todo todo)
        {
            int maxId = __todo.Select(t => t.pkey).Max();
            todo.pkey = maxId;
            __todo.Add(todo);
            return todo;
        }

        public static Todo Update(Todo todo)
        {
            var cachedTodo = __todo.FirstOrDefault(p => p.pkey == todo.pkey);
            if (cachedTodo!=null)
            {
                cachedTodo.name = todo.name;
                cachedTodo.hasDone = todo.hasDone;
            }
            return todo;
        }

        public static bool Remove(int id)
        {
            var cachedTodo = __todo.FirstOrDefault(p => p.pkey == id);
            if (cachedTodo != null)
            {
                __todo.Remove(cachedTodo);
                return true;
            }
            else
            {
                return false;
            }

        }
    }
}
