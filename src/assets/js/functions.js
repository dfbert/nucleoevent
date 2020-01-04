
import jQuery from "jquery";
export default {
	menu_dropdown_open: function () {
		var width = jQuery(window).width();
		if (jQuery(".ownavigation .navbar-nav li.ddl-active").length) {
			if (width > 991) {
				jQuery(".ownavigation .navbar-nav > li").removeClass("ddl-active");
				jQuery(".ownavigation .navbar-nav li .dropdown-menu").removeAttr("style");
			}
		} else {
			jQuery(".ownavigation .navbar-nav li .dropdown-menu").removeAttr("style");
		}
	},

	/* + Sticky Menu* */
	sticky_menu: function () {
		if (jQuery(".header-fix").length) {
			var menu_scroll = jQuery("body").offset().top;
			var scroll_top = jQuery(window).scrollTop();
			var height = jQuery(window).height();
			var body_height = jQuery("body").height();
			var header_height = jQuery(".header-fix").height();
			var a = height + header_height + header_height;
			if (body_height > a) {
				if (scroll_top > menu_scroll) {
					jQuery(".header-fix").addClass("fixed-top animated fadeInDown");
					jQuery("body").css("padding-top", header_height);
				} else {
					jQuery(".header-fix").removeClass("fixed-top animated fadeInDown");
					jQuery("body").css("padding-top", "0");
				}
			} else {
				jQuery(".header-fix").removeClass("fixed-top animated fadeInDown");
				jQuery("body").css("padding-top", "0");
			}
		}
	},


	/* + Document On Ready */
	ready: function () {
		this.sticky_menu();

		/* - Responsive Caret* */
		jQuery(".ddl-switch").on("click", function () {
			var li = jQuery(this).parent();
			if (li.hasClass("ddl-active") || li.find(".ddl-active").length !== 0 || li.find(".dropdown-menu").is(":visible")) {
				li.removeClass("ddl-active");
				li.children().find(".ddl-active").removeClass("ddl-active");
				li.children(".dropdown-menu").slideUp();
			}
			else {
				li.addClass("ddl-active");
				li.children(".dropdown-menu").slideDown();
			}
		});
		jQuery(".navbar-toggler").on("click", function () {
			var nav = jQuery(this).parent();
			var target = jQuery(this).data("target");
			var toggle = jQuery(this).data("toggle");
			jQuery(target, nav).toggleClass(toggle);
		});

		setTimeout(() => {
			jQuery("body").addClass("loaded");
		}, 1000)
	},
}