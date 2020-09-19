using SinonimosApp_API.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SinonimosApp_API.Interfaces
{
    interface ISinonimo
    {
        List<Palavra> requestInfo(string p);
    }
}
