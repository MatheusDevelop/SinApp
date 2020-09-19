using HtmlAgilityPack;
using SinonimosApp_API.Domains;
using SinonimosApp_API.Interfaces;
using SinonimosApp_API.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;

namespace SinonimosApp_API.Repositories
{
    public class SinonimoRepository :ISinonimo
    {
        private formatTextService fText = new formatTextService();

        public List<Palavra> requestInfo(string p)
        {
            var textFiltered = fText.filterText(p);
            var verbos = fText.readVerbos(textFiltered);
            List<Palavra> palavras = new List<Palavra>();

            foreach (string v in verbos)
            {
                palavras.Add(new Palavra(v, searchSinonimo(v)));
            }

            return palavras;
        }


        private List<string> searchSinonimoInLexico(string word)
        {
            var wc = new WebClient();
            string pagina = wc.DownloadString("https://www.lexico.pt/" + word + "/");
            var htmlDoc = new HtmlDocument();
            htmlDoc.LoadHtml(pagina);

            string text = "";
            if (htmlDoc.DocumentNode.SelectNodes("//p[contains(@class,'words-buttons')]") == null)
            {

            }
            else
            {
                foreach (var node in htmlDoc.DocumentNode.SelectNodes("//p[contains(@class,'words-buttons')]"))
                {
                    text = node.InnerText;
                }
            }

            List<string> sinonimos = fText.filterText(text);


            return sinonimos;


        }
        private List<string> searchSinonimo(string word)
        {
            var wc = new WebClient();
            var htmlDoc = new HtmlDocument();
            List<string> sinonimos = new List<string>();
            try
            {
                
                string pagina = wc.DownloadString("https://www.sinonimos.com.br/" + word + "/");

                htmlDoc.LoadHtml(pagina);
                var child = htmlDoc.DocumentNode;

                foreach (HtmlNode node in child.SelectNodes("//a[contains(@class,'sinonimo')]"))
                {
                    string newString = node.InnerText;
               
                    sinonimos.Add(newString);
                }

                return sinonimos;
            }
            catch
            {
                sinonimos.Add("");
                return sinonimos;
            }


        }


    }
}
