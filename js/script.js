var $txtTextField = document.getElementById("text-field");

var $btnNewItem = document.getElementById("new-item");

var $lstItemsList = document.getElementById("item-list");

var $pFeedback = document.getElementsByClassName("feedback")[0];

var $first = false;

function addItem(){
    var $item = document.createElement("li");
	
    // Check if user entered the value in input text-field.
	if($txtTextField.value !== ""){
		$item.textContent = $txtTextField.value;
		if($first){
			$lstItemsList.appendChild(document.createElement("hr"));
		}
		$first = true;
		$lstItemsList.appendChild($item);
		$pFeedback.innerHTML = "";
		$txtTextField.value = "";
		$txtTextField.focus();
	}else{
		// Print the message nothing entered in the paragraph "feedback"
		$pFeedback.innerHTML = "Nothing entered!!!";
	}
}

// Register function addItem for click event on button.
$btnNewItem.onclick = addItem;
