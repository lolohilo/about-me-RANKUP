//parallax.js
var parallaxGyro = function () {
    var scene = document.getElementById('scene');
    // var parallaxInstance = 
    new Parallax(scene, {
        clipRelativeInput: true, //要素の端にカーソルが達したら動きを止める
        hoverOnly: true, //カーソルが要素の上にある場合のみ有効
        invertX: true, //X軸の動きを反転。falseにするとマウスと同じ方向に動く
        invertY: true, //Y軸の動きを反転。falseにするとマウスと同じ方向に動く
        limitX: false, //X軸の動きを制限する
        limitY: false, //Y軸の動きを制限する
        scalarX: 10.0, //X軸の移動速度と範囲を増減
        scalarY: 10.0, //Y軸の移動速度と範囲を増減
        frictionX: .1, //X軸のレイヤーの速度。0.00〜1.00の範囲内で指定可能
        frictionY: .1, //Y軸のレイヤーの速度。0.00〜1.00の範囲内で指定可能
        originX: 0.5, //X軸のマウスの初期位置。デフォルトの0.5は画面または要素の中心
        originY: 0.5, //Y軸マウスの初期位置。デフォルトの0.5は画面または要素の中心
    });
    new Parallax($(".scene2").get(0));
    new Parallax($(".scene3").get(0));
    new Parallax($(".scene4").get(0));

}


 
// ジャイロセンサーの有無確認
var isGyro = false;
if ((window.DeviceOrientationEvent)&&('ontouchstart' in window)) {
    isGyro = true;
}
 
//PCなど非ジャイロの場合
if (!isGyro) {
    parallaxGyro();
//ジャイロ持ちデバイス
} else {
    //ジャイロ動作確認
    var resGyro = false;
    window.addEventListener("deviceorientation", doGyro, false);
 
    function doGyro() {
        resGyro = true;
        window.removeEventListener("deviceorientation", doGyro, false);
    }
 
    setTimeout(function () {
        //ジャイロが動作する場合
        if (resGyro) {
            parallaxGyro();
        //ジャイロが動作しない場合
        } else {
            //iOS13以上ならクリックイベントを要求
            if (typeof DeviceOrientationEvent.requestPermission === "function") {
                //ユーザアクションを得るための要素を表示
                $('#request_button').show();
                $('#request_button').on("click", function () {
                    $('#request_button').hide();
                    DeviceOrientationEvent.requestPermission().then(res => {
                        //「動作と方向」が許可された
                        if (res === "granted") {
                            parallaxGyro();
                            //「動作と方向」が許可されなかった
                        } else {
                            isGyro = false;
                            parallaxGyro();
                        }
                    });
                });
            //iOS13以上ではない場合
            } else {
                isGyro = false;
                parallaxGyro();
            }
        }
    }, 300);
}



// scrollify.jQuery
var current;
$.scrollify({
    section:".scrollify",
    setHeights:false,
    scrollbars:false,
    updateHash:false,
    scrollSpeed:800,
    before:function(i,box){
        current = i
        $('.pagenation .active').removeClass('active');
        $('.pagenation').find('a').eq(i).addClass('active'); 
    },              
    afterRender:function(){
        var pagenation = '<ul class="pagenation">';
        $('.scrollify').each(function(i){
            pagenation += '<li><a></a></li>';
        });
        pagenation += '</ul>';
        $('body').append(pagenation);
        $('.pagenation a').each(function(i){
            $(this).on('click',function(){
                $.scrollify.move(i);
            });
        });
        $('.pagenation li:first-child').find('a').addClass('active');
    },
    afterMove:function(){
        var pagenation = '<ul class="pagenation">';
        $('.scrollify').each(function(i){
            pagenation += '<li><a></a></li>';
        });
        pagenation += '</ul>';
        $('body').append(pagenation);
        $('.pagenation a').each(function(i){
            $(this).on('click',function(){
                $.scrollify.move(i);
            });
        });
        $('.pagenation li:first-child').find('a').addClass('active');
    },
});
$(window).on('resize',function(){
    if(current){
        var currentScrl = $('.scrollify').eq(current).offset().top;
        $(window).scrollTop(currentScrl);
    }
});