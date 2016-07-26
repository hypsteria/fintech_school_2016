logger('script-1.js\n-------------------------------');

// функция-конструктор
function Animal (name, years) {
	this.name = name;
	this.years = years;
};

// Чтобы изменить значение атрибута свойства или создать новое свойство с заданными значениями атрибутов, 
// следует вызвать метод Object.defineProperty(), передав ему объект, в котором требуется выполнить изменения, 
// имя создаваемого или изменяемого свойства и объект дескриптора свойства.
Object.defineProperty(Animal.prototype, 'animalProperty', {value: 'animal-property', writable: true, enumerable: true, configurable: true}); 
Object.defineProperty(Animal.prototype, 'animalNotwritableProperty', {value: 'animal-notwritable-property', writable: false}); 


logger('Прототип объекта Animal', Animal.prototype);

// объявляем методы в прототипе
Animal.prototype.setDescription = function (text) {
	this.description = text;
};

// создание объектов с помощью оператора new
var bob = new Animal('bob', 2); //Объекты, созданные с помощью ключевого слова new и вызова конструктора, 
								//в качестве прототипа получают значение свойства prototype функции-конструктора.
bob.setDescription('amazing animal');

logger('Объект bob, созданный через конструктор new Animal (name, years)', bob);

logger('Прототипом объекта, созданного с помощью оператора new, является значение свойства prototype конструктора.');
logger('Object.getPrototypeOf(bob) === Animal.prototype', Object.getPrototypeOf(bob) === Animal.prototype);

logger('Объекты, созданные с помощью оператора new, наследуют свойство constructor, ссылающееся на функцию-конструктор, использованную для создания объекта');
logger('Animal.prototype.constructor === Animal', Animal.prototype.constructor === Animal);

logger('Результатом оператора instanceof будет значение true, если объект, указанный слева, является экземпляром класса, указанного справа.');
logger('bob instanceof Animal', bob instanceof Animal); 
logger('bob instanceof Object', bob instanceof Object); 

logger('Значением typeof является строка, указывающая на тип данных операнда. \nПолезен только для определения принадлежности значения к объектному или к простому типу');
logger('typeof bob', typeof bob);

logger('Объект bob имеет унаследованное свойство animalNotwritableProperty, доступное только для чтения: унаследованные свойства, \nдоступные только для чтения, невозможно переопределить собственными свойствами с теми же именами.');
bob.animalProperty = 'bob-property';
logger('[animalProperty - доступно для записи] bob.animalProperty = \'bob-property\'; свойство добавилось к объекту bob\nbob.hasOwnProperty(\'animalProperty\')', bob.hasOwnProperty('animalProperty'));

bob.animalNotwritableProperty = 'bob-property';
logger('[animalNotwritableProperty - только для чтения] bob.animalNotwritableProperty = \'bob-property\'; не удается переопределить собственное свойство с тем же именем\nbob.hasOwnProperty(\'animalNotwritableProperty\')', bob.hasOwnProperty('animalNotwritableProperty'));
logger('В режиме "use strict" при потыке переопределения свойства, доступного только для чтения, мы получим ошибку \nTypeError: Cannot assign to read only property \'animalNotwritableProperty\' of object \'#<Animal>\'');

logger('Чтобы определить, допускается ли расширять объект, его следует передать методу Object.isExtensible()');
logger('Object.isExtensible(bob)', Object.isExtensible(bob));

// TODO: add functions Object.preventExtensions(), Object.seal() and Object.freeze()

logger('-------------------------------'); //для отступа между объектами в консоли

// создание объектов с помощью Object.create
	// Создает новый объект и использует в качестве первого аргумента прототип этого объекта.
	// Может принимать второй необязательный аргумент, такой же, как и второй аргумент метода Object.defineProperties() - 
	// множество дескрипторов свойств (они будут использованы для создания свойств нового объекта).
var alex = Object.create(Animal.prototype, {name: { value: 'alex', writable: true, enumerable:false, configurable:true }});
alex.setDescription('another amazing animal');

logger('Объект alex созданный с помощью Object.create с использованием дескрипоторов свойств', alex);

logger('Возвращает массив имен собственных перечислимых свойств объекта');
logger('Object.keys(alex)', Object.keys(alex));

logger('Object.getOwnPropertyNames() действует подобно функции Object.keys(), \nно возвращает имена всех собственных свойств указанного объекта, а не только перечисляемые.');
logger('Object.getOwnPropertyNames(alex)', Object.getOwnPropertyNames(alex));

logger('hasOwnProperty() проверяет, имеет ли объект собственное свойство с указанным именем. Для наследуемых свойств он возвращает false');
logger('alex.hasOwnProperty(\'name\')', alex.hasOwnProperty('name'));
logger('alex.hasOwnProperty(\'description\')', alex.hasOwnProperty('description'));
logger('alex.hasOwnProperty(\'animalProperty\') - наследуемое свойство', alex.hasOwnProperty('animalProperty'));

logger('propertyIsEnumerable() возвращает true, только если указанное свойство является собственным свойством,\nатрибут enumerable которого имеет значение true.');
logger('alex.propertyIsEnumerable(\'name\')', alex.propertyIsEnumerable('name'));
logger('alex.propertyIsEnumerable(\'description\')', alex.propertyIsEnumerable('description'));

logger('Оператор in требует, чтобы в левом операнде ему было передано имя свойства (в виде строки) и объект в правом операнде. \nОн возвращает true, если объект имеет собственное или унаследованное свойство с этим именем');
logger("'name' in alex", 'name' in alex);
logger("'years' in alex", 'years' in alex);
logger("'animalProperty' in alex", 'animalProperty' in alex);

logger('-------------------------------'); //для отступа между объектами в консоли

// создание объектов с помощью литералов 

var mike = {
	name: 'mike',
	years: 15,
};

logger('Объект mike, созданный с помощью литерала', mike);

Animal.prototype.setDescription.apply(mike, ['mike is good']);

logger('mike не наследуется от Animal.prototype, хотя mike не имеет метода setDescription, этот метод можно вызвать через apply');
logger('Метод apply позволяет выбирать значение this (первый параметр), \nа так же создать массив аргументов, используемых для вызова функции (второй параметр)');
logger('Animal.prototype.setDescription.apply(mike, [\'mike is good\']);', mike);


