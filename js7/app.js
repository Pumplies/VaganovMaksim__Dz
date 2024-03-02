const inputElement = document.getElementById('title')
const createBtn = document.getElementById('create')
const listElement = document.getElementById('list')


const notes = [
    {
        title: 'Купи краба',
        status: true
    },
    {
        title: 'Яблоки не забудь',
        status: true
    }

]

function render() {
    listElement.innerHTML = ''; 
    for (let note of notes) {
        const noteElement = document.createElement('li');
        noteElement.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
        noteElement.innerHTML = getNoteTemplate(note);
        listElement.appendChild(noteElement);

        const checkBtn = noteElement.querySelector('.btn-success');
        const deleteBtn = noteElement.querySelector('.btn-danger');
        const textElement = noteElement.querySelector('.text');

        checkBtn.addEventListener('click', function () {
            textElement.style.textDecoration = 'line-through';
        });

        deleteBtn.addEventListener('click', function () {
            notes.splice(notes.indexOf(note), 1);  
            noteElement.remove(); 
        });
    }
}

createBtn.onclick = function () {
    if (inputElement.value.length === 0) {
        return;
    }

    const newNote = {
        title: inputElement.value,
        status: false
    };

    notes.push(newNote);
    render(); 
    inputElement.value = '';
};

function getNoteTemplate(note) {
    return `
        <span class='text'>${note.title}</span>
        <span>
            <span class="btn btn-small btn-success">&check;</span>
            <span class="btn btn-small btn-danger">&times;</span>
        </span>`;
}

render(); 
