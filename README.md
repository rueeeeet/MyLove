# 💕 Valentine's Day Love Website

A beautiful, romantic website to celebrate your love story!

## ✨ Features

- 🌹 Animated floating hearts, roses, butterflies, and sparkles
- 💖 Romantic gradient backgrounds with shifting colors
- 📸 Interactive timeline showcasing your relationship journey
- 🎵 Auto-playing background music with toggle control
- 🖼️ Lightbox gallery for full-screen image viewing
- 🎬 Video support for special memories
- 📱 Fully responsive - works on all devices
- ✨ Smooth animations and transitions throughout

## 🚀 Quick Start

### 1. Add Your Media Files

**Images** (in `images/` folder):
- `first-meet.jpg` - When you first met
- `first-date.jpg` - Your first date photo
- `special-moment.jpg` - A special memory
- `recent.jpg` - Recent photo together
- `adventure-poster.jpg` - Video thumbnail (optional)

**Videos** (in `videos/` folder):
- `adventure.mp4` - Your adventure video

**Music** (in `music/` folder):
- `love-song.mp3` - Background music

### 2. Customize the Content

Open `index.html` and update:
- Dates in the timeline (search for `[Add Date]`)
- Names and messages to be personal
- Timeline event titles and descriptions
- Add or remove timeline items as needed

### 3. Open the Website

Simply double-click `index.html` to open in your browser!

## 📝 Customization Guide

### Change Colors

Edit `styles.css` and modify:
```css
/* Main gradient colors */
background: linear-gradient(135deg, #ffecd2, #fcb69f, #ff9a9e, #fecfef);

/* Accent colors */
#d4145a  /* Pink */
#fbb034  /* Gold */
```

### Add More Timeline Items

Copy this block in `index.html` and paste it in the timeline section:
```html
<div class="timeline-item" data-aos="fade-up">
    <div class="timeline-dot"></div>
    <div class="timeline-content">
        <div class="timeline-date">📅 Your Date - Title</div>
        <h3>Event Title</h3>
        <div class="media-container">
            <img src="images/your-image.jpg" alt="Description" class="timeline-img" onclick="openLightbox(this)">
        </div>
        <p>Your description here...</p>
    </div>
</div>
```

### Change Fonts

The website uses:
- **Dancing Script** - Cursive headings
- **Playfair Display** - Elegant titles
- **Poppins** - Body text

To change, edit the Google Fonts link in `index.html`.

## 🎨 Animation Elements

The website includes:
- ❤️ Multiple heart emojis floating up
- 🌹 Roses floating gracefully
- 🦋 Butterflies flying across the screen
- ✨ Twinkling stars and sparkles
- 🌸 Falling rose petals
- 💫 Shimmering light effects

## 📱 Mobile Responsive

The website automatically adapts to:
- 📱 Phones (320px+)
- 📱 Tablets (768px+)
- 💻 Desktops (1024px+)

## 🎵 Music Controls

- Auto-plays on page load (if browser allows)
- Floating control button in bottom-right corner
- Click to pause/play
- 🔊 = Playing | 🔇 = Muted

## 🌐 Deployment

### Deploy to GitHub Pages (Free):

1. Create a GitHub account
2. Create a new repository
3. Upload all files
4. Go to Settings → Pages
5. Select main branch
6. Your site will be live at: `https://username.github.io/repo-name`

### Or use:
- Netlify (drag & drop)
- Vercel
- Firebase Hosting

## 📂 Project Structure

```
Love/
├── index.html          # Main HTML file
├── styles.css          # All styling
├── script.js           # Animations & interactions
├── images/             # Your photos
├── videos/             # Your videos
├── music/              # Background music
└── README.md           # This file
```

## 💡 Tips

1. **Image Size**: Keep images under 2MB for faster loading
2. **Video Size**: Compress videos to under 50MB
3. **Music**: Use 128-192kbps MP3 for good quality at smaller size
4. **Testing**: Test in multiple browsers before sharing
5. **Personal Touch**: Add your own inside jokes and memories!

## ❤️ Make It Special

Remember to:
- Use real photos that mean something to both of you
- Write personal messages from your heart
- Choose a song that's meaningful to your relationship
- Add specific dates and memories
- Proofread everything before sharing!

## 🎉 Final Step

When everything is ready:
1. Test the website thoroughly
2. Make sure all media loads correctly
3. Check on mobile device
4. Share the link with your special someone! 💕

---

**Happy Valentine's Day! May your love story continue to grow! 🌹✨**
