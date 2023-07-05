let firstname=document.querySelector('#first');
let lastname=document.querySelector('#last');
let telephone=document.querySelector('#tele');
let citymoll=document.querySelector('#city');
let email=document.querySelector('#email');
let textarea=document.querySelector('#area');
let btn=document.querySelector('#boto');
let inputs = document.querySelectorAll("input");
let area = document.querySelectorAll("textarea");
let ulis = document.querySelectorAll("#ulli");
let one = ulis[0].children[0].children[0];
let two = ulis[0].children[1].children[0];
let tree = ulis[0].children[2].children[0];
let four = ulis[0].children[3].children[0];
let five = ulis[0].children[4].children[0];
let six = ulis[0].children[5].children[0];
let i=0;
let array=[];
btn.addEventListener('click',(e)=>{
e.preventDefault()
    let users={
        id:[i++],
        firstname:first.value,
        lastname:last.value,
        phone:tele.value,
        city:city.value,
        email:email.value,
        textarea:textarea.value
    }
    array.push(users)
    localStorage.setItem('users', JSON.stringify(array))
    inputs.forEach((input) => (input.value = ""));
    area.forEach((textarea) => (textarea.value = ""));
    const userData = JSON.parse(localStorage.getItem('users'));
    one.innerHTML=userData[0].firstname;
    two.innerHTML=userData[0].lastname;
    tree.innerHTML=userData[0].phone;
    four.innerHTML=userData[0].city;
    five.innerHTML=userData[0].email;
    six.innerHTML=userData[0].textarea;
});
let dele = document.getElementById('botom');
dele.addEventListener('click', (event)=>{
    event.preventDefault()
    localStorage.removeItem("users");
    one.innerHTML= "";
    two.innerHTML= "";
    tree.innerHTML= "";
    four.innerHTML= "";
    five.innerHTML= "";
    six.innerHTML= "";
});

$("#Top").on("click", function(){
    $(document.documentElement, document.body).animate({
        scrollTop:0},
    1000);
});

$("#document").ready(function(){
    var counter = 30;
window.setInterval(function(){
 counter = counter - 1;
  if(counter>=0){
    document.getElementById('off').innerHTML=counter;
  }
  if (counter===0){
    $("#document").remove();
  }
  $("#here").load(window.location.href + " #here" );
}, 1000);
});

$("#offline").click(function(){
    $("#document").remove();
});