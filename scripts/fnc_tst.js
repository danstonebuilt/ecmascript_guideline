var foo = "foo";

(function bob() {
    
    var foo = "foo2";
    console.log(foo);
})();

console.log(foo);