(function() {
"use strict";

var state = document.getElementById('s-state');

document.addEventListener('DOMContentLoaded', function() {
	document.getElementById('cart-hplus').addEventListener('submit', estimateTotal);
	
	var btnEstimate = document.getElementById('btn-estimate');
	
	btnEstimate.disabled = true;
	
	state.addEventListener('change', function() {
	
		if (state.value === '') {
			btnEstimate.disabled = true;
		} else {
			btnEstimate.disabled = false;
		}
	
	});
});

function estimateTotal(event) {
	event.preventDefault();
	
	if (state.value === '') {
		alert('Please choose your shipping state.');
		
		state.focus();
	}

	var itemHoodie = document.getElementById('txt-q-hoodie').value,
		itemSocks = document.getElementById('txt-q-socks').value,
		itemWatch  = document.getElementById('txt-q-watch').value;
		

	var totalQty = itemHoodie + itemSocks +itemWatch,
		estimate;

	estimate =(125 * itemHoodie) + (15 * itemSocks) + (230 * itemWatch)

	document.getElementById('txt-estimate').value = estimate;
}

})();