//back - end logic
function Pizza(size, veggies, meat, special) {
  this.size = size;
  this.veggies = veggies;
  this.meat = meat;
  this.special = special;
}

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
    var pizzaSize = parseInt($("input:radio[name=pizza-size]:checked").val());
    console.log(pizzaSize)
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
    outputPrice = userPizza.Price();
    console.log(outputPrice);
    $(".user-pizza-price").empty();
    $("#jumboResult").show();
    $(".user-pizza-price").append(outputPrice);
    $(".user-pizza-size").append(" " + pizzaSize + " inches");
    $(".user-pizza-toppings").append("<li>" + userPizza.veggies.toString(",  ") + "</li>")



  });
});
