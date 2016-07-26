'use strict';

logger('script-2.js\n-------------------------------');

function Bird(name, years, color) {
	this.color = color;
	Animal.call(this, name, years);
}

Bird.prototype = Object.create(Animal.prototype); // можно ли new Animal() ?
Bird.prototype.constructor = Bird;

logger('Создаём новый класс Bird, прототипом которого является класс Animal');

logger('Bird.prototype', Bird.prototype);

var phoenicopterus = new Bird('phoenicopterus', 15, 'pink');

logger('Объект phoenicopterus создан с помощью конктуктора new Bird', phoenicopterus);

phoenicopterus.setDescription('"A type of wading bird in the family Phoenicopteridae, the only family in the order Phoenicopteriformes."');

logger('используем метод setDescription, унаследованный от Animal - phoenicopterus.description', phoenicopterus.description);


logger('Пишем конструктор Insecta, который может вызываться как с new, так и без него');

var Insecta = function(name, years, wings) {
	if (this) {
		this.wings = wings;
		Animal.call(this, name, years);
	} else {
		var insecta =  new Insecta(name, years, wings);
		return insecta;
	}
}

Insecta.prototype = Object.create(Animal.prototype);
Insecta.prototype.constructor = Insecta;

Insecta.prototype.saying = function(saying) {
	return saying || '';
};

logger('Insecta.prototype', Insecta.prototype);

var lucanus = new Insecta('lucanus cervus', null, 4);

logger('Объект lucanus создан c new', lucanus);

lucanus.setDescription('the best-known species of stag beetle in Western Europe');
logger('используем метод setDescription, унаследованный от Animal - lucanus.description', lucanus.description);

logger('используем метод lucanus.saying(\'brbrbr\'), который определён в Insecta', lucanus.saying('brbrbr'));


var cicadidae = Insecta('cicadidae', null, 4);

logger('Объект cicadidae создан без помощи new', cicadidae);

cicadidae.setDescription('small insects');
logger('используем метод setDescription, унаследованный от Animal - cicadidae.description', cicadidae.description);

logger('используем метод lucanus.saying(\'zzz\'), который определён в Insecta', cicadidae.saying('zzzz'));


