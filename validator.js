
(function() {
  console.log('script loaded')
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    console.log(forms)
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', (e) => {
     
        if (form.checkValidity() === false) {
          e.preventDefault();
          e.stopPropagation();
       
        
        }
        form.classList.add('was-validated');
       
      }, false);
      console.log('button clicked!')
    });
  }, false);
})();

