import './styles.scss';

function openModal() {
    console.log("openModal")
    const myModal = new bootstrap.Modal(document.getElementById('myModal'), options)
    myModal.toggle();
}