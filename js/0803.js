$(document).ready(function(){

    var pd_price = $(".price span").text(); //문자
    var price = parseFloat(pd_price.replace(",", ""));  //실수
    // console.log(typeof price);

    var pd_count = $(".count .btn input").val();
    // console.log(typeof pd_count); //string
    var count = parseFloat(pd_count);
    // console.log(typeof count);   //number

    var option = 0;

    ////함수////

    function cal_total(){
        $(".count .btn input").val(count);


        var total_price = price * count + option;

        var total_result = total_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");    //공부필요
        $(".total p span").text(total_result);
    };
    
    
    $(".count .btn .plus").click(function(){
        count++;
        cal_total();

        return false;
    });

    $(".count .btn .minus").click(function(){
        if(count == 1){
            
        }else{
            count--;
            cal_total();
        }
        return false;
    });

    $(".opt").change(function(){
        option = parseFloat($(".opt option:selected").attr("price"));

        cal_total();
    });
    
    $(".buy_btn a").eq(1).click(function(){
        $(".dark, .cart").addClass("active");

        var cart_img = $(".left").css("background-image");
        var cart_title = $(".right .title").text();
        var cart_price = $(".total p span").text();
        var cart_option = $(".opt option:selected").text();
        var cart_option_price = $(".opt option:selected").attr("price");
        
        if(cart_option_price == "0"){
            $(".bottom").hide();
        }else{
            $(".bottom").show();            
        }

        $(".cart_img").css("background-image", cart_img);
        $(".cart_info h4").text(cart_title);
        $(".cart_info .cart_price span").text(cart_price);
        $(".bottom p span").text(cart_option);





    });
    $(".dark, .close, .cart_btn li:eq(1)").click(function(){
        $(".dark, .cart").removeClass("active");
    });







});;