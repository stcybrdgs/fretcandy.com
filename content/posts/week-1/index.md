---
title: 'Week 1: Getting Started'
description: 'Part of my "coding in public" journey - documenting my experiments and weird ideas for music apps and MVPs. 🎸'
author: 'Stacy Bridges'
date: '2025-06-12T15:49:28-05:00'
cover:
  image: fretchart.png
  alt: 'Cover image for My Post'
  # caption: 'My amazing cover image'
tags: ['FretCharts', 'Widgets', 'Demos']
draft: false
searchHidden: false
---

<!-- ## Accordion: TEST

{{< details title="Click to expand" >}}
This content will be hidden until clicked.
{{< /details >}} -->

## Demo: Interactive SVG Fret-Chart Widget

Here's a live demo of the widget that emerged from an iterative session with Claude AI:

- Drag the widget to move it around.
- Use the corner handles to resize.
- Click on fret intersections to add/remove dots.

{{< micro-app >}}

## What It Does

I've just finished building an interactive fret chart widget that guitar players can use to visualize chord patterns, scales, and finger positions on the fretboard. But this isn't just a static diagram - it's a fully interactive tool that you can drag around, resize, and manipulate in real-time.

**Key Features:**

- **Click to add/remove dots** - Three-state system (no dot → outline dot → filled dot → removed)
- **Drag and drop** - Move the entire widget around the screen
- **Resizable** - Grab any corner handle to resize from 300x200 up to 800x600 pixels
- **Preset patterns** - Quick-load common chords (C Major, D Minor) and scales (G Major)
- **Responsive design** - Works on mobile with touch support
- **Real-time feedback** - Live counters showing active dots, widget size, and position

## The Tech Stack

This is a single-file HTML application that demonstrates several interesting techniques:

### Core Technologies

- **Vanilla JavaScript** - No frameworks, just pure DOM manipulation
- **SVG** - Scalable vector graphics for crisp fretboard rendering at any size
- **CSS3** - Modern styling with flexbox, transitions, and hover effects
- **Touch API** - Mobile-friendly drag and resize functionality

### Key Technical Decisions

**SVG Over Canvas**: I chose SVG because it scales perfectly at any resolution and makes individual elements (frets, strings, dots) easily manipulable with CSS and JavaScript events.

**Three-State Dot System**: Rather than just on/off, dots cycle through three states:

1. No dot (transparent click zone)
2. Outline dot (stroke only)
3. Filled dot (solid fill)

This mirrors how guitarists often think about finger positions - sometimes you want to show "optional" notes versus "essential" chord tones.

**Coordinate System**: The fret positions use a clean mathematical system:

```javascript
const x = START_X + (fret - 1) * FRET_WIDTH
const y = START_Y + string * STRING_HEIGHT
```

This makes it trivial to calculate any fret/string intersection and programmatically add chord patterns.

## Interesting Code Patterns

**Event Delegation**: Click zones are invisible SVG rectangles overlaid on each fret intersection. When a dot is added, the click zone is hidden and the dot itself becomes clickable.

**Drag State Management**: A single state object tracks whether we're dragging, resizing, and which resize handle is active:

```javascript
let dragState = {
  isDragging: false,
  isResizing: false,
  startX: 0,
  startY: 0,
  resizeDirection: null,
}
```

**Animation Choreography**: When showing preset patterns like the G Major scale, dots appear sequentially with staggered timing rather than all at once - it's more visually engaging and helps users follow the pattern.

**Responsive Constraints**: The widget enforces minimum sizes (300x200) and maximum sizes (800x600) while maintaining aspect ratio during resize operations.

## What I Learned

Building this widget taught me several things about creating interactive web components:

1. **SVG + JavaScript is powerful** - You get the best of both worlds: scalable graphics and dynamic behavior
2. **Touch events need special handling** - Mobile drag-and-drop requires careful event management and `preventDefault()` calls
3. **State management matters** - Even in vanilla JS, having a clear state object makes complex interactions much easier to debug
4. **Progressive enhancement works** - The basic fret chart works even if JavaScript fails; the interactivity is layered on top

## Future Improvements

This is just version 1. Some ideas for future iterations:

- **Save/load patterns** - Let users save their custom chord diagrams
- **Audio playback** - Play the actual notes when clicking dots
- **Tuning support** - Handle different guitar tunings beyond standard EADGBE
- **Export functionality** - Generate images or share links to specific patterns

## The Code

The entire widget is contained in a single 400-line HTML file, making it easy to embed in any webpage or use as a starting point for more complex guitar tools. It demonstrates that you don't always need heavy frameworks to build engaging, interactive experiences.

---

_This widget is part of my larger project building web-based music tools. Follow along as I document my progress building in public!_

