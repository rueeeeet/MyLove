// Create floating hearts with variety
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    const hearts = ['❤️', '💕', '💖', '💗', '💝', '💘'];
    heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 4 + 5) + 's';
    heart.style.animationDelay = Math.random() * 2 + 's';
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 10000);
}

// Create rose petals
function createPetal() {
    const petal = document.createElement('div');
    petal.classList.add('petal');
    petal.style.left = Math.random() * 100 + 'vw';
    petal.style.animationDuration = (Math.random() * 5 + 6) + 's';
    petal.style.animationDelay = Math.random() * 3 + 's';
    document.body.appendChild(petal);

    setTimeout(() => {
        petal.remove();
    }, 12000);
}

// Create sparkles
function createSparkle() {
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');
    sparkle.style.left = Math.random() * 100 + 'vw';
    sparkle.style.top = Math.random() * 100 + 'vh';
    sparkle.style.animationDelay = Math.random() * 2 + 's';
    document.body.appendChild(sparkle);

    setTimeout(() => {
        sparkle.remove();
    }, 2000);
}

// Create floating roses
function createRose() {
    const rose = document.createElement('div');
    rose.classList.add('rose');
    rose.innerHTML = '🌹';
    rose.style.left = Math.random() * 100 + 'vw';
    rose.style.animationDuration = (Math.random() * 4 + 8) + 's';
    rose.style.animationDelay = Math.random() * 2 + 's';
    document.body.appendChild(rose);

    setTimeout(() => {
        rose.remove();
    }, 12000);
}

// Create butterflies
function createButterfly() {
    const butterfly = document.createElement('div');
    butterfly.classList.add('butterfly');
    butterfly.innerHTML = '🦋';
    butterfly.style.left = Math.random() * 100 + 'vw';
    butterfly.style.animationDuration = (Math.random() * 5 + 10) + 's';
    butterfly.style.animationDelay = Math.random() * 2 + 's';
    document.body.appendChild(butterfly);

    setTimeout(() => {
        butterfly.remove();
    }, 15000);
}

// Create twinkling stars
function createStar() {
    const star = document.createElement('div');
    star.classList.add('star');
    star.innerHTML = '✨';
    star.style.left = Math.random() * 100 + 'vw';
    star.style.top = Math.random() * 100 + 'vh';
    star.style.animationDelay = Math.random() * 2 + 's';
    document.body.appendChild(star);

    setTimeout(() => {
        star.remove();
    }, 4000);
}

// Generate hearts, petals, and sparkles continuously
setInterval(createHeart, 400);  // More frequent hearts
setInterval(createPetal, 300);   // More frequent petals
setInterval(createSparkle, 200); // More frequent sparkles
setInterval(createRose, 2000);   // More frequent roses
setInterval(createButterfly, 2500); // More frequent butterflies
setInterval(createStar, 800);    // More frequent stars

// Show popup message
function showLoveMessage() {
    document.getElementById('popup').classList.add('active');
    document.getElementById('overlay').classList.add('active');
    // Create extra hearts when opening
    for(let i = 0; i < 10; i++) {
        setTimeout(createHeart, i * 100);
    }
}

// Close popup
function closePopup() {
    document.getElementById('popup').classList.remove('active');
    document.getElementById('overlay').classList.remove('active');
}

// Close popup when clicking overlay
document.getElementById('overlay').addEventListener('click', closePopup);

// Close popup with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closePopup();
        closeLightbox();
    }
});

// Create initial romantic elements
for(let i = 0; i < 12; i++) {  // Increased from 8 to 12
    setTimeout(createHeart, i * 150);
    setTimeout(createPetal, i * 200);
    setTimeout(createSparkle, i * 100);
}

// Create initial roses, butterflies, and stars
for(let i = 0; i < 5; i++) {  // Increased from 3 to 5
    setTimeout(createRose, i * 800);
    setTimeout(createButterfly, i * 1000);
    setTimeout(createStar, i * 250);
}

// Lightbox functionality for images
function openLightbox(imgElement) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    
    lightbox.classList.add('active');
    lightboxImg.src = imgElement.src;
    lightboxCaption.textContent = imgElement.alt;
    
    // Create extra hearts when opening lightbox
    for(let i = 0; i < 5; i++) {
        setTimeout(createHeart, i * 100);
    }
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
}

// Scroll animations for timeline items
function revealTimeline() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    timelineItems.forEach((item, index) => {
        const itemTop = item.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (itemTop < windowHeight - 100) {
            item.classList.add('reveal');
        }
    });
}

// Initialize timeline animations
window.addEventListener('load', () => {
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => {
        item.classList.add('hidden');
    });
    
    revealTimeline();
});

window.addEventListener('scroll', revealTimeline);

// Video Auto-play/Pause based on visibility
function setupVideoObserver() {
    // Get all video elements
    const videos = document.querySelectorAll('.timeline-video');
    
    if (videos.length === 0) return;

    // Setup video properties
    videos.forEach(video => {
        video.muted = false;
        video.playsInline = true;
        video.loop = true;
        video.autoplay = false;
        video.removeAttribute('muted');
        video.setAttribute('playsinline', '');
    });
    
    // Create intersection observer
    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.5 // Video must be at least 50% visible
    };
    
    const videoObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const video = entry.target;
            const playButton = video.parentElement.querySelector('.video-play-button');
            
            if (entry.isIntersecting) {
                // Video is in view - show button if paused, hide if playing
                if (!video.paused && playButton) {
                    playButton.style.display = 'none';
                } else if (playButton) {
                    playButton.style.display = 'flex';
                }
            } else {
                // Video is out of view, pause it and show play button
                video.pause();
                if (playButton) {
                    playButton.style.display = 'flex';
                }
            }
        });
    }, observerOptions);
    
    // Observe all videos
    videos.forEach(video => {
        videoObserver.observe(video);
    });
}

// Initialize video observer when page loads
window.addEventListener('load', setupVideoObserver);

// Function to handle play button click
function playVideo(button) {
    const container = button.parentElement;
    const video = container.querySelector('video');
    if (video) {
        video.play().catch(error => {
            console.log('Play error:', error);
        });
        button.style.display = 'none';
        
        // Show play button again if video pauses
        video.addEventListener('pause', () => {
            button.style.display = 'flex';
        });
    }
}