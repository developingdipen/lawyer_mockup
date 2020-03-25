document.getElementById("state").disabled = false;
document.getElementById("city").disabled = true;
document.getElementById("category").disabled = true;
   
var dis1 = document.getElementById("state");
dis1.onchange = function () {
   if (this.value != "state" || this.value.length > 0) {
      document.getElementById("city").disabled = false;
     
   }
}

var dis1 = document.getElementById("city");
dis1.onchange = function () {
   if (this.value != "city" || this.value.length > 0) {
      document.getElementById("category").disabled = false;
     
   }
}