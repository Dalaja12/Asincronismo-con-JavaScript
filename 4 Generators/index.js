function* gen() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
}

const g = gen();
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);

function* itrable(array) {
    for(let value of array) {
        yield value
    }
}

const it = itrable(['perro', 'gato', 'raton', 'conejo', 'pollo']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);