// AOS
AOS.init();

// Slick
$('#activity-img ,#activity-winter').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000
});

// 滾輪特效
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
// 取出video資料庫資料  2021/07/18 發現不能跟特效aos一起使用
var videos = firebase.database().ref('videos');
videos.on('value', function (snapshot) {
    // console.log(snapshot.val());
    var data = snapshot.val();
    // console.log(data.video);
    var str = '';
    var banner_video = document.getElementById('banner_video');
    str = `<div class="banner-video">
    <video autoplay muted loop >
        
        <source src="${data.video}" type="video/mp4">
    </video>
</div>
<div class="banner-text">
    <h3>${data.text1} </h3>
    <p>${data.text2}</p>
</div>`;

banner_video.innerHTML = str;
})


// 景點區gui
// 左邊
var ViewLeft = firebase.database().ref('ViewLeft');
ViewLeft.on('value' , function(snapshot){
    // console.log(snapshot.img);
    var data = snapshot.val();
    // console.log(data.img);
    var view_left = document.getElementById('view_left');
    var str = '';
    str= ` <img src="${data.img}" data-aos="flip-left" data-aos-duration="2000"
    data-aos-delay="1000" data-aos-anchor-placement="top-bottom" data-aos-once="true" alt="">
<h2 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1000"
    data-aos-anchor-placement="top-bottom" data-aos-once="true">${data.text1}</h2>
<p data-aos="fade-down" data-aos-duration="2000" data-aos-delay="1500"
    data-aos-anchor-placement="top-bottom" data-aos-once="true">${data.text2}</p>
<a class="all-a" href="./Arctic/" target="_blank">MORE</a>`;

view_left.innerHTML = str;
});
// 中間
var ViewMin = firebase.database().ref('ViewMin');
ViewMin.on('value' , function(snapshot){
    // console.log(snapshot.img);
    var data = snapshot.val();
    // console.log(data.img);
    var view_min = document.getElementById('view_min');
    var str = '';
    str= ` <img src="${data.img}" data-aos="flip-left" data-aos-duration="2000"
    data-aos-delay="1000" data-aos-anchor-placement="top-bottom" data-aos-once="true" alt="">
<h2 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1000"
    data-aos-anchor-placement="top-bottom" data-aos-once="true">${data.text1}</h2>
<p data-aos="fade-down" data-aos-duration="2000" data-aos-delay="1500"
    data-aos-anchor-placement="top-bottom" data-aos-once="true">${data.text2}</p>
    <a class="all-a" href="./Cable/" target="_blank">MORE</a>`;

    view_min.innerHTML = str;
});
// 右邊
var ViewRight = firebase.database().ref('ViewRight');
ViewRight.on('value' , function(snapshot){
    // console.log(snapshot.img);
    var data = snapshot.val();
    // console.log(data.img);
    var view_right = document.getElementById('view_right');
    var str = '';
    str= ` <img src="${data.img}" data-aos="flip-left" data-aos-duration="2000"
    data-aos-delay="1000" data-aos-anchor-placement="top-bottom" data-aos-once="true" alt="">
<h2 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1000"
    data-aos-anchor-placement="top-bottom" data-aos-once="true">${data.text1}</h2>
<p data-aos="fade-down" data-aos-duration="2000" data-aos-delay="1500"
    data-aos-anchor-placement="top-bottom" data-aos-once="true">${data.text2}</p>
    <a class="all-a" href="./Beer/" target="_blank">MORE</a>`;

    view_right.innerHTML = str;
});



