const FORM = document.getElementById('contact');


function validateEmail(str){
    const RE = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm;
    return RE.test(str);
}

FORM.addEventListener('submit', function (e) {
    e.preventDefault();

    const NAME_FIELD = document.getElementById('name');
    const EMAIL_FIELD = document.getElementById('email');
    const MSG_FIELD = document.getElementById('msg');

    const NAME_ERROR = document.getElementById('error-name');
    const EMAIL_ERROR = document.getElementById('error-email');
    const MSG_ERROR = document.getElementById('error-msg');

    let errorCount = 0;

    if(NAME_FIELD.value.trim() === ''){
        NAME_FIELD.classList.remove('success');
        NAME_FIELD.classList.add('error');
        NAME_ERROR.style.display = 'block';
        errorCount++;
    }else{
        NAME_FIELD.classList.remove('error');
        NAME_FIELD.classList.add('success');
        NAME_ERROR.style.display = 'none';
    }

    if(!validateEmail(EMAIL_FIELD.value)){
        EMAIL_FIELD.classList.remove('success');
        EMAIL_FIELD.classList.add('error');
        EMAIL_ERROR.style.display = 'block';
        errorCount++;
    }else{
        EMAIL_FIELD.classList.remove('error');
        EMAIL_FIELD.classList.add('success');
        EMAIL_ERROR.style.display = 'none';
    }

    if(MSG_FIELD.value.trim() === ''){
        MSG_FIELD.classList.remove('success');
        MSG_FIELD.classList.add('error');
        MSG_ERROR.style.display = 'block';
        errorCount++;
    }else{
        MSG_FIELD.classList.remove('error');
        MSG_FIELD.classList.add('success');
        MSG_ERROR.style.display = 'none';
    }

    if(!errorCount) FORM.submit();
    else return false;
});