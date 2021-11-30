const cats = ["Milo", "Otis", "Garfield"];
cats;

beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });
  
  function destructivelyAppendCat() {
    cats.push("Ralph");
  }
 
  beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

  function destructivelyPrependCat() {
    cats.unshift("Bob");
  }

  beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

  function destructivelyRemoveLastCat() {
    cats.pop();
  }

  beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

  function destructivelyRemoveFirstCat() {
    cats.shift();
  }

  beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

  function appendCat() {
    const appendCat = [...cats, "Broom"];
    return appendCat;
  }

  beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

  function prependCat() {
    const prependCat = ["Arnold", ...cats,];
    return prependCat;
  }

  beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

    function removeLastCat() {
       removeLastCat = cats.slice(0, cats.length-1);
       return removeLastCat;
    }

    beforeEach(function () {
        cats.length = 0;
      
        cats.push("Milo", "Otis", "Garfield");
      });

      function removeFirstCat() {
          removeFirstCat = cats.slice(-2);
          return removeFirstCat;
      }