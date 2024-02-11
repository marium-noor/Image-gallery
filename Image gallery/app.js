const imgContainers = document.querySelectorAll('.t');

imgContainers.forEach(container => {
    container.addEventListener('click', () => {
        const imgSrc = container.querySelector('img').src;
        const newWindow = window.open('', '_blank');

        newWindow.document.write(`<img src="${imgSrc}" style="width: 90vw; height: 90vh; object-fit: contain;">`);
        newWindow.document.close();
    });
});
