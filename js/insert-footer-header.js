window.addEventListener('load', () => {

    // Insert header
    fetch('components/header.html')
    .then((response) => { return response.text() })
    .then((html) => {
        document.querySelector('#site-header').innerHTML = '';
        document.querySelector('#site-header').innerHTML = html;
    })
    .catch((e) => { console.log(e) });

    // Insert footer
    fetch('components/footer.html')
    .then((response) => { return response.text() })
    .then((html) => {
        document.querySelector('#site-footer').innerHTML = '';
        document.querySelector('#site-footer').innerHTML = html;
    })
    .catch((e) => { console.log(e) });

});