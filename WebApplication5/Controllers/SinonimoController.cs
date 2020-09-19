using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SinonimosApp_API.Domains;
using SinonimosApp_API.Repositories;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace SinonimosApp_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SinonimoController : ControllerBase
    {

        SinonimoRepository sin = new SinonimoRepository();

        // GET: api/<SinonimoController>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<SinonimoController>/5
        [HttpGet("{id}")]
        /*public List<Palavra> Get(string p)
        {
            return sin.requestInfo(p);
        }*/
        public int Get(int p)
        {
            return p;
        }

        // POST api/<SinonimoController>
        [HttpPost]
        public List<Palavra> Post([FromBody]string p)
        {
            return sin.requestInfo(p);
        }


        // PUT api/<SinonimoController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<SinonimoController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
