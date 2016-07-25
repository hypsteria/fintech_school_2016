// inherit() возвращает вновь созданный объект, на следующий свойства 
// объекта-прототипа p. Использует функцию Object.create() из ECMA Script 5, 
// если она определена, иначе используется более старый прием. 
function inherit(p) {     
	if (p == null) throw TypeError(); // p не может быть значением null     
	if (Object.create)                // Если Object.create() определена...         
		return Object.create(p);      // использовать ее.     
	
	var t = typeof p;                 // Иначе выяснить тип и проверить его   
	if (t !== "object" && t !== "function") throw TypeError();     
	function f() {};                  // Определить фиктивный конструктор.     
	f.prototype = p;                  // Записать в его свойство prototype                                        
									  // ссылку на объект p.     
	return new f();                   // Использовать f() для создания                                        
									  // "наследника" объекта p.
}