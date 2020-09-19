using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace SinonimosApp_API.Services
{
    public class formatTextService
    {


        /// <summary>
        /// Filtra o texto e retorna um array com cada palavra do texto
        /// </summary>
        /// <param name="txt">o texto a ser foramatado</param>
        /// <returns></returns>
        public List<string> filterText(string txt)
        {
            List<string> textList = new List<string>();

            //Filtra o texto tirando caracteres especiais e espaços duplos
            Regex regex = new Regex(@"(?i)[^0-9a-záéíóúàèìòùâêîôûãõç\s]");
            string filtredTxt = regex.Replace(txt, " ");

            string[] arrTxt = filtredTxt.Split(" ");

            foreach (string item in arrTxt)
            {
                if (item.Length > 1)
                    textList.Add(item);
            }

            return textList;

        }

        /// <summary>
        /// Filtra o array de texto e retorna uma lista de verbos
        /// </summary>
        /// <param name="arrTxt">o array de texto a ser filtrado</param>
        /// <returns></returns>
        public List<string> readVerbos(List<string> arrTxt)
        {
            List<string> sinonimos = new List<string>();
            #region Processamento

            foreach (string word in arrTxt)
            {


                if (word.Length <= 1)
                {
                    //
                }
                else
                {
                    word.Trim();
                    word.ToCharArray();

                    //Array length (the initial length is 0)
                    int length = word.Length - 1;

                    string ultimasLetras =word[length].ToString();

                    switch (ultimasLetras)
                    {
                        case "a":
                            sinonimos.Add(word);
                            break;
                        case "e":
                            sinonimos.Add(word);
                            break;
                        case "i":
                            sinonimos.Add(word);
                            break;
                        case "o":
                            sinonimos.Add(word);
                            break;
                        case "u":
                            sinonimos.Add(word);
                            break;
                        case "r":
                            sinonimos.Add(word);
                            break;
                        case "s":
                            sinonimos.Add(word);
                            break;
                        default:
                            break;

                    }
                }

            }

            #endregion
            return sinonimos;

        }
    }
}
