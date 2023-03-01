let available_ins = ["Keyboard instruments", "Electric bass"];

window.addEventListener('load', () => {
    document.querySelector('#h1-page_title').innerHTML = 'Home';

    available_ins.forEach((instrument) => {
        let list_item = document.createElement('li');
        list_item.innerHTML = instrument;
        document.querySelector('#real_perf-available_ins').appendChild(list_item);
    });

    let radio_labels = document.querySelectorAll('.pushable-label');
    Array.prototype.forEach.call(radio_labels, (label) => {
        label.addEventListener('click', () => {
            let radios = document.querySelectorAll('.getstarted-radio');
            Array.prototype.forEach.call(radios, (radio) => {
                if(label.getAttribute('for') === radio.value)
                    radio.checked = true;
                else
                    radio.checked = false;
            });
            document.querySelector('#getstarted-ordernow_button').href = label.getAttribute('for') + "-tracks.html";
        });
    });
});