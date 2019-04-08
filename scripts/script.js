let showModal = () => {
    let modal = document.createElement('iframe');
    let parentContainer = document.getElementById('modal');
    modal.src = 'https://chernivtsi.js.org/';
    parentContainer.appendChild(modal);
};
