$(document).ready(function() {
$("#button").click(function(){
  var gender = $("input:radio[name=gender]:checked").val();
  var age = $("input:radio[name=age]:checked").val();
  var hobby = $("input:radio[name=hobby]:checked").val();




if (age === "under-18") {
  $("#young").show();
}

else if (gender === "male" && age ==="18-to-30" && hobby === "drawing") {
  $("#selena").show();
}

else if (gender === "female" || gender === "male" && age === "30plus" && hobby === "hiking" || hobby === "eating") {
  $("#idris").show();
}


else {
  $("#bey").show();
}

  });
});
