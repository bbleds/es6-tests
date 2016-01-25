var expect =  require('chai').expect;


describe('test suite', function(){
  it('true should be true', function(){
    expect(true).to.be.true;
  });
});


//template strings

describe('template strings', function(){
  it('should be a string', function(){
      var string = `abc`;

      expect(string).to.be.a('string');
  });
  
  it('can evaluate variables', function(){
    var bar = 'baz'
    var string = `foo ${bar}`;


    expect(string).to.equal('foo baz');
  })
   
  it('can execute functions', function(){
    var string = `the date is: ${new Date().getFullYear()}`;

    var date = new Date().getFullYear();

    expect(string).to.equal("the date is: "+date);
  });

  it('can evaluate expressions', function(){
    var a = 1;
    var b = 2 
    var string = `the answer is ${a+b}`;
    
    expect(string).to.equal("the answer is 3");
  });

   it('can handle multiline strings', function(){
      
      var string = `hello
 world`;

       expect(string).to.equal("hello\n world")
   });
  

});


describe('arrow functions', function(){
  
  it('is shorter to write', function(){
    var functionNorm = function(){
      return 5*10;
    } 

    var functionArrow = () => 5*10;

    //expect(functionNorm()).to.equal(50);
    expect(functionArrow()).to.equal(50);

  });

});
