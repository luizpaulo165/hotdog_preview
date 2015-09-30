var Application;

Application = {
	init: function () {
		this.iframePage();
		this.menu();
		this.switchPage();
		this.callMenu();
	},

	//IframePage
	iframePage: function () {
		// size iframe
		var resizeFrame = function() {
			var w = $(window).width(),
			h = $(window).height();

			$('iframe').css
			({
				'width': w + 'px',
				'height': h + 'px'
			});
		};
		resizeFrame();

		$(window).bind({
			resize: function(){
				resizeFrame();
			}
		});
	},

	// Menu
	menu: function () {
		// Wrap Menu
		var divWrapLinks = $('<div />', {
			'id': 'wrapLinks'
		}).appendTo($('body'));
		var divWrapLinks = $('<div />', {
			'id': 'linksGroups',
			'html': '<div class="wrapListLinksPages"></div>'
		}).appendTo($('#wrapLinks'));


		//  create links
		$.getJSON( "menu/menu.json", function( data ){
			var items = [],
			firstPage = data[0].page;

			// First link iframe
			$('iframe').attr({
				'src': 'view/' + firstPage + '.html'
			});

			$.each( data, function( val, item ){
				var titleLink = item.title,
				linkPage = item.page,
				descPage = item.description,
				namePage = "",
				linkName = "";

		    // Text link
		    for (var i = 0; i < linkPage.length; i++) {
		    	linkName = linkPage[0];
		    }

		    // name length
		    if (titleLink.length > 8){
		    	namePage = linkPage.substring(0,8) + ' ...'
		    }else{
		    	namePage = linkPage;
		    }

		    // create element list
		    var linksElem = $('<div />',{
		    	'class': 'listLinks',
		    	'data-link': linkPage,
		    	'html':'<span class="idPage">'+ linkName +'</span> <span class="titlePage">'+ titleLink +'</span> <p>'+ descPage +'</p> <span class="bullet"></span>'
		    });

		    // create links
		    items.push( linksElem );

		  });

		  // Print links html
		  $('#linksGroups .wrapListLinksPages').html(items);
		  $('#list-menu').find('a:first').addClass('active');

		  // active first element list
			$('.listLinks:first').addClass('active');

			// Title Page First Page
			$('title').html($('.titlePage:first').text());
		});
},

	// SwitchPage
	switchPage: function () {
		$(document).on('click','.listLinks', function (){
			var self = $(this),
			selfLink = self.data('link'),
			selfTitle = self.find('.titlePage');

			// active page
			$('.listLinks').removeClass('active');
			self.addClass('active');

			// First link iframe
			$('iframe').attr({
				'src': 'view/'+ selfLink +'.html'
			});

			// Title Page First Page
			$('title').html(selfTitle.text());

			// Close menu
			$('#wrapLinks, #wrap-menu, #wrap-menu #bt-menu').removeClass('active');
		});
	},

	// CallMenu
	callMenu: function (){
		$('#wrap-menu').click(function (){
			if ($('#wrapLinks').hasClass('active')) {
				$('#wrapLinks').removeClass('active');
				$(this).removeClass('active');
				$(this).find('#bt-menu').removeClass('active');
			}else{
				$('#wrapLinks').addClass('active');
				$(this).addClass('active');
				$(this).find('#bt-menu').addClass('active');
			}
		});
	}

}
// End App
$(document).ready(function (){
	Application.init();
});
