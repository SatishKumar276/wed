if (typeof document !== 'undefined') {
    // Code to execute in a browser environment
    document.addEventListener('DOMContentLoaded', function() {
        const container = document.querySelector('.carousel-container');

        if (container) {
            const images = container.querySelectorAll('img');
            const totalImages = images.length;
            let currentIndex = 0;

            if (totalImages > 0) {
                setInterval(showNextImage, 3000);

                function showNextImage() {
                    currentIndex = (currentIndex + 1) % totalImages;
                    container.style.transform = `translateX(-${currentIndex * 100}%)`;
                }
            } else {
                console.error('No images found in the carousel container.');
            }
        } else {
            console.error('Carousel container element not found.');
        }
    });
} else {
    // Code to execute in a Node.js environment
    console.log('This script is running in a Node.js environment.');
    console.log('Node.js does not have access to the browser DOM.');
    console.log('You may need to use a different approach for your Node.js application.');
}
