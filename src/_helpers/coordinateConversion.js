

// private string decToMinutes(string s)
// {
//   string coord = s;
//   string ret = coord.Substring(0, coord.IndexOf(','));
//
//   string coordDec = coord.Substring(coord.IndexOf(',') + 1);
//   while (coordDec.Length < 5)
//   {
//     coordDec += "0";
//   }
//   double coordDouble = double.Parse(coordDec);
//   coordDouble = coordDouble / 100 * 60;
//   coordDouble = Math.Round(coordDouble);
//
//   coordDec = coordDouble.ToString();
//
//   while (coordDec.Length < 5)
//   {
//     coordDec = "0" + coordDec;
//   }
//   string coordOne = coordDec.Substring(0, 2);
//   string coordTwo = coordDec.Substring(2);
//   ret = ret + "° " + coordOne + "." + coordTwo;
//   return ret;
// }