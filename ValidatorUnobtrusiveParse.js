// I didn't find a concrete answer to this problem and reached this conclusion after reading numerous posts about $.validator.unobtrusive.parse
$(document).ready(function() {
	$('#your-form').removeData('validator');
	$.validator.unobtrusive.parse('#your-form');
	
	if ($('#your-form').valid()) {
		$('#your-form').attr('action', 'controller-method').submit();
	}
});