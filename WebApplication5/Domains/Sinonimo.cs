using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SinonimosApp_API.Domains
{
    public class Palavra
    {
        public string verbo { get; set; }
        public List<string> sinonimos { get; set; }

        public Palavra(string _verbo , List<string> _sinonimos = null )
        {
            verbo = _verbo;
            sinonimos = _sinonimos;
        }
    }
}
