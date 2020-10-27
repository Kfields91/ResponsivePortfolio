$(document).ready(function(){
    $(".btn-primary").click(function (event){
        console.log(event, "click");
        
        let name = $("#formGroupExampleInput").val();
        let email = $("#formGroupExampleInput2").val();
        let message = $("#exampleFormControlTextarea1").val();
        let statusEl = $("<div>");
        
        if(name.length > 1) {
            console.log('valid name')
        }else {
            event.preventDefault();
            console.log('invalid name');
        }

        if(email.length > 5 && email.includes('@') && email.includes(".")) {
            console.log('valid email');
        } else {
            event.preventDefault();
            console.log('invalid email');
        }
        if(message.length >= 10) {
            console.log("valid message")
        } else {
            event.preventDefault();
            console.log('invalid message');
        }
    })
})