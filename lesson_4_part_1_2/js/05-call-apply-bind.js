const showTag = function(arg1, arg2, arg3) {
    console.log("this: ", this);
    console.log("this.tag: ", this.tag);
};

const mango = {
    tag: 'Mango',
};

const poly = {
    tag: 'Poly',
};

// showTag.call(mango, 1, 2, 3);
// showTag.call(poly, 5, 10, 15);

// showTag.apply(mango);
// showTag.apply(poly, [1, 2, 3]);

const showMangoTag = showTag.bind(poly);


showMangoTag();