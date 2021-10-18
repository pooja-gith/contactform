function sendMail(params) {
    var tempParams ={
        from_name:document.getElementById("fronName").value,
        to_name:document.getElementById("toName").value,
        message:document.getElementById("msg").value,
    };
    emailjs.send('gmail',template_9t9ji7n,tempParams)
    .then(function(res){
        console.log("success", res.status);
    })
}