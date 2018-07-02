using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Todo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TodoController : ControllerBase
    {
        // GET: api/Todo
        [HttpGet]
        public IEnumerable<Model.Todo> Get()
        {
            return Model.TodoList.Value;
        }

        // GET: api/Todo/5
        [HttpGet("{id}", Name = "Get")]
        public Model.Todo Get(int id)
        {
            return Model.TodoList.Value.FirstOrDefault(p => p.pkey == id);
        }

        // POST: api/Todo
        [HttpPost]
        public Model.Todo Post([FromBody] Model.Todo todo)
        {
            return Model.TodoList.AddNew(todo);
        }

        // PUT: api/Todo/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] Model.Todo todo)
        {
            Model.TodoList.Update(todo);
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public bool Delete(int id)
        {
            return Model.TodoList.Remove(id);
        }
    }
}
