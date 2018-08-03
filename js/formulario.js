
  $(document).ready(function(){
    $('select').formSelect();
  });

  $('#btnForm').on('click', function(event) {

    var nameComplete = $('#names').val();
    var email = $('#email').val();
    var company = $('#company').val();
    var  motivoVisit = $('#motivoVisit').val();

    if (nameComplete.length > 3 && email.length > 5 && company.length > 3 && motivoVisit.length > 6 ) {
      event.preventDefault();
      window.location.href = '../views/camara.html';
      console.log(nameComplete);
      console.log(email);
      console.log(company);
      console.log(motivoVisit);
    }    
  })