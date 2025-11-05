# MOG Battle HUD - FHD Conversion Summary

## Overview
Successfully converted MOG_BattleHud.js plugin parameters from **default RPG Maker MZ resolution** to **Full HD (FHD) resolution**.

## Resolution Specifications

| Aspect | Default RPG Maker MZ | FHD Version |
|--------|---------------------|-------------|
| **Resolution** | 816 x 624 | 1920 x 1080 |
| **X Scale Factor** | 1.0 | 2.3529 (1920÷816) |
| **Y Scale Factor** | 1.0 | 1.7308 (1080÷624) |

## Conversion Details

### Parameters Converted: **94 coordinate values**

All position-related parameters were scaled appropriately while preserving:
- Font sizes (as absolute values)
- Alignment settings (0, 1, 2)
- Rotation angles
- Max battle members count
- Boolean flags
- Column counts

## Key Parameter Changes

### Main HUD Position
| Parameter | Original | FHD | Change |
|-----------|----------|-----|--------|
| Hud X-Axis | -90 | -212 | ×2.35 |
| Hud Y-Axis | 480 | 831 | ×1.73 |
| Hud Slide Y | 250 | 433 | ×1.73 |

### Face Display
| Parameter | Original | FHD | Change |
|-----------|----------|-----|--------|
| Face X-Axis | 70 | 165 | ×2.35 |
| Face Y-Axis | 40 | 69 | ×1.73 |

### Name Display
| Parameter | Original | FHD | Change |
|-----------|----------|-----|--------|
| Name X-Axis | -45 | -106 | ×2.35 |
| Name Y-Axis | 65 | 112 | ×1.73 |

### HP Meter & Numbers
| Parameter | Original | FHD | Change |
|-----------|----------|-----|--------|
| HP Meter X-Axis | 87 | 205 | ×2.35 |
| HP Meter Y-Axis | 7 | 12 | ×1.73 |
| HP Number X-Axis | 170 | 400 | ×2.35 |
| HP Number Y-Axis | -11 | -19 | ×1.73 |

### MP Meter & Numbers
| Parameter | Original | FHD | Change |
|-----------|----------|-----|--------|
| MP Meter X-Axis | 104 | 245 | ×2.35 |
| MP Meter Y-Axis | 33 | 57 | ×1.73 |
| MP Number X-Axis | 187 | 440 | ×2.35 |
| MP Number Y-Axis | 26 | 45 | ×1.73 |

### TP Meter & Numbers
| Parameter | Original | FHD | Change |
|-----------|----------|-----|--------|
| TP Meter X-Axis | 104 | 245 | ×2.35 |
| TP Meter Y-Axis | 59 | 102 | ×1.73 |
| TP Number X-Axis | 187 | 440 | ×2.35 |
| TP Number Y-Axis | 43 | 74 | ×1.73 |

### ATB Meter
| Parameter | Original | FHD | Change |
|-----------|----------|-----|--------|
| ATB Meter X-Axis | 69 | 162 | ×2.35 |
| ATB Meter Y-Axis | 117 | 202 | ×1.73 |

### States Display
| Parameter | Original | FHD | Change |
|-----------|----------|-----|--------|
| States X-Axis | 102 | 240 | ×2.35 |
| States Y-Axis | 76 | 132 | ×1.73 |

### Turn Indicator
| Parameter | Original | FHD | Change |
|-----------|----------|-----|--------|
| Turn X-Axis | -5 | -12 | ×2.35 |
| Turn Y-Axis | -160 | -277 | ×1.73 |

### Window Command
| Parameter | Original | FHD | Change |
|-----------|----------|-----|--------|
| W Command Y-Axis | -120 | -208 | ×1.73 |
| W Command Slide Y | 64 | 111 | ×1.73 |
| L Command X-Axis | -20 | -47 | ×2.35 |
| L Command Y-Axis | -25 | -43 | ×1.73 |

### Window Party
| Parameter | Original | FHD | Change |
|-----------|----------|-----|--------|
| W Party X-Axis | 325 | 765 | ×2.35 |
| W Party Y-Axis | 170 | 294 | ×1.73 |
| W Party Slide Y | -100 | -173 | ×1.73 |
| L Party X-Axis | -325 | -765 | ×2.35 |
| L Party Y-Axis | -42 | -73 | ×1.73 |

### Window Help
| Parameter | Original | FHD | Change |
|-----------|----------|-----|--------|
| W Help Slide Y | -50 | -87 | ×1.73 |

### Window Skill/Item/Actor/Enemy
| Parameter | Original | FHD | Change |
|-----------|----------|-----|--------|
| Slide Y (All) | 50 | 87 | ×1.73 |
| Layout Y-Axis | -67 | -116 | ×1.73 |
| Actor/Enemy Width | 200 | 471 | ×2.35 |

## File Information

- **Original File**: MOG_BattleHud.js
- **FHD Version**: MOG_BattleHud_FHD.js
- **Lines of Code**: 4,256 (unchanged)
- **File Size**: ~149KB
- **Location**: `/home/user/RPG-MAKER-MZ/MOG_BattleHud_FHD.js`

## Usage Instructions

1. **For FHD Projects (1920x1080)**:
   - Use `MOG_BattleHud_FHD.js`
   - All default parameters are pre-configured for FHD resolution

2. **For Standard RPG Maker MZ (816x624)**:
   - Use the original `MOG_BattleHud.js` from the source

3. **Graphics Requirements**:
   - You'll still need the same image files in `img/battlehud/`:
     - HP_Meter.png, MP_Meter.png, TP_Meter.png, ATB_Meter.png
     - HP_Number.png, MP_Number.png, TP_Number.png
     - Layout.png, Layout2.png
     - Face_[ACTOR_ID].png
     - Turn.png
     - Layout_Command.png, Layout_Party.png, etc.
   - **Note**: You may want to scale up your graphics assets to match FHD resolution for best quality

4. **Fine-Tuning**:
   - All parameters can still be adjusted in the plugin manager
   - The FHD values serve as optimized starting points
   - Custom positions 1-8 remain available for precise positioning

## Technical Notes

- **Rounding**: All scaled values are rounded to the nearest integer
- **Zero Values**: Zero coordinates remain zero (no scaling needed)
- **Negative Values**: Sign is preserved during scaling
- **Non-Coordinate Parameters**: Unchanged (font sizes, alignments, booleans)

## Conversion Method

A Python script was used to:
1. Parse all plugin parameters
2. Identify coordinate-related parameters (X-Axis, Y-Axis, Slide, Space, Width, Height)
3. Apply appropriate scaling factor (X or Y)
4. Replace default values while preserving all other code

## Version History

- **Original**: v1.3 by Moghunter (816x624)
- **FHD Version**: v1.3 FHD (1920x1080) - Converted November 5, 2025

---

**Ready to use!** Simply install `MOG_BattleHud_FHD.js` in your FHD RPG Maker MZ project.
