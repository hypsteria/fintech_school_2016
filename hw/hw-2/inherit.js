// реализация функции из книги JS: подробное руководство
// inherit() возвращает вновь созданный объект, на следующий свойства 
// объекта-прототипа p. Использует функцию Object.create() из ECMAScript 5, 
// если она определена, иначе используется более старый прием. 
// function inherit(p) {     
// 	if (p == null) throw TypeError(); // p не может быть значением null     
// 	if (Object.create)                // Если Object.create() определена...         
// 		return Object.create(p);      // использовать ее.     
	
// 	var t = typeof p;                 // Иначе выяснить тип и проверить его   
// 	if (t !== "object" && t !== "function") throw TypeError();     
// 	function f() {};                  // Определить фиктивный конструктор.     
// 	f.prototype = p;                  // Записать в его свойство prototype                                        
// 									  // ссылку на объект p.     
// 	return new f();                   // Использовать f() для создания                                        
// 									  // "наследника" объекта p.
// }

// но интереснее кажется переопределить функцию, если ее нет
if (typeof Object.create !== 'function') {
	Object.create = function(o) {
		if (o == null) throw TypeError();
		var f = function() {};
		f.prototype = o;
		return new f();
	}
}