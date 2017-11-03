//back - end logic
function Pizza(size, veggies, meat, special) {
  this.size = size;
  this.veggies = veggies;
  this.meat = meat;
  this.special = special;
}
var newPizza = new Pizza;

Pizza.prototype.Price = function() {
  return this.size + this.veggies.length + (this.meat.length * 2) + (this.special.length * 3);
}

function resetForm() {
  //figure this out
}


//front-end logic//
$(function() {
  $("form#pizza-time").submit(function(event){
    event.preventDefault();
    var pizzaSize = parseInt($("select#pizza-size").val());
    var veggieTopping = $("input:checkbox[name=topping]:checked").map(function(){
      return $(this).val();
    });
    var meatTopping = $("input:checkbox[name=meatTopping]:checked").map(function(){
      return $(this).val();
    });
    var specialTopping = $("input:checkbox[name=specialTopping]:checked").map(function(){
      return $(this).val();
    });
    var userPizza = new Pizza (pizzaSize, veggieTopping, meatTopping, specialTopping);

    console.log(userPizza.size);
    console.log(specialTopping.length);
    console.log(meatTopping.length);
    console.log(veggieTopping.length);
    debugger
    outputPrice = userPizza.Price();

    console.log(outputPrice);

  });
});
