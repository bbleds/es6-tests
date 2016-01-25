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

  it('can execute expressions', function(){
  
  });

});

