$(document).ready(function () {
	stickyNavi();
	stickyArrowScrollTop();
	loginBox();
	var config={
		'.chzn-select': {},
		'.chzn-select-deselect': {allow_single_deselect: true},
		'.chzn-select-no-single': {disable_search_threshold: 10},
		'.chzn-select-no-results': {no_results_text: 'Oops, nothing found!'},
		'.chzn-select-width': {width: "95%"}
	};
	for (var selector in config) {
		$(selector).chosen(config[selector]);
	}
});

function loginBox() {
	$('div#login').on('click', function (event) {
		event.preventDefault();
		var box=$('#loginbox');
		if (box.css('display')!=='block') {
			$('#loginbox').load(loginUrl+" #login-form", function (data) {
				parseScript(data);
				initCss();
				box.slideToggle(200);
				$('#LoginForm_username').focus();
				boxOpen='#loginbox';
			});
		}
	});
}


function stickyArrowScrollTop() {
	$('#arrow-up-xy').on('click', function () {
		$("html, body").animate({scrollTop: 0}, 600);
		return false;
	});
}

function stickyNavi() {
	var logoBereichHoehe=$("#logobereich").height();
	var werbeBereichHoehe=$("#werbung_superbanner").height();
	var beforeNav=logoBereichHoehe+werbeBereichHoehe;
	var main=$("#main");
	var navibalken=$("#navibalken, #navigation");
	var self=$(this);
	$(window).on('load scroll', function () {
		if (!main.hasClass("stickyContent")) {
			logoBereichHoehe=$("#logobereich, #header").height();
			werbeBereichHoehe=$("#werbung_superbanner").height();
			beforeNav=logoBereichHoehe+werbeBereichHoehe;
		}
		if (self.scrollTop()>beforeNav) {
			main.addClass("stickyContent");
			navibalken.addClass("sticky-navibalken");
		} else {
			main.removeClass("stickyContent");
			navibalken.removeClass("sticky-navibalken");
		}
	});
}