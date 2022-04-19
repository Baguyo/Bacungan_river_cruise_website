// name
// email
// contact_number
// number_of_guest

// type_of_service
// date_of_arrival


// var sendReservation = document.getElementById("sendReservation");
// sendReservation.addEventListener("click", function(){
//     var name = document.getElementById("name");
//     var email = document.getElementById("email");
//     var contact_number = document.getElementById("contact_number");

//     var e = document.getElementById("type_of_service");
//     var selectedEquipmentDropdown = e.options[e.selectedIndex].value;

//     var date_of_arrival = document.getElementById("date_of_arrival");


//     // console.log(name.value);
//     // console.log(email.value);
//     // console.log(contact_number.value);
//     // console.log(date_of_arrival.value);
//     // console.log(type_of_service.value);
//     alert(selectedEquipmentDropdown);
    
// })

    //VANILLA 
    
    


            //JQUERY FAILS
    // QUICK RESERVATION
    var sendReservation = $("#sendReservation");
    sendReservation.submit(function () { 
        
        console.log("sending");
        let name = $("#name");
        let email = $("#email");
        let contact_number = $("#contact_number");
        let number_of_guest = $("#number_of_guest");
        let date_of_arrival = $("#date_of_arrival");
        let service = document.getElementById("type_of_service");
        let selectedService = service.options[service.selectedIndex].value;
        // alert(selectedService);
        

        if(isValid(name) && isValidEmail(email) && isValid(contact_number) && isValid(number_of_guest)
          && isValid(date_of_arrival) ) {
            return true;
        }else{
            return false;
        }
    });

    //RESERVATION MADE IN SERVICE PAGE
    var sendReservation1 = $("#sendReservation1");
    sendReservation1.submit(function () { 
        
        console.log("sending");
        let name = $("#name1");
        let email = $("#email1");
        let contact_number = $("#contact_number1");
        let number_of_guest = $("#number_of_guest1");
        let date_of_arrival = $("#date_of_arrival1");
        let service = document.getElementById("type_of_service1");
        let selectedService = service.options[service.selectedIndex].value;
        
        

        if(isValid(name) && isValidEmail(email) && isValid(contact_number) && isValid(number_of_guest)
          && isValid(date_of_arrival) ) {
           return true;
        }else{
            false;
        }
    });


    var sendReservation2 = $("#sendReservation2");
    sendReservation2.submit(function () { 
        
        console.log("sending");
        let name = $("#name2");
        let email = $("#email2");
        let contact_number = $("#contact_number2");
        let number_of_guest = $("#number_of_guest2");
        let date_of_arrival = $("#date_of_arrival2");
        let service = document.getElementById("type_of_service2");
        let selectedService = service.options[service.selectedIndex].value;
        
        

        if(isValid(name) && isValidEmail(email) && isValid(contact_number) && isValid(number_of_guest)
          && isValid(date_of_arrival) ) {
           return true;
        }else{
            return false;
        }
    });


    var sendReservation3 = $("#sendReservation3");
    sendReservation3.submit(function () { 
        
        console.log("sending");
        let name = $("#name3");
        let email = $("#email3");
        let contact_number = $("#contact_number3");
        let number_of_guest = $("#number_of_guest3");
        let date_of_arrival = $("#date_of_arrival3");
        let service = document.getElementById("type_of_service3");
        let selectedService = service.options[service.selectedIndex].value;
        
        

        if(isValid(name) && isValidEmail(email) && isValid(contact_number) && isValid(number_of_guest)
          && isValid(date_of_arrival) ) {
           return true;
        }else{
            return false;
        }
    });


    var sendReservation4 = $("#sendReservation4");
    sendReservation4.submit(function () { 
        
        console.log("sending");
        let name = $("#name4");
        let email = $("#email4");
        let contact_number = $("#contact_number4");
        let number_of_guest = $("#number_of_guest4");
        let date_of_arrival = $("#date_of_arrival4");
        let service = document.getElementById("type_of_service4");
        let selectedService = service.options[service.selectedIndex].value;
        
        

        if(isValid(name) && isValidEmail(email) && isValid(contact_number) && isValid(number_of_guest)
          && isValid(date_of_arrival) ) {
           return true;
        }else{
            return false;
        }
    });


    var sendReservation5 = $("#sendReservation5");
    sendReservation5.submit(function(){
        let name = $("#name5");
        let email = $("#email5");
        let contact_number = $("#contact_number5");
        let number_of_guest = $("#number_of_guest5");
        let date_of_arrival = $("#date_of_arrival5");
        let service = document.getElementById("type_of_service5");
        let selectedService = service.options[service.selectedIndex].value;
            
            
    
            if(isValid(name) && isValidEmail(email) && isValid(contact_number) && isValid(number_of_guest)
              && isValid(date_of_arrival) ) {
                return true;
            }else{
                return false;
            }
    })
    // sendReservation5.click(function () { 
        
    //     console.log("sending");
    //     let name = $("#name5");
    //     let email = $("#email5");
    //     let contact_number = $("#contact_number5");
    //     let number_of_guest = $("#number_of_guest5");
    //     let date_of_arrival = $("#date_of_arrival5");
    //     let service = document.getElementById("type_of_service5");
    //     let selectedService = service.options[service.selectedIndex].value;
        
        

    //     if(isValid(name) && isValidEmail(email) && isValid(contact_number) && isValid(number_of_guest)
    //       && isValid(date_of_arrival) ) {
    //         $.ajax({
    //             url: "mail.php",
    //             type: "POST",
    //             data: {
    //                 name: name.val(),
    //                 email: email.val(),
    //                 contact_number: contact_number.val(),
    //                 number_of_guest: number_of_guest.val(),
    //                 date_of_arrival: date_of_arrival.val(),
    //                 type_of_service: selectedService
    //             }, success: function(response){
                    
    //                     window.location.href = "success.html";
                    
    //             }
    //         })
    //     }
    // });


    // CUSTOM RESERVATION
    $("#customReservation").submit(function(){
        let name = $("#customName");
            let email = $("#customEmail");
            let contact_number = $("#custom_contact_number");
            let number_of_guest = $("#custom_number_of_guest");
            let date_of_arrival = $("#custom_date_of_arrival");
            let customService = $("#custom_type_of_service")
            // let selectedService = service.options[service.selectedIndex].value;
            
           
    
            
        if(isValid(name) && isValidEmail(email) && isValid(contact_number) && isValid(number_of_guest)
          && isValid(date_of_arrival) && isValid(customService) ) {
              return true;
            }else{
                return false;
            }

    })

    // var customReservation = $("#customReservation");
    // customReservation.click(function () { 
        
    //     console.log("sending");
    //     let name = $("#customName");
    //     let email = $("#customEmail");
    //     let contact_number = $("#custom_contact_number");
    //     let number_of_guest = $("#custom_number_of_guest");
    //     let date_of_arrival = $("#custom_date_of_arrival");
    //     let customService = $("#custom_type_of_service")
    //     // let selectedService = service.options[service.selectedIndex].value;
        
        

    //     if(isValid(name) && isValidEmail(email) && isValid(contact_number) && isValid(number_of_guest)
    //       && isValid(date_of_arrival) && isValid(customService) ) {
    //         $.ajax({
    //             url: "mail.php",
    //             type: "POST",
    //             data: {
    //                 name: name.val(),
    //                 email: email.val(),
    //                 contact_number: contact_number.val(),
    //                 number_of_guest: number_of_guest.val(),
    //                 date_of_arrival: date_of_arrival.val(),
    //                 type_of_service: customService.val()
    //             }, success: function(response){
                    
    //                     window.location.href = "success.html";
                    
                        
    //             }
    //         })
    //     }
    // });


    //CONTACT US
   $("#contactForm").submit(function(){
       var contactName = $("#contactName");
       var contactEmail = $("#contactEmail");
       var contactMessage = $("#contactMessage")
       if(!isValid(contactName) || !isValidEmail(contactEmail) || !isValid(contactMessage)){
           return false
       }else{
           return true;
       }
   })
    
    


    //REMOVE RED LINE
    function changePlaceholder(element){
        var type = element.type;
        switch (type) {
            case "text":
                checkError(element,"Full name");
                break;
            case "email":
                checkError(element,"example@gmail.com");
                break;
            case "number":
                if(element.className.includes("contact_number")){
                    checkError(element,"Contact number");    
                }else{
                    checkError(element,"Number of guest");
                }
                break;
            case "date":
                checkError(element);
                break;
            default:
                break;
        }
    }
    function checkError(element,value){
        if(element.className.includes("has-error")){
            element.setAttribute("placeholder",value);
            element.classList.remove("has-error");
        }else{
            console.log("error.");
        }
    }

    
    function isValidEmail(element){
        var re = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
        if(re.test(element.val())){
            return true;
        }else {
            element.attr("placeholder", "invalid input");
            element.addClass("has-error");
            return false;
        }
    }

    function isValid(element){
        if($.trim(element.val()) == ""){
            element.attr("placeholder", "invalid input");
            element.addClass("has-error");
            return false;
        }else{
            return true;
        }
    }
    // function nameChecker(element){
        
    //     if(element.val() < 4)
    //         {
    //             element.css('border', "3px solid blue");
                
                
    //             return false;
    //     }else{
    //             return true;
    //         }
    // }
    


