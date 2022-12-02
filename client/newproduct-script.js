// Condition of type switcher position
$(document).ready(function(){


$("#productType").change(function() {
  var id = $(this)
    .children(":selected")
    .prop("id");
  if (id === "book_option") {
    // Clear child elements added before
    $("#SwitcherBoxes").empty();
    $("#theCard").removeClass("furniture dvd");
    $("#theCard").addClass("book");

    //Create a div
    var div = $("<div></div>");
	div.addClass("form-floating mb-3");    
    $("#SwitcherBoxes").append(div);

    //Insert textbox and into the div recently created
    $("<input />", {
      type: "text",
      id: "weight",
      value: "",
      name: "weight",
	  required: "true"
    }).addClass('form-control').appendTo(div);
	$('<label for="floatingTextInput4">Weight (Please provide the weight attribute in Kg)</label>').appendTo(div);
  } 
  else if (id === "furniture_option") {
    //Clear child elements added before
    $("#SwitcherBoxes").empty();
    $("#theCard").removeClass("dvd book");
    $("#theCard").addClass("furniture");

    //Create a div
     var div = $("<div></div>");
     $("#SwitcherBoxes").append(div);
 
    //Insert textbox and into the div recently created
	var div1 = $("<div></div>");
	div1.addClass("form-floating mb-3");    //Append the div into "SwitcherBoxes" div
    $("<input />", {
      type: "text",
      id: "height",
      value: "",
      name: "height",
	  required: "true"
    }).addClass('form-control').appendTo(div1);
    $('<label for="floatingTextInput6">Height</label>').appendTo(div1);
	div1.appendTo(div);

    var div2 = $("<div></div>");
    div2.addClass("form-floating mb-3");    //Append the div into "SwitcherBoxes" div
    $("<input />", {
      type: "text",
      id: "width",
      value: "",
      name: "width",
	  required: "true"
    }).addClass('form-control').appendTo(div2);
	$('<label for="floatingTextInput7">Width</label>').appendTo(div2);
    div2.appendTo(div);

    var div3 = $("<div></div>");
    div3.addClass("form-floating mb-3");    
	$("<input />", {
      type: "text",
      id: "length",
      value: "",
      name: "length",
	  required: "true"
    }).addClass('form-control').appendTo(div3);
	$('<label for="floatingTextInput8">Length</label>').appendTo(div3);
    div3.appendTo(div);

    
  } else if (id === "dvd_option") {
    // Clear child elements added before
    $("#SwitcherBoxes").empty();
	$("#theCard").removeClass("furniture book");
    $("#theCard").addClass("dvd");


    //Create a div
    var div = $("<div></div>");
    div.addClass("form-floating mb-3");    
    $("#SwitcherBoxes").append(div);

    //Insert textbox and into the div recently created
    $("<input />", {
      type: "text",
      id: "size",
      value: "",
      name: "size",
	  required: "true"
    }).addClass('form-control').appendTo(div);
    $('<label for="floatingTextInput5">Size (Please provide the size attribute in MB)</label>').appendTo(div);

  }
});

    $('#productType').trigger('change');


});



function Back() {
window.location.href='index.html';}



function PostRequest() {
	

  //Get data from the all inputboxes
  var sku = $("#newProductDiv")
    .find('input[name="sku"]')
    .val();

  var cname = $("#newProductDiv")
    .find('input[name="name"]')
    .val();

  var price = $("#newProductDiv")
    .find('input[name="price"]')
    .val();

  var weight = $("#SwitcherBoxes")
    .find('input[name="weight"]')
    .val();

  var size = $("#SwitcherBoxes")
    .find('input[name="size"]')
    .val();

  var height = $("#SwitcherBoxes")
    .find('input[name="height"]')
    .val();

  var width = $("#SwitcherBoxes")
    .find('input[name="width"]')
    .val();

  var length = $("#SwitcherBoxes")
    .find('input[name = "length"]')
    .val();

  // To use dimensions in HxWxL format
  var dimensions = height + "x" + width + "x" + length;

  // Use given data post to the server
  var obj = {
    sku: sku,
    name: cname,
    price: price,
    weight: weight,
    size: size,
    dimensions: dimensions
  };

  // Make request for save the data
  axios
    .post("http://localhost/test/server/index.php", obj)
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log(error);
    });

}

$(document).on("submit", "#product_form", function(e){
  e.preventDefault();
  PostRequest();
  window.location.replace("index.html");
  // Other code here
});

