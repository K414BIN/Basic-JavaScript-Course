document.writeln(" <br />" );
document.writeln(" <br />" );
document.writeln(" Результат сравнения значения null с нулем:" );
document.writeln(" <br />" );
document.writeln(" <br />" );
document.writeln( " null === 0  это " + (null === 0 )); // ложь
document.writeln(" <br />" );
document.writeln( " null == 0  это " + (null == 0 )); // ложь
document.writeln(" <br />" );
document.writeln( " null > 0  это " + (null > 0 )); // ложь
document.writeln(" <br />" );
document.writeln( " null < 0  это " + (null < 0 )); // ложь
document.writeln(" <br />" );
document.writeln( " null > 0  || null < 0 это " + (null > 0  || null < 0 )); // ложь
document.writeln(" <br />" );
document.writeln( " null > 0  && null < 0 это " + (null > 0  && null < 0 )); // ложь
document.writeln(" <br />" );
document.writeln( " null <= 0  это " + (null <=0 )); // правда
document.writeln(" <br />" );
document.writeln( " null >= 0  это " + (null >=0 )); // правда
document.writeln(" <br />" );
document.writeln( " null >= 0  && null <= 0 это " + (null >=0  && null <=0)); // правда
document.writeln(" <br />" );
document.writeln( " null >= 0  || null <= 0 это " + (null >=0  || null <=0)); // правда
document.writeln(" <br />" );
document.writeln( " null > 0  && null <= 0 это " + (null > 0  && null <= 0 )); // ложь
document.writeln(" <br />" );
document.writeln( " null > 0  || null <= 0 это " + (null > 0  || null <= 0 )); // правда
document.writeln(" <br />" );
document.writeln(" <br />" );
document.writeln( " По результам следует вывод, что null - это не ноль в математическом смысле.  <br /> null - это отдельное состояние перменной в памяти. Нестрогие неравенства null к нулю неприменимы!"  );
/* end of file */