window.addEventListener("scroll", function(){
    
    let homeNav = document.querySelector("#navbar")
    if(this.window.scrollY > 30){
        homeNav.classList.remove("navbar-dark");
        homeNav.classList.add("navbar-scroll");
        homeNav.classList.add("navbar-light");
        
        
    }else{
        homeNav.classList.remove("navbar-scroll");
        homeNav.classList.remove("navbar-light");
        homeNav.classList.add("navbar-dark");

    }
    
    descriptionBlockAnimation();
    homeActivitiesAnimation();
    
})
// let homeNav = document.querySelector("#navbar")
// var innerWidth = window.innerWidth;
// if(innerWidth <= 768){
//     homeNav.classList.remove("fixed-top")
//     homeNav.classList.remove("navbar-dark")
//     homeNav.style.backgroundColor = "white";
//     homeNav.style.color= "black";
//     homeNav.classList.add("navbar-light")
// }








function descriptionBlockAnimation(){
    let content = document.querySelector(".description-icon");
    let contentPosition = content.getBoundingClientRect().top;
    let descriptionTitle = document.querySelector(".description-title");
    let screenPosition = window.innerHeight;
    if(contentPosition < screenPosition){
        content.classList.add('animation');
        descriptionTitle.style.animation = "entrance 500ms ease-in";
    }
    else{
        content.classList.remove('animation');
        descriptionTitle.style.animation = null;
    }
}
function homeActivitiesAnimation(){
    let homeActivities = document.querySelector(".home-activities");
    let homeActivitiesPosition = homeActivities.getBoundingClientRect().top;
    let cards = document.querySelectorAll(".card-animation");
    let screenPosition = window.innerHeight;
    if(homeActivitiesPosition < screenPosition){
        // for(let x = 0; x <=cards.length; x+=1){
        //     setInterval(() => {
        //         cards[x].classList.add("animation");            
        //     }, 1000);
        // }        
            var x = 0;
            setInterval(() => {
                cards[x].classList.add("animation");            
                x++;
            }, 700);
            
    }
    else{
            for(let x = 0; x <=cards.length; x+=1){
                cards[x].classList.remove('animation');
            }
    }

}
// let cards = document.querySelectorAll(".card-animation");
// for(let x = 0; x <=cards.length; x+=1){
//     cards[x].classList.add("animation");    
// }
// cards[0].classList.add("animation");

var inputs = document.querySelectorAll(".input");
    for(var x = 0; x<=inputs.length; x++){
        inputs[x].addEventListener("click", function(){
            changePlaceholder(this);
        })
    }