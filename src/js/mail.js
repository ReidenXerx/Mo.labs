import jQuery from 'jquery';

export default function Mail() {
	jQuery(".submit-message").hide();
	jQuery(document).ready(function() {
		//E-mail Ajax Send

		jQuery("#mailform").submit(function(e) { //Change
			e.preventDefault();
			var th = jQuery(this);

			jQuery.ajax({
				type: "POST",
				url: "/mail.php",
				contentType: "application/json; charset=utf-8", 
				data: th.serialize()
			}).done(function() {
				jQuery(".submit-message").show();
				setTimeout(function() { jQuery(".submit-message").fadeOut('slow'); }, 1500);
				}, 2000);
			});
			return false;
		});

}
