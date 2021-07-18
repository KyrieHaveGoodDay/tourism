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
// 取出資料庫資料
var videos = firebase.database().ref('videos');
videos.once('value', function (snapshot) {
    // console.log(snapshot.val());
    var data = snapshot.val();
    // console.log(data.video);
    var str = '';
    var banner_video = document.getElementById('banner_video');
    str = `<div class="banner-video">
    <video autoplay muted loop data-aos="fade-up" data-aos-duration="1500" data-aos-delay="1000">
        
        <source src="${data.video}" type="video/mp4">
    </video>
</div>
<div class="banner-text">
    <h3 data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="1000">${data.text1} </h3>
    <p data-aos="zoom-in-up" data-aos-duration="1500">${data.text2}</p>
</div>`

banner_video.innerHTML = str;
})


