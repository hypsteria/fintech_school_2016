## script-1.js
Пробегаемся по основным ключевым моментам связанных с созданием и прототипированием объектов. Смотрим методы проверки на существавание, чтения, перечисления свойств объекта. Рассматриваем функцию apply().

## script-2.js
Работаем с созданием наследников. Функция-конструструктор, которую можно вызывать двумя способами (как с new и без).

## inherit.js
аналог функции Object.create()

## инкапсуляция в js
Инкапсуляцию можно реализовать посредством шаблона модуля. 

> Обощенный модуль шаблона - это функция, которая определяет закрытые переменные и функции и создающая привилегированные функции, которые благодаря замыканию получают доступ к закрытым переменным и функциям, и возвращающая привилегированные функции или хранящая их в доступном месте.

```
var singleton = (function(){
	var privateVariable;

	function privateFunction(x) {
		...privateVariable...
	}

	return {
		firstMethod: function(a,b) {
			...privateVariable...
		},
		secondMethod: function(c) {
			...privateFunction...
		}
	};
}());
```