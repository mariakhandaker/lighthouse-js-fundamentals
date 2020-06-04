const sayHello  = function (name) {
  console.log("Hello, " + name);
}

sayHello("Maria");

// or

const returnSayHello = function (name){
  return "Hello, " + name;
}

const greeting = returnSayHello("Maria");
console.log(greeting);