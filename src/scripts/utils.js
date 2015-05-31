$(function(){
	// Title Page
	$('title').html($('#list-menu a:first').attr('data-name'));
	
	// First link iframe
	$('iframe').attr
	({
		'src': $('#list-menu a:first').attr('href')
	});
	
	// size iframe
	var resizeFrame = function()
	{
		var w = $(window).width(),
			h = $(window).height();
			
		$('iframe').css
		({
			'width': w + 'px',
			'height': h + 'px'
		});
	};
	resizeFrame();
	$(window).bind(
	{
			resize: function()
			{
				resizeFrame();
			}
	});

	// Link functions
	
	// verification hide menu
	if ($('#list-menu a').length <= 1){
		$('#wrap-menu').hide();
	}
	
	// Add link active first link
	$('#list-menu a:first').addClass('active');
	
	// Verifications links all
	$('#list-menu a').each(function()
	{
		var self = $(this),
			selfName = self.data('name');
		
		// name length
		if (selfName.length > 8)
		{
			namePage = selfName.substring(0,8) + ' ...'
		}else
		{
			namePage = selfName;
		}
		
		// Text link
		for (var i = 0; i < selfName.length; i++) {
			self.html(selfName[0])
		}
		
		// Create span
		$('<span />',{
			'html': namePage
		}).appendTo(self);
		
	});

	// hover menu
	var hMenu = $('#list-menu').outerHeight();
	
	//position menu
	$('#list-menu').css
	({
		'top':'-'+ hMenu +'px'
	});
	
	$('#wrap-menu').bind
	({
		mouseenter: function()
		{
			$('#bt-menu').addClass('active');
			$('#list-menu').css
			({
				'visibility':'visible'
			});
			$('#list-menu a').each(function(e)
			{
				$(this).stop(false,true).animate
				({
					'opacity':'1'
				}, 200 * e);
			});
			[].reverse.call($('#list-menu a')).appendTo('#list-menu');
		},
		mouseleave: function()
		{
			$('#bt-menu').removeClass('active');
			$('#list-menu').css
			({
				'visibility':'hidden'
			});
			$('#list-menu a').each(function(e)
			{
				$(this).stop(false,true).animate
				({
					'opacity':'0'
				}, 200 * e);
			});
			[].reverse.call($('#list-menu a')).appendTo('#list-menu');
		}
	});
	
	// hover link menu
	$('#list-menu a').bind
	({
		click: function()
		{
			var self = $(this);
			
			$('#list-menu a').removeClass('active');
			self.addClass('active');
			
			// title page
			$('title').html(self.attr('data-name'));
		},
	});
});
