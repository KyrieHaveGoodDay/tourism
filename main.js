// AOS
AOS.init();


// Slick
$('#activity-img ,#activity-winter').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000
});

$(window).scroll(function () {
    var scrollPos = $(window).scrollTop();
    // console.log(scrollPos);
    if (scrollPos > 630) {
        $('#number .progress-bar').each(function () {
            var thisValue = $(this).data('progress');
            // console.log(thisValue);
            $(this).css('width', thisValue + "%");
        })
    }
})

$('#moveBox').slideUp();

$('#offOn').click(function () {
    $('#moveBox').slideToggle('slow');
})


// firebase
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyDCTiHQnxVUupoKOPzoyxdUG7SK_oyUSf8",
    authDomain: "tourism-f6b19.firebaseapp.com",
    databaseURL: "https://tourism-f6b19-default-rtdb.firebaseio.com",
    projectId: "tourism-f6b19",
    storageBucket: "tourism-f6b19.appspot.com",
    messagingSenderId: "641087511728",
    appId: "1:641087511728:web:2ddde917cb0419b0862f75",
    measurementId: "G-35CGN0LZ8Y"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
// 第一層資料表
var todos = firebase.database().ref('videos');
// 第一層按鈕
var bn_send = document.getElementById('bn_send');

// 將資料存入資料庫
bn_send.addEventListener('click',function(e){
    e.preventDefault();
    var video = document.getElementById('video').value;
    var text1 = document.getElementById('text1').value;
    var text2 = document.getElementById('text2').value;
    
    todos.set({
        video:video,
        text1:text1,
        text2:text2
    });
    $('#banner_setting')[0].reset();
});

// 第二層左邊
var todos_left = firebase.database().ref('ViewLeft');
// 按鈕
var send_left = document.getElementById('send_left');

// 將資料寫入資料庫
send_left.addEventListener('click',function(e){
    e.preventDefault();
    var images_left = document.getElementById('images_left').value;
    var text1_left = document.getElementById('text1_left').value;
    var text2_left = document.getElementById('text2_left').value;
    
    todos_left.set({
        video:images_left,
        text1:text1_left,
        text2:text2_left
    })
    $('#view_left')[0].reset();
    
});

// 第二層中間
var todos_min = firebase.database().ref('ViewMin');
// 按鈕
var send_min = document.getElementById('send_min');

// 將資料寫入資料庫
send_min.addEventListener('click',function(e){
    e.preventDefault();
    var images_min = document.getElementById('images_min').value;
    var text1_min = document.getElementById('text1_min').value;
    var text2_min = document.getElementById('text2_min').value;
    
    todos_min.set({
        video:images_min,
        text1:text1_min,
        text2:text2_min
    })
    $('#view_min')[0].reset();
    
});

// 第二層右邊
var todos_right = firebase.database().ref('ViewRight');
// 按鈕
var send_right = document.getElementById('send_right');

// 將資料寫入資料庫
send_right.addEventListener('click',function(e){
    e.preventDefault();
    var images_right = document.getElementById('images_right').value;
    var text1_right = document.getElementById('text1_right').value;
    var text2_right = document.getElementById('text2_right').value;
    
    todos_right.set({
        video:images_right,
        text1:text1_right,
        text2:text2_right
    })
    $('#view_right')[0].reset();
    
});




