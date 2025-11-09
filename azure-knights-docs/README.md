# Azure Knights - Complete Documentation

## 📚 Overview

This is the complete documentation for **Azure Knights**, a character-driven RPG inspired by Legend of Mana's narrative structure. The documentation covers all world lore, gameplay systems, character arcs, and design philosophy.

## 🚀 Quick Start

### Viewing the Documentation

1. **Local Viewing:**
   - Open `index.html` in any modern web browser (Chrome, Firefox, Safari, Edge)
   - No server required - just double-click the file

2. **With Live Server (Recommended for development):**
   ```bash
   # If you have Python installed
   python -m http.server 8000
   # Then navigate to http://localhost:8000
   ```

## 📂 File Structure

```
azure-knights-docs/
├── index.html          # Main documentation page
├── styles.css          # Complete stylesheet
└── README.md          # This file
```

## 📖 Documentation Sections

### 1. Prologue
- Opening story: "Heritage of the Azure Sky"
- The protagonist's journey begins

### 2. World Lore
- Myth of Creation and the Azure Cycle
- The Celestial War and Birth of GoD
- The Fall of the Three Heroes (Lucius, Myranda, Gustav)

### 3. Core Systems
- **30-Day Deadline System**: Time management mechanics
- **Action Point (AP) System**: Resource management (3 AP per day)
- **One-Day Main Quest**: Azure Synchronization Event mechanics
- **Azure Resonance Theory**: The metaphysical foundation

### 4. The Four Kingdoms
Each kingdom features 3 main characters with unique Azure types:

- **Heaver Fortress** (Military Town)
  - Tyrell (Guardian), Miya (Marksman), Celine (Ravager)

- **Dellastro** (Capital City)
  - Kyle (Synergist), Violet (Guardian), Hilda (Mystic)

- **Lyric Glade** (Fairy Land)
  - Hayabusa (Swordmaster), Lyodra (Mystic), Freya (Marksman)

- **Tsuyoi Country** (Valley of Steel)
  - Masamune (Swordmaster), Ayane (Synergist), Chang'e (Ravager)

- **Palmacy** (Azure Citadel)
  - Final arc location and Babel Tower

### 5. Azure Monuments
Complete table of all 9 monuments with their:
- Locations
- Sigils (Lion, Dove, Feather, Dragon, Crescent, Eye, Arrow, Chain, Sun)
- Resonance aspects

### 6. Combat Classes
Detailed profiles for all 6 classes:
- **Guardian**: Tank / Crowd Control / Debuff
- **Marksman**: Ranged Physical DPS
- **Swordmaster**: Melee Physical DPS
- **Ravager**: Melee Sub-DPS / CC / Debuff
- **Mystic**: Magical DPS / Burst Damage
- **Synergist**: Support / Healer / Buff

### 7. Gameplay Loop
Step-by-step gameplay flow:
1. Explore & Discover
2. Build Relationships
3. Trigger Main Quests
4. Complete Azure Arc
5. Restore Monument
6. Manage Resources

### 8. Narrative Design
- Non-linear storytelling inspired by Legend of Mana
- Azure Divergence System (choose 1 of 3 characters per city)
- Parallel timelines and mosaic narrative
- Design philosophy and core themes

## 🎨 Design Features

### Visual Design
- **Color Palette**: Azure blue primary theme with kingdom-specific accent colors
- **Typography**: Professional font hierarchy for optimal readability
- **Responsive Layout**: Works seamlessly on desktop, tablet, and mobile devices

### Interactive Elements
- Fixed sidebar navigation for easy section access
- Smooth scroll behavior
- Hover effects on cards and interactive elements
- Shadow and glow effects for visual depth

### Accessibility
- High contrast text for readability
- Clear visual hierarchy
- Semantic HTML structure
- Print-friendly stylesheet

## 🔧 Customization

### Modifying Colors
Colors are defined as CSS variables in `styles.css`:

```css
:root {
    --azure-primary: #1e3a8a;
    --azure-secondary: #3b82f6;
    /* ... more colors */
}
```

### Adding New Sections
1. Add content in `index.html` following the section structure
2. Update navigation in the sidebar
3. Style can inherit from existing `.content-block` classes

### Styling Components
Key CSS classes:
- `.content-block` - Main content container
- `.info-box` - Information callouts (info, warning, critical)
- `.kingdom-card` - Kingdom profile cards
- `.class-card` - Character class cards
- `.monuments-table` - Data tables

## 📱 Responsive Breakpoints

- **Desktop**: Full sidebar + main content (>1024px)
- **Tablet**: Narrower sidebar (768px - 1024px)
- **Mobile**: Stacked layout (<768px)

## 🖨️ Printing

The documentation includes print-specific styles:
- Sidebar hidden in print view
- Page breaks optimized for sections
- High contrast for better readability

## 🎯 Use Cases

### For Developers
- Complete system reference
- Character and world data
- Gameplay mechanics documentation

### For Designers
- Visual style guide
- Kingdom and character profiles
- Azure Monument reference

### For Writers
- Complete lore and mythology
- Character arcs and relationships
- Narrative structure guide

### For Players
- World encyclopedia
- Character builds and classes
- Story progression guide

## 📊 Statistics

- **Total Content**: 800+ lines of HTML
- **Stylesheet**: 900+ lines of CSS
- **Sections**: 9 major sections
- **Characters**: 12 main characters across 4 kingdoms
- **Classes**: 6 combat classes
- **Monuments**: 9 Azure Monuments
- **Kingdoms**: 4 + 1 final location

## 🔄 Future Enhancements

Potential additions:
- [ ] Character relationship diagrams
- [ ] Interactive Azure Monument map
- [ ] Quest flowcharts
- [ ] Enemy and monster database
- [ ] Item and equipment compendium
- [ ] Skill trees and progression paths
- [ ] Achievement/Trophy guide

## 🤝 Contributing

To add or modify content:
1. Edit `index.html` for content changes
2. Update `styles.css` for styling modifications
3. Maintain semantic HTML structure
4. Follow existing naming conventions

## 📝 License

This documentation is part of the Azure Knights project.

## 🔗 Related Files

This documentation works standalone but is part of the larger Azure Knights project located in `/home/user/RPG-MAKER-MZ/`.

---

**Last Updated**: November 9, 2025
**Version**: 1.0
**Status**: Complete Documentation Release