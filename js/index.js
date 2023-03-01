let available_ins = ["Keyboard instruments", "Electric bass"];

window.addEventListener('load', () => {
    document.querySelector('#h1-page_title').innerHTML = 'Home';

    available_ins.forEach((instrument) => {
        let list_item = document.createElement('li');
        list_item.innerHTML = instrument;
        document.querySelector('#real_perf-available_ins').appendChild(list_item);
    });
});