document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.getElementById('gallery-container');

    try {
        const works = [
            { type: 'image', src: 'assets/images/work1.jpg' },
            { type: 'image', src: 'assets/images/work2.jpg' },
            { type: 'video', youtubeId: 'yourYouTubeVideoID1' },
            { type: 'image', src: 'assets/images/work3.jpg' },
            { type: 'video', youtubeId: 'yourYouTubeVideoID2' },
            // add more work items here
        ];

        works.forEach(item => {
            try {
                if (item.type === 'image') {
                    const img = document.createElement('img');
                    img.src = item.src;
                    img.onerror = function() {
                        this.src = 'assets/images/fallback.jpg'; // fallback image
                    };
                    gallery.appendChild(img);
                } else if (item.type === 'video') {
                    const iframe = document.createElement('iframe');
                    iframe.src = `https://www.youtube.com/embed/${item.youtubeId}`;
                    iframe.allowFullscreen = true;
                    iframe.onerror = function() {
                        this.parentElement.innerHTML = '<p>Video cannot be loaded.</p>';
                    };
                    gallery.appendChild(iframe);
                }
            } catch (err) {
                console.error('Error loading work item:', err);
            }
        });
    } catch (err) {
        console.error('Error initializing gallery:', err);
    }
});

// Preloader handling
window.addEventListener('load', () => {
    try {
        const preloader = document.getElementById('preloader');
        preloader.style.display = 'none';
    } catch (err) {
        console.error('Error removing preloader:', err);
    }
});

