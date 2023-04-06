import throttle from 'lodash.throttle';

const LOCAL_KEY = 'feedback-form-state';
let formData = JSON.parse(localStorage.getItem(LOCAL_KEY)) || {};

const form = document.querySelector('.feedback-form')
form.addEventListener('input', throttle(storageFormData, 500));
form.addEventListener('submit', onFormSubmit);
reloadPage();

function storageFormData(element) {
    formData[element.target.name] = element.target.value;
    localStorage.setItem(LOCAL_KEY, JSON.stringify(formData));
};

function onFormSubmit(element) {
    element.preventDefault();
    const {
        elements: { email, message },
    } = element.currentTarget;

    if(email.value === '' || message === '') {
        return alert ('fill all field')
    
    };
    console.log(formData);
    element.currentTarget.reset();
    localStorage.removeItem(LOCAL_KEY);
    formData = {};
    
};

    
function reloadPage() {
    if (formData) {
        let { email, message } = form.elements;
        email.value = formData.email || '';
        message.value = formData.message || '';
      };
  };
