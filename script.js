const pages = document.querySelectorAll('.page');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
const bgAudio = document.getElementById('bg-audio');
const startBtn = document.getElementById('startBtn');
const startScreen = document.getElementById('startScreen');
const scrapbook = document.getElementById('scrapbook');
const controls = document.getElementById('controls');
const practicePanel = document.getElementById('practicePanel');

const playMusicBtn = document.getElementById('playMusicBtn');
const pauseMusicBtn = document.getElementById('pauseMusicBtn');
const bgColorBtn = document.getElementById('bgColorBtn');
const rotatePageBtn = document.getElementById('rotatePageBtn');
const resetBtn = document.getElementById('resetBtn');

let currentPage = 0;

// Start Memory Journey Button Click
startBtn.addEventListener('click', () => {
    startScreen.classList.add('hidden');
    scrapbook.classList.remove('hidden');
    controls.classList.remove('hidden');
    practicePanel.classList.remove('hidden');  // Show Practice Panel

    bgAudio.play().catch(() => {
        alert("Click once more to allow music.");
    });

    pages[currentPage].classList.add('active');
});

// Page Flip Buttons
nextBtn.addEventListener('click', () => {
    pages[currentPage].classList.remove('active');
    currentPage = (currentPage + 1) % pages.length;
    pages[currentPage].classList.add('active');
});

prevBtn.addEventListener('click', () => {
    pages[currentPage].classList.remove('active');
    currentPage = (currentPage - 1 + pages.length) % pages.length;
    pages[currentPage].classList.add('active');
});

// Double-click to highlight paragraph
document.addEventListener('dblclick', function(e) {
    if (e.target.tagName === 'P') {
        e.target.style.color = 'yellow';
    }
});

// PRACTICE PANEL EVENTS

// Play Music
playMusicBtn.addEventListener('click', () => {
    bgAudio.play();
});

// Pause Music
pauseMusicBtn.addEventListener('click', () => {
    bgAudio.pause();
});

// Change Background Color Randomly
bgColorBtn.addEventListener('click', () => {
    const colors = ['#ffe4b5', '#f0f8ff', '#e6e6fa', '#fafad2', '#fdf6e3'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});

// Rotate Scrapbook Page
rotatePageBtn.addEventListener('click', () => {
    const activePage = pages[currentPage];
    activePage.style.transition = 'transform 0.5s ease';
    activePage.style.transform = 'rotate(5deg)';
    setTimeout(() => {
        activePage.style.transform = 'rotate(0deg)';
    }, 500);
});

// Reset Scrapbook to Start Screen
resetBtn.addEventListener('click', () => {
    scrapbook.classList.add('hidden');
    controls.classList.add('hidden');
    practicePanel.classList.add('hidden');
    startScreen.classList.remove('hidden');
    document.body.style.backgroundColor = '#fdf6e3';
    bgAudio.pause();
    bgAudio.currentTime = 0;
    currentPage = 0;
    pages.forEach(page => page.classList.remove('active'));
    pages[0].classList.add('active');
});

////////////////////////////////////////////////////
// All Previous Hover, Click, Keydown Practice Events
////////////////////////////////////////////////////

document.querySelectorAll('h1, h2').forEach(heading => {
    heading.addEventListener('mouseover', () => {
        heading.style.color = 'pink';
    });
    heading.addEventListener('mouseout', () => {
        heading.style.color = '#a0522d';
    });
});

document.querySelectorAll('p').forEach(para => {
    para.addEventListener('click', () => {
        para.style.textDecoration = para.style.textDecoration === 'underline' ? 'none' : 'underline';
    });
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'b') {
        document.body.style.backgroundColor = '#ffe4b5';
    } else if (e.key === 'w') {
        document.body.style.backgroundColor = '#fdf6e3';
    }
});

document.querySelectorAll('h1, h2').forEach(heading => {
    heading.addEventListener('dblclick', () => {
        heading.style.transform = 'rotate(2deg)';
        setTimeout(() => {
            heading.style.transform = 'rotate(0deg)';
        }, 300);
    });
});

window.addEventListener('scroll', () => {
    document.title = "Flipping Memories...";
});
