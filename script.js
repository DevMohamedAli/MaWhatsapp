// Vanilla Javascript
   
    function wahtsapp() {
        var phone = document.querySelector("#telephone").value;
        if (isNaN(phone) || phone === '') {
            document.getElementById('telephone').placeholder = "plz enter number"
        }else{
            localStorage.setItem("phone",phone);
            let phonedata = localStorage.getItem("phone");
            console.log(phonedata);
            window.open(`https://api.whatsapp.com/send/?phone=${phonedata}&text&app_absent=0`) 
        }
    };
    // (
    // function myLoad() {
    //     
    //     console.log("errolr");
    //     window.open(`https://api.whatsapp.com/send/?phone=${phone}&text&app_absent=0`,"_self")
    //   })();  
     
  

        

