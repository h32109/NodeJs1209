function Animal(name){this.name = name}
function Human(){Animal.apply(this, arguments)}
function SuperHero(){Human.apply(this, arguments)}
