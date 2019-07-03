

function handleScroll() {
  var shipping = document.querySelector("#shipping");
  var shippingTop = shipping.getBoundingClientRect().top;
  
  var payment = document.querySelector("#payment");
  var paymentTop = payment.getBoundingClientRect().top;
  
  var billing = document.querySelector("#billing");
  var billingTop = billing.getBoundingClientRect().top;
  
  var pic = document.querySelector(".truck");
  
  if (shippingTop < 450 && shippingTop > 350){
	  //console.log("s");
	  pic.style.marginLeft = "0%";
  }
  
  if (billingTop < 450 && billingTop > 350){
	  //console.log("b");
	  pic.style.marginLeft = "54%";
  }
  
  if (paymentTop < 450 && paymentTop > 350){
	  //console.log("p");
	  pic.style.marginLeft = "26%";
  }
  
}

window.addEventListener('scroll', handleScroll); //add scrolling event


