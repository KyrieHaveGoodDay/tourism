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
// 取值
var MoreLeft = firebase.database().ref('MoreLeft');
MoreLeft.on('value', function (snapshot) {
    // var kyrie_slider = document.get('kyrie-slider');
    var more_arctic = document.getElementsByClassName('more_arctic');
    console.log(more_arctic);
    var str = '';
    var data = snapshot.val();

    str = `
    
    <div class="kyrie-item kyrie-active">
    <img src="${data.img1}" style="object-fit: cover;" alt="arctic">
    <h1>${data.text1}</h1>
    </div>
    <div class="kyrie-item">
        <img src="${data.img2}" style="object-fit: cover;" alt="arctic">
        <h1>${data.text2}</h1>
    </div>
    <div class="kyrie-item">
        <img src="${data.img3}" style="object-fit: cover;" alt="arctic">
        <h1>${data.text3}</h1>
    </div>


    <div id="kyrie-prev"></div>
    <div id="kyrie-next"></div>
    <div id="kyrie-buttons">
        <div class="kyrie-button kyrie-button-active" data-slider-item="1"></div>
        <div class="kyrie-button" data-slider-item="2"></div>
        <div class="kyrie-button" data-slider-item="3"></div>
    </div>
    `;
    more_arctic[0].innerHTML = str;
})