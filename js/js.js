
// $('.page-scroll').on('click', function(e){

//     var tujuan = $(this).attr('href');

//     var elemenTujuan = $(tujuan);

//     $('body').animate({
//         scrollTop: elemenTujuan.offset().top - 50
//     });

//     e.preventDefault();
// });



$('.page-scroll').on('click', function(event){
    if (this.hash !== ''){
        event.preventDefault();

        const hash = this.hash;
        $('html,body').animate({
            scrollTop: $(hash).offset().top - 60
        },40000);
    }
   
});