let navigation = document.querySelector('.navigation');

document.querySelector('#menu').onclick = () => {
    navigation.classList.toggle('active');
    if (header.style.baskground != 'var(--main-color)') {
        header.style.backgroundColor = 'var(--main-color)';
    }
    else {
        header.style.backgroundColor = null;
    }
}

let header = document.querySelector('header');
window.addEventListener('scroll', () => header.classList.toggle('shadow', window.scrollY > 0))

$(document).ready(function(){
    update_amounts();
    $('.qty, .price').on('keyup keypress blur change', function(e){
        update_amounts();
    });
});

function update_amounts(){
    var sum = 0.0;
    $('#cart_table > tbody > tr').each(function(){
        var qty = $(this).find('.qty').val();
        var price = $(this).find('.price').val();
        var amount = (qty*price);
        sum += amount;
        $(this).find('.amount').text('' + amount);
    });
    $('.total').text(sum);
}

var incrementQty;
var decrementQty;
var plusBtn = $(".cart_qty_plus");
var minusBtn = $(".cart_qty_minus");
var incrementQty = plusBtn.click(function(){
    var $n = $(this)
    .parent(".btn_container")
    .find(".qty");
    $n.val(Number($n.val())+1);
    update_amounts();
});
var decrementQty = minusBtn.click(function(){
    var $n = $(this)
    .parent(".btn_container")
    .find(".qty");
    var QtyVal = Number($n.val());
    if (QtyVal > 0){
        $n.val(QtyVal - 1);
    }
    update_amounts();
});