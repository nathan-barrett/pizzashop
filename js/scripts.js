//back - end logic
function Pizza(size, veggies, meat, special) {
  this.size = size;
  this.veggies = veggies;
  this.meat = meat;
  this.special = special;
}

Pizza.prototype.Price = function() {
  return //figure this out//
}

function resetForm() {
  //figure this out
}







//front-end logic//
$(function){
  $("form#pizza-time").submit(function(event){
    event.preventDefault();
    var pizzaSize = parseInt($("select#pizza-size").val());
    console.log(pizzaSize)
    var veggieTopping = $("input:checkbox[name=topping]:checked").map(function(){
      return $(this).val();
    })console.log(veggieTopping)

  });
});
