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
    })
})



