$(document).ready(function(){var e=$("[data-nav-button]"),s=$("[data-close-nav]"),a=$("[data-nav-button-span]"),o=$("[data-nav]"),l=$("body");e.on("click",function(){a.toggleClass("is-opened"),o.toggleClass("is-opened"),s.toggleClass("is-opened"),l.toggleClass("is-lockedOnMobile")}),s.on("click",function(){a.removeClass("is-opened"),o.removeClass("is-opened"),s.removeClass("is-opened"),l.removeClass("is-lockedOnMobile")});var n=$("[data-logo-svg]");$("header");$(window).scroll(function(){$(this).scrollTop()>100?(n.addClass("is-decreased"),o.addClass("is-openedSmallHeader")):(n.removeClass("is-decreased"),o.removeClass("is-openedSmallHeader"))}),$("[data-filters-btn]").on("click",function(){$("[data-filters]").toggleClass("is-visible")})});