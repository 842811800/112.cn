//---------- ��������֤
jQuery( function() {
	var searchTxt = jQuery("#search input:text[name='kws']").val();
	jQuery("#search").submit( function() {
		var s_searchTxt = jQuery(this).find("input:text[name='kws']").val();
		if ( s_searchTxt == "" || s_searchTxt == searchTxt || s_searchTxt == "�����������ؼ���" ) {
			jQuery(this).find("input:text[name='kws']").val("�����������ؼ���");
			return false;
		}
	} ).find("input:text[name='kws']").focus( function() {
		var s_searchTxt = jQuery(this).val();
		if ( s_searchTxt == searchTxt || s_searchTxt == "�����������ؼ���" ) {
			jQuery(this).val("");
		}
	} ).blur( function() {
		var s_searchTxt = jQuery(this).val();
		if ( s_searchTxt == "" || s_searchTxt == "�����������ؼ���" ) {
			jQuery(this).val(searchTxt);
		}
	} );
} );