const FORM = document.getElementById('search');

FORM.addEventListener('submit', function (e) {
    e.preventDefault();

    const SEARCH_FIELD = document.getElementById('query');

    let errorCount = 0;

    if(SEARCH_FIELD.value.trim() === ''){
        SEARCH_FIELD.classList.remove('success');
        SEARCH_FIELD.classList.add('error');
        errorCount++;
    }else{
        SEARCH_FIELD.classList.remove('error');
        SEARCH_FIELD.classList.add('success');
    }

    if(!errorCount) FORM.submit();
    else return false;
});