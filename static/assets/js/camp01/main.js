$(document).ready(main);

function main(){
$(function() {
    $('.nav a').on('click', function(){ 
        if($('.navbar-toggle').css('display') !='none'){
            $(".navbar-toggle").trigger( "click" );
        }
    });
});

$('.selectpicker').selectpicker();
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
    $('.selectpicker').selectpicker('mobile');
}
$('.fancybox-media').fancybox({
	openEffect: 'elastic',
	closeEffect: 'elastic',
	helpers: {
		title: {
			type: 'inside'
		}
	}
});

    if (jQuery(window).width() > 640) {
        jQuery('a').click(function(e) {
				var self = this;
                //e.preventDefault();
                ga('send', 'event', 'click', {
                    page: location.pathname+location.hash,
                    title: jQuery(this).text(),
                    hitCallback: function() {
    					 //window.location=jQuery(self).attr('href');
  					},
					useBeacon: true
                });
        });
        ga('send', 'pageview', {
            page: location.pathname+location.hash,
            title: document.title
        });
    } else {
        jQuery('a').click(function(e) {
				var self = this;
                //e.preventDefault();
                ga('send', 'event', 'mobile_click', {
                    page: location.pathname+location.hash,
                    title: jQuery(this).text(),
                    hitCallback: function() {
    					 //window.location=jQuery(self).attr('href');
  					},
					useBeacon: true
                });
        });
        ga('send', 'pageview', {
            page: location.pathname+location.hash,
            title: document.title
        });

    }

$(".quantity").keypress(function (e) {
     //if the letter is not digit then display error and don't type anything
     if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
               return false;
    }
   });

function countM(){
	for (var i=1;i<17; ++i)
	$('.g'+i).val($('.c'+i).val());
	var m = 0;
	for (var i=1;i<17;++i)
		m+=parseInt($('.c'+i).val()==''?"0":$('.c'+i).val());
	$('#totalM').text(m*15);
	$('#tm').val(m*15);
	$('#totalC').text(m);
	$('#tc').val(m);
}

function resetAll(){
for (var i=1;i<17;++i)
$('.c'+i).val(0)
$('#cname').val('');
$('#cmail').val('');
$('#cphone').val('');
$('#cadv').val('');
$('#caddr').val('');
}

for (var i=1; i<17; ++i)
$('#c'+i).change(function(){
	$('.'+$(this).attr('id')).val($(this).val());
	countM();
});

for (var i=1; i<17; ++i)
$('.c'+i).change(countM);


function rcard(n){
for (var i=1;i<17;++i)$('.c'+i).val(0);
for (var i=0;i<n;++i){
  $('.c'+(i%16+1)).val(parseInt($('.c'+(i%16+1)).val())+1);
}
}

$('#rcard').click(function(){
	rcard(parseInt($('#rnum').val()));
	countM();
});

$('#send').click(function(){
	if ($('#cname').val()==''){
		alert('請填入姓名！');return;
	}
	if ($('#cmail').val()==''){
		alert('請填入Email！');return;
	}
	if ($('#cphone').val()==''){
                alert('請填入電話！');return;
        }
	if ($('#caddr').val()==''){
                alert('請填入收貨地址！');return;
        }
	$('#name').val($('#cname').val());
	$('#mail').val($('#cmail').val());
	$('#tel').val($('#cphone').val());
	$('#adv').val($('#cadv').val());
	$('#addr').val($('#caddr').val());
	$('body').waitMe({ effect : 'bounce', text : '', bg : 'rgba(255,255,255,0.7)', color : '#000', sizeW : '', sizeH : '', source : '' });
	$('#ss-form').submit();
	resetAll();
});

setTimeout(function(){
$('#gPostIframe').load(function(){
	alert('我們收到您的訂購囉！謝謝您的愛心支持。');
	$('body').waitMe("hide");
	resetAll();
	window.location.href='https://www.facebook.com/DailyHeroTeam';
});
},4000);

for (var i=1;i<17;++i){
	$('#c'+i).val(1);
	$('#c'+i).trigger('change');
}
$('.selectpicker').selectpicker('render');

}
