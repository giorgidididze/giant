let boom=document.querySelectorAll("#butt");
let pai=document.querySelectorAll("#para");
let del=document.querySelectorAll("#buti");
for(let i=0; i<boom.length; i++){
    boom[i]==pai[i]
    boom[i].addEventListener('click', function stop() {
        pai[i].classList.remove('hide');
        boom[i].style.color="#4054B2"; 
        boom[i].style.borderBottom="none";
        this.removeEventListener("click", stop);
    })
    del[i].addEventListener('click', ()=> {
        pai[i].classList.add('hide');
        boom[i].style.color="#a59d9d"; 
    })
};


var expandCollapse = function(){
    if ( $(window).width() < 768 ) {
        $(function(){
            $('.menus').removeClass('hide');
            $('.menu').addClass('hide');
            $('.social').addClass('hide');
            $('#header').addClass('stole');
        });
    }
    else if($(window).width() > 768 ){
        $(function(){
            $('.menus').addClass('hide');
            $('.menu').removeClass('hide');
            $('.social').removeClass('hide');
            $('#header').removeClass('stole');
            $('.mono').addClass('hide');
        });
    }
}
$(window).resize(expandCollapse); 

$(document).ready(function() {
    $('.menus').click(function() {
        $('.mono').removeClass('hide');
        $(".mono").animate({width: "toggle", height: "30px"});
            });
});
