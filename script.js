const addCards = (items) => {
    const cardSection = document.getElementById('card-section');
    items.forEach(item => {
        let contentcard = `
      <div class="col s4 center-align">
          <div class="card medium">
              <div class="card-image waves-effect waves-block waves-light">
                  <img class="activator" src="${item.path}">
              </div>
              <div class="card-content">
                  <span class="card-title activator grey-text text-darken-4">${item.title}<i class="material-icons right">more_vert</i></span>
                  <p><a href="#">${item.subTitle}</a></p>
              </div>
              <div class="card-reveal">
                  <span class="card-title grey-text text-darken-4">${item.title}<i class="material-icons right">close</i></span>
                  <p class="card-text">${item.description}</p>
              </div>
          </div>
          </div>
      `;

        $(cardSection).append(contentcard)
    });
};

const formSubmitted = () => {
    let formData = {};
    formData.title = $('#title').val();
    formData.subTitle = $('#subTitle').val();
    formData.path = $('#path').val();
    formData.description = $('#description').val();

    console.log(formData);
    postFairway(formData);
}
function validateForm() {
    const title = $('#title').val();
    const path = $('#path').val();
    const subTitle = $('#subTitle').val();
    const description = $('#description').val();

    if (title === '' || path === '' || subTitle === '' || description === '') {
        alert('Please enter all required fields.');
    } else {
        formSubmitted();
        $('.modal').modal('close');
        alert('Thanks for submitting the data');
    }
}

function postFairway(fairway){
    $.ajax({
        url:'/api/fairway',
        type:'POST',
        data:fairway,
        success: (result)=>{
            if (result.statusCode === 201) {
                alert('post successful');
            }
        }
    });
}

function getAllFairway(){
    $.get('/api/fairway', (response)=>{
        if (response.statusCode === 200) {
            addCards(response.data);
        }
    });
}
const formCanceled = () => {
    $('.modal').modal('close');
};

let socket = io();
        socket.on('number',(msg)=>{
            console.log('Random Number: ' + msg);
        });

$(document).ready(function(){
    $('.materialboxed').materialbox();
    $('#formSubmit').click(()=>{
        formSubmitted();
    });
    $('.modal').modal();
    getAllFairway();
    console.log('ready');
});