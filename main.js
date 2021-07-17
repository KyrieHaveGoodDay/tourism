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
        img:images_left, 
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
        img:images_min, 
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
        img:images_right, 
        text1:text1_right,
        text2:text2_right
    })
    $('#view_right')[0].reset();
    
});

// more之後的照片 左邊
var todos_more_left = firebase.database().ref('MoreLeft');
// 按鈕
var send_more_left = document.getElementById('send_more_left');

// 將資料寫入資料庫
send_more_left.addEventListener('click',function(e){
    e.preventDefault();
    var more_left_img1 = document.getElementById('more_left_img1').value;
    var more_left_text1 = document.getElementById('more_left_text1').value;
    var more_left_img2 = document.getElementById('more_left_img2').value;
    var more_left_text2 = document.getElementById('more_left_text2').value;
    var more_left_img3 = document.getElementById('more_left_img3').value;
    var more_left_text3 = document.getElementById('more_left_text3').value;
    
    todos_more_left.set({
        img1:more_left_img1,
        text1:more_left_text1,
        img2:more_left_img2,
        text2:more_left_text2,
        img3:more_left_img3,
        text3:more_left_text3
    })
    $('#view_more_left')[0].reset();
    
});
// more之後的照片 中間
var todos_more_min = firebase.database().ref('MoreMin');
// 按鈕
var send_more_min = document.getElementById('send_more_min');

// 將資料寫入資料庫
send_more_min.addEventListener('click',function(e){
    e.preventDefault();
    var more_min_img1 = document.getElementById('more_min_img1').value;
    var more_min_text1 = document.getElementById('more_min_text1').value;
    var more_min_img2 = document.getElementById('more_min_img2').value;
    var more_min_text2 = document.getElementById('more_min_text2').value;
    var more_min_img3 = document.getElementById('more_min_img3').value;
    var more_min_text3 = document.getElementById('more_min_text3').value;
    
    todos_more_min.set({
        img1:more_min_img1,
        text1:more_min_text1,
        img2:more_min_img2,
        text2:more_min_text2,
        img3:more_min_img3,
        text3:more_min_text3
    })
    $('#view_more_min')[0].reset();
    
});
// more之後的照片 右邊
var todos_more_right = firebase.database().ref('MoreRight');
// 按鈕
var send_more_right = document.getElementById('send_more_right');

// 將資料寫入資料庫
send_more_right.addEventListener('click',function(e){
    e.preventDefault();
    var more_right_img1 = document.getElementById('more_right_img1').value;
    var more_right_text1 = document.getElementById('more_right_text1').value;
    var more_right_img2 = document.getElementById('more_right_img2').value;
    var more_right_text2 = document.getElementById('more_right_text2').value;
    var more_right_img3 = document.getElementById('more_right_img3').value;
    var more_right_text3 = document.getElementById('more_right_text3').value;
    
    todos_more_right.set({
        img1:more_right_img1,
        text1:more_right_text1,
        img2:more_right_img2,
        text2:more_right_text2,
        img3:more_right_img3,
        text3:more_right_text3
    })
    $('#view_more_right')[0].reset();
    
});

// 活動 左邊
var todos_activity_left = firebase.database().ref('ActivityLeft');
// 按鈕
var send_activity_left = document.getElementById('send_activity_left');

// 將資料寫入資料庫
send_activity_left.addEventListener('click',function(e){
    e.preventDefault();
    var activity_left_img1 = document.getElementById('activity_left_img1').value;
    var activity_left_img2 = document.getElementById('activity_left_img2').value;
    var activity_left_img3 = document.getElementById('activity_left_img3').value;
    var activity_left_text1 = document.getElementById('activity_left_text1').value;
    var activity_left_text2 = document.getElementById('activity_left_text2').value;
    
    
    todos_activity_left.set({
        img1:activity_left_img1,
        img2:activity_left_img2,
        img3:activity_left_img3,
        text1:activity_left_text1,
        text2:activity_left_text2
    })
    $('#activity_left')[0].reset();
    
});
// 活動 右邊
var todos_activity_right = firebase.database().ref('ActivityRight');
// 按鈕
var send_activity_right = document.getElementById('send_activity_right');

// 將資料寫入資料庫
send_activity_right.addEventListener('click',function(e){
    e.preventDefault();
    var activity_right_img1 = document.getElementById('activity_right_img1').value;
    var activity_right_img2 = document.getElementById('activity_right_img2').value;
    var activity_right_img3 = document.getElementById('activity_right_img3').value;
    var activity_right_text1 = document.getElementById('activity_right_text1').value;
    var activity_right_text2 = document.getElementById('activity_right_text2').value;
    
    
    todos_activity_right.set({
        img1:activity_right_img1,
        img2:activity_right_img2,
        img3:activity_right_img3,
        text1:activity_right_text1,
        text2:activity_right_text2
    })
    $('#activity_right')[0].reset();
    
});
