function buyNow(){

var buynow = document.getElementById("buy");

buynow = Swal.fire({
  title: "Are you sure?",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, Confirm"
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire({
      title: "Confirmed Your Order!",
      text: "Your Order Has Been Done",
      icon: "success"
    });
  }
});

}

function send(){
  var Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });
  Toast.fire({
    icon: "success",
    title: "Email send successfully"
  });
  
}