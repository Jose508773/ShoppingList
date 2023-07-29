
var button = document.getElementById("Added");
var input = document.getElementById("Add")
var ul = document.querySelector("ul")


function inputLength() {
	return inputvalue.length;

}
 
function createListElement() {
	var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";

}


function addListAfterClick() {
	if (input.value.length > 0 ) {
		createListElement();
}
}


button.addEventListener("click", addListAfterClick)





</script>

</body>
</html>



<script>
  document.addEventListener("DOMContentLoaded", function() {
    var button = document.querySelector(".Added");
    var input = document.querySelector(".Add");
    var ul = document.querySelector("ul");

    button.addEventListener("click", function() {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        li.addEventListener("click", function() {
            // Your logic for handling the click event on the li element
            console.log("li clicked: " + li.textContent);
        });
        ul.appendChild(li);
    });
  });
</script>