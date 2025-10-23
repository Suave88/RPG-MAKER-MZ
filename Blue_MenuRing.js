//=============================================================================
// Bluemoon Plugins - MZ - "RING" from Menu Collection for RPG MAKER MZ
// Blue_MenuRing.js   VERSION 1.2.3 - Memory Leak Fix
//=============================================================================

var Imported = Imported || {};
Imported.Blue_MenuRing = true;

var Bluemoon = Bluemoon || {};
Bluemoon.MenuRing = Bluemoon.MenuRing || {};

//=============================================================================
 /*:
 * @target MZ
 * @URL 
 * @plugindesc v1.2.3 Memory Leak Fix - Proper resource cleanup for gold/map windows
 * @author Bluemoon || Nebula Games - Enhanced with Memory Management
 * @help
 * CHANGELOG:
 * VERSION 1.0.0: Plugin Released!
 * VERSION 1.0.1: Small bug fix related to help window.
 * VERSION 1.0.2: Added SV battler support and center positioning
 * VERSION 1.0.3: Added text display, removed shadows, custom positioning
 * VERSION 1.1.0: Complete text customization with position and font controls
 * VERSION 1.1.1: Added gold and map location display windows
 * VERSION 1.2.0: Advanced gold and map window customization with icons and positioning
 * VERSION 1.2.1: Fixed icon cleanup issue and added window transparency controls
 * VERSION 1.2.2: Simple fix for icon persistence - no more complex cleanup needed
 * VERSION 1.2.3: PROPER memory leak fix - complete resource cleanup
 *
 * @param Menu Speed
 * @desc The speed of menu animations
 * @decimals 1
 * @default 0.2
 * 
 * @param Open Radius
 * @desc The default value of the radius when the menu is opened
 * @type number
 * @default 100
 * 
 * @param Closed Radius
 * @desc The default value of the radius when the menu is closed
 * @type number
 * @default 240
 * 
 * @param Command Scale Factor
 * @desc The default scale factor of the current index command
 * @type number
 * @decimals 1
 * @default 1.2
 * 
 * @param Force Center Position
 * @desc Force ring menu to appear at screen center instead of player position
 * @type boolean
 * @default true
 * 
 * @param Center X Offset
 * @desc X offset from center (only if Force Center Position is true)
 * @type number
 * @min -500
 * @max 500
 * @default 0
 * 
 * @param Center Y Offset
 * @desc Y offset from center (only if Force Center Position is true)
 * @type number
 * @min -500
 * @max 500
 * @default 0
 * 
 * @param Use SV Battlers
 * @desc Use SV battler sprites instead of character sprites in party status
 * @type boolean
 * @default true
 * 
 * @param SV Battler Scale
 * @desc Scale factor for SV battler sprites
 * @type number
 * @decimals 2
 * @min 0.1
 * @max 3.0
 * @default 0.75
 * 
 * @param SV Animation Speed
 * @desc Speed of SV battler idle animation (higher = faster)
 * @type number
 * @decimals 1
 * @min 0.1
 * @max 5.0
 * @default 1.0
 * 
 * @param Party Status Y Position
 * @desc Y position of party status (0.0 = top, 1.0 = bottom)
 * @type number
 * @decimals 2
 * @min 0.1
 * @max 0.95
 * @default 0.82
 * 
 * @param Battler X Offset
 * @desc X offset for SV battler position
 * @type number
 * @min -300
 * @max 300
 * @default 0
 * 
 * @param Battler Y Offset
 * @desc Y offset for SV battler position
 * @type number
 * @min -300
 * @max 300
 * @default 0
 * 
 * @param Show Actor Names
 * @desc Show actor names below battlers
 * @type boolean
 * @default true
 * 
 * @param Show Level Info
 * @desc Show level, current EXP, and next EXP information
 * @type boolean
 * @default true
 * 
 * @param Show Gold Display
 * @desc Show gold display in ring menu
 * @type boolean
 * @default true
 * 
 * @param Show Map Location
 * @desc Show current map location in ring menu
 * @type boolean
 * @default true
 * 
 * @param Gold Window Settings
 * @desc Comprehensive settings for the gold display window
 * @type struct<GoldWindowSettings>
 * @default {"windowXOffset":"0","windowYOffset":"0","windowWidth":"200","windowHeight":"54","windowOpacity":"220","windowBackOpacity":"192","windowDimmer":"false","iconIndex":"313","iconXOffset":"8","iconYOffset":"8","iconSize":"32","showIcon":"true","textXOffset":"45","textYOffset":"0","fontSize":"16","fontFace":"rmmz-mainfont","textColor":"#ffffff","outlineWidth":"2","outlineColor":"#000000","textAlign":"left","prefix":"","suffix":""}
 * 
 * @param Map Window Settings
 * @desc Comprehensive settings for the map location display window
 * @type struct<MapWindowSettings>
 * @default {"windowXOffset":"0","windowYOffset":"60","windowWidth":"200","windowHeight":"54","windowOpacity":"220","windowBackOpacity":"192","windowDimmer":"false","iconIndex":"190","iconXOffset":"8","iconYOffset":"8","iconSize":"32","showIcon":"true","textXOffset":"45","textYOffset":"0","fontSize":"16","fontFace":"rmmz-mainfont","textColor":"#ffffff","outlineWidth":"2","outlineColor":"#000000","textAlign":"left","prefix":"","suffix":""}
 * 
 * @param Name Text Settings
 * @desc Customization settings for actor name text
 * @type struct<NameTextSettings>
 * @default {"fontSize":"16","fontFace":"rmmz-mainfont","textColor":"#ffffff","outlineWidth":"2","outlineColor":"#000000","xOffset":"0","yOffset":"10","bitmapWidth":"120","bitmapHeight":"24","textAlign":"center"}
 * 
 * @param Level Text Settings
 * @desc Customization settings for level text
 * @type struct<LevelTextSettings>
 * @default {"fontSize":"14","fontFace":"rmmz-mainfont","textColor":"#ffff88","outlineWidth":"2","outlineColor":"#000000","xOffset":"0","yOffset":"85","bitmapWidth":"100","bitmapHeight":"18","textAlign":"center"}
 * 
 * @param Current EXP Text Settings
 * @desc Customization settings for current EXP text
 * @type struct<ExpTextSettings>
 * @default {"fontSize":"12","fontFace":"rmmz-mainfont","textColor":"#88ff88","outlineWidth":"2","outlineColor":"#000000","xOffset":"0","yOffset":"100","bitmapWidth":"120","bitmapHeight":"16","textAlign":"center","prefix":"EXP: "}
 * 
 * @param Next EXP Text Settings
 * @desc Customization settings for next EXP text
 * @type struct<ExpTextSettings>
 * @default {"fontSize":"12","fontFace":"rmmz-mainfont","textColor":"#ff8888","outlineWidth":"2","outlineColor":"#000000","xOffset":"0","yOffset":"115","bitmapWidth":"120","bitmapHeight":"16","textAlign":"center","prefix":"Next: "}
 * 
 * @param HP Gauge Settings
 * @desc Customization settings for HP gauge positioning
 * @type struct<GaugeSettings>
 * @default {"xOffset":"-60","yOffset":"-40","spacing":"4"}
 * 
 * @param MP Gauge Settings
 * @desc Customization settings for MP gauge positioning
 * @type struct<GaugeSettings>
 * @default {"xOffset":"-60","yOffset":"-30","spacing":"4"}
 * 
 * @param Show Actor States
 * @desc Show actor status icons below MP gauge
 * @type boolean
 * @default true
 * 
 * @param State Icons Settings
 * @desc Customization settings for state icons
 * @type struct<StateIconSettings>
 * @default {"xOffset":"0","yOffset":"-20","iconSize":"24","maxIcons":"6","spacing":"2"}
 * 
 * @param Abnormal State Motion
 * @desc Enable abnormal motion for actors with negative states
 * @type boolean
 * @default true
 * 
 * @param Help Window Descriptions
 * @desc The array of help window descriptions
 * @type struct<HelpWindowDescription>[]
 * @default ["{\"Symbol Name\":\"item\",\"Description\":\"%1 - The pocket containing all your items.\"}","{\"Symbol Name\":\"skill\",\"Description\":\"%1 - Edit your party skills and abilities.\"}","{\"Symbol Name\":\"equip\",\"Description\":\"%1 - Edit party's equipment.\"}","{\"Symbol Name\":\"status\",\"Description\":\"%1 - Check party's members status.\"}","{\"Symbol Name\":\"formation\",\"Description\":\"%1 - Edit party's formation.\"}","{\"Symbol Name\":\"options\",\"Description\":\"%1 - Change game options.\"}","{\"Symbol Name\":\"save\",\"Description\":\"%1 - Save the game.\"}","{\"Symbol Name\":\"gameEnd\",\"Description\":\"%1 - Exit game or go back to titlescreen.\"}"]
 * 
 * @param Actor Help Window String Format
 * @desc The help window string format when an actor is selected. %1 -> Actor name; %2 -> Actor Description
 * @type text
 * @default %1 - %2
 * 
 * @param Ring Menu Icons
 * @desc This is the icons of the ring menu. They're assigned in relation to the command order.
 * @type struct<CommandIcon>[]
 * @default ["{\"Symbol Name\":\"item\",\"IconIndex\":\"208\"}","{\"Symbol Name\":\"skill\",\"IconIndex\":\"76\"}","{\"Symbol Name\":\"equip\",\"IconIndex\":\"132\"}","{\"Symbol Name\":\"status\",\"IconIndex\":\"222\"}","{\"Symbol Name\":\"formation\",\"IconIndex\":\"75\"}","{\"Symbol Name\":\"options\",\"IconIndex\":\"242\"}","{\"Symbol Name\":\"save\",\"IconIndex\":\"186\"}","{\"Symbol Name\":\"gameEnd\",\"IconIndex\":\"16\"}"]
 * 
 * @param Custom Commands Symbols
 * @desc [ADVANCED] You can add symbols of commands that are not available by default in Rpg Maker
 * @type note
 * @default "if(symbol === \"mysymbol\") {\n//my code...\n}"
 * 
 * @param Custom Personal Commands Symbols
 * @desc [ADVANCED] You can add symbols of personal commands that are not available by default in Rpg Maker
 * @type note
 * @default "if(symbol === \"mysymbol\") {\n//my code...\n}"
 */

// Gold Window Settings Structure with transparency controls
/*~struct~GoldWindowSettings:
 * @param windowXOffset
 * @desc X position offset for the gold window
 * @type number
 * @min -1000
 * @max 1000
 * @default 0
 * 
 * @param windowYOffset
 * @desc Y position offset for the gold window
 * @type number
 * @min -1000
 * @max 1000
 * @default 0
 * 
 * @param windowWidth
 * @desc Width of the gold window
 * @type number
 * @min 100
 * @max 500
 * @default 200
 * 
 * @param windowHeight
 * @desc Height of the gold window
 * @type number
 * @min 30
 * @max 200
 * @default 54
 * 
 * @param windowOpacity
 * @desc Window frame opacity (0 = invisible, 255 = opaque)
 * @type number
 * @min 0
 * @max 255
 * @default 220
 * 
 * @param windowBackOpacity
 * @desc Window background opacity (0 = transparent, 255 = opaque)
 * @type number
 * @min 0
 * @max 255
 * @default 192
 * 
 * @param windowDimmer
 * @desc Enable window dimmer effect
 * @type boolean
 * @default false
 * 
 * @param iconIndex
 * @desc Icon index for the gold display (from IconSet.png)
 * @type number
 * @min 0
 * @max 9999
 * @default 313
 * 
 * @param iconXOffset
 * @desc X offset for the gold icon
 * @type number
 * @min -100
 * @max 100
 * @default 8
 * 
 * @param iconYOffset
 * @desc Y offset for the gold icon
 * @type number
 * @min -100
 * @max 100
 * @default 8
 * 
 * @param iconSize
 * @desc Size of the gold icon
 * @type number
 * @min 16
 * @max 64
 * @default 32
 * 
 * @param showIcon
 * @desc Show icon in gold window
 * @type boolean
 * @default true
 * 
 * @param textXOffset
 * @desc X offset for the gold text
 * @type number
 * @min -200
 * @max 200
 * @default 45
 * 
 * @param textYOffset
 * @desc Y offset for the gold text
 * @type number
 * @min -100
 * @max 100
 * @default 0
 * 
 * @param fontSize
 * @desc Font size for gold text
 * @type number
 * @min 8
 * @max 72
 * @default 16
 * 
 * @param fontFace
 * @desc Font face for gold text
 * @type string
 * @default rmmz-mainfont
 * 
 * @param textColor
 * @desc Text color for gold amount (hex format)
 * @type string
 * @default #ffffff
 * 
 * @param outlineWidth
 * @desc Outline width for gold text
 * @type number
 * @min 0
 * @max 10
 * @default 2
 * 
 * @param outlineColor
 * @desc Outline color for gold text (hex format)
 * @type string
 * @default #000000
 * 
 * @param textAlign
 * @desc Text alignment for gold amount
 * @type select
 * @option left
 * @option center
 * @option right
 * @default left
 * 
 * @param prefix
 * @desc Text prefix for gold display
 * @type string
 * @default 
 * 
 * @param suffix
 * @desc Text suffix for gold display
 * @type string
 * @default 
 */

// Map Window Settings Structure with transparency controls
/*~struct~MapWindowSettings:
 * @param windowXOffset
 * @desc X position offset for the map window
 * @type number
 * @min -1000
 * @max 1000
 * @default 0
 * 
 * @param windowYOffset
 * @desc Y position offset for the map window
 * @type number
 * @min -1000
 * @max 1000
 * @default 60
 * 
 * @param windowWidth
 * @desc Width of the map window
 * @type number
 * @min 100
 * @max 500
 * @default 200
 * 
 * @param windowHeight
 * @desc Height of the map window
 * @type number
 * @min 30
 * @max 200
 * @default 54
 * 
 * @param windowOpacity
 * @desc Window frame opacity (0 = invisible, 255 = opaque)
 * @type number
 * @min 0
 * @max 255
 * @default 220
 * 
 * @param windowBackOpacity
 * @desc Window background opacity (0 = transparent, 255 = opaque)
 * @type number
 * @min 0
 * @max 255
 * @default 192
 * 
 * @param windowDimmer
 * @desc Enable window dimmer effect
 * @type boolean
 * @default false
 * 
 * @param iconIndex
 * @desc Icon index for the map display (from IconSet.png)
 * @type number
 * @min 0
 * @max 9999
 * @default 190
 * 
 * @param iconXOffset
 * @desc X offset for the map icon
 * @type number
 * @min -100
 * @max 100
 * @default 8
 * 
 * @param iconYOffset
 * @desc Y offset for the map icon
 * @type number
 * @min -100
 * @max 100
 * @default 8
 * 
 * @param iconSize
 * @desc Size of the map icon
 * @type number
 * @min 16
 * @max 64
 * @default 32
 * 
 * @param showIcon
 * @desc Show icon in map window
 * @type boolean
 * @default true
 * 
 * @param textXOffset
 * @desc X offset for the map text
 * @type number
 * @min -200
 * @max 200
 * @default 45
 * 
 * @param textYOffset
 * @desc Y offset for the map text
 * @type number
 * @min -100
 * @max 100
 * @default 0
 * 
 * @param fontSize
 * @desc Font size for map text
 * @type number
 * @min 8
 * @max 72
 * @default 16
 * 
 * @param fontFace
 * @desc Font face for map text
 * @type string
 * @default rmmz-mainfont
 * 
 * @param textColor
 * @desc Text color for map name (hex format)
 * @type string
 * @default #ffffff
 * 
 * @param outlineWidth
 * @desc Outline width for map text
 * @type number
 * @min 0
 * @max 10
 * @default 2
 * 
 * @param outlineColor
 * @desc Outline color for map text (hex format)
 * @type string
 * @default #000000
 * 
 * @param textAlign
 * @desc Text alignment for map name
 * @type select
 * @option left
 * @option center
 * @option right
 * @default left
 * 
 * @param prefix
 * @desc Text prefix for map display
 * @type string
 * @default 
 * 
 * @param suffix
 * @desc Text suffix for map display
 * @type string
 * @default 
 */

 /*~struct~NameTextSettings:
 * @param fontSize
 * @desc Font size for actor names
 * @type number
 * @min 8
 * @max 72
 * @default 16
 * 
 * @param fontFace
 * @desc Font face for actor names
 * @type string
 * @default rmmz-mainfont
 * 
 * @param textColor
 * @desc Text color for actor names (hex format)
 * @type string
 * @default #ffffff
 * 
 * @param outlineWidth
 * @desc Outline width for actor names
 * @type number
 * @min 0
 * @max 10
 * @default 2
 * 
 * @param outlineColor
 * @desc Outline color for actor names (hex format)
 * @type string
 * @default #000000
 * 
 * @param xOffset
 * @desc X position offset for actor names
 * @type number
 * @min -300
 * @max 300
 * @default 0
 * 
 * @param yOffset
 * @desc Y position offset for actor names
 * @type number
 * @min -300
 * @max 300
 * @default 10
 * 
 * @param bitmapWidth
 * @desc Bitmap width for actor names
 * @type number
 * @min 50
 * @max 300
 * @default 120
 * 
 * @param bitmapHeight
 * @desc Bitmap height for actor names
 * @type number
 * @min 10
 * @max 100
 * @default 24
 * 
 * @param textAlign
 * @desc Text alignment for actor names
 * @type select
 * @option left
 * @option center
 * @option right
 * @default center
 */
 /*~struct~LevelTextSettings:
 * @param fontSize
 * @desc Font size for level text
 * @type number
 * @min 8
 * @max 72
 * @default 14
 * 
 * @param fontFace
 * @desc Font face for level text
 * @type string
 * @default rmmz-mainfont
 * 
 * @param textColor
 * @desc Text color for level text (hex format)
 * @type string
 * @default #ffff88
 * 
 * @param outlineWidth
 * @desc Outline width for level text
 * @type number
 * @min 0
 * @max 10
 * @default 2
 * 
 * @param outlineColor
 * @desc Outline color for level text (hex format)
 * @type string
 * @default #000000
 * 
 * @param xOffset
 * @desc X position offset for level text
 * @type number
 * @min -300
 * @max 300
 * @default 0
 * 
 * @param yOffset
 * @desc Y position offset for level text
 * @type number
 * @min -300
 * @max 300
 * @default 85
 * 
 * @param bitmapWidth
 * @desc Bitmap width for level text
 * @type number
 * @min 50
 * @max 300
 * @default 100
 * 
 * @param bitmapHeight
 * @desc Bitmap height for level text
 * @type number
 * @min 10
 * @max 100
 * @default 18
 * 
 * @param textAlign
 * @desc Text alignment for level text
 * @type select
 * @option left
 * @option center
 * @option right
 * @default center
 */
 /*~struct~ExpTextSettings:
 * @param fontSize
 * @desc Font size for EXP text
 * @type number
 * @min 8
 * @max 72
 * @default 12
 * 
 * @param fontFace
 * @desc Font face for EXP text
 * @type string
 * @default rmmz-mainfont
 * 
 * @param textColor
 * @desc Text color for EXP text (hex format)
 * @type string
 * @default #88ff88
 * 
 * @param outlineWidth
 * @desc Outline width for EXP text
 * @type number
 * @min 0
 * @max 10
 * @default 2
 * 
 * @param outlineColor
 * @desc Outline color for EXP text (hex format)
 * @type string
 * @default #000000
 * 
 * @param xOffset
 * @desc X position offset for EXP text
 * @type number
 * @min -300
 * @max 300
 * @default 0
 * 
 * @param yOffset
 * @desc Y position offset for EXP text
 * @type number
 * @min -300
 * @max 300
 * @default 100
 * 
 * @param bitmapWidth
 * @desc Bitmap width for EXP text
 * @type number
 * @min 50
 * @max 300
 * @default 120
 * 
 * @param bitmapHeight
 * @desc Bitmap height for EXP text
 * @type number
 * @min 10
 * @max 100
 * @default 16
 * 
 * @param textAlign
 * @desc Text alignment for EXP text
 * @type select
 * @option left
 * @option center
 * @option right
 * @default center
 * 
 * @param prefix
 * @desc Text prefix for EXP display
 * @type string
 * @default EXP: 
 */
 /*~struct~GaugeSettings:
 * @param xOffset
 * @desc X position offset for gauge
 * @type number
 * @min -300
 * @max 300
 * @default -60
 * 
 * @param yOffset
 * @desc Y position offset for gauge
 * @type number
 * @min -300
 * @max 300
 * @default -40
 * 
 * @param spacing
 * @desc Spacing between HP and MP gauge
 * @type number
 * @min 0
 * @max 50
 * @default 4
 */
 /*~struct~StateIconSettings:
 * @param xOffset
 * @desc X position offset for state icons
 * @type number
 * @min -300
 * @max 300
 * @default 0
 * 
 * @param yOffset
 * @desc Y position offset for state icons
 * @type number
 * @min -300
 * @max 300
 * @default -20
 * 
 * @param iconSize
 * @desc Size of state icons
 * @type number
 * @min 12
 * @max 64
 * @default 24
 * 
 * @param maxIcons
 * @desc Maximum number of icons to display
 * @type number
 * @min 1
 * @max 12
 * @default 6
 * 
 * @param spacing
 * @desc Spacing between state icons
 * @type number
 * @min 0
 * @max 20
 * @default 2
 */
 /*~struct~HelpWindowDescription:
 * @param Symbol Name
 * @desc The symbol to which you want to assign a description.
 * @type text
 * @default
 * 
 * @param Description
 * @desc The description for the command that should appear in the help window.
 * @type text
 * @default
 */
 /*~struct~CommandIcon:
 * @param Symbol Name
 * @desc The symbol to which you want to assign an icon.
 * @type text
 * @default
 * 
 * @param IconIndex
 * @desc The description for the command that should appear in the help window.
 * @type number
 * @min 0
 * @default 16
 */
 //=============================================================================

(function($) {

	const Parameters = PluginManager.parameters("Blue_MenuRing");
	const _menu_speed = parseFloat(Parameters["Menu Speed"]) || 0.2;
	const _open_radius = parseInt(Parameters["Open Radius"]) || 100;
	const _closed_radius = parseInt(Parameters["Closed Radius"]) || 240;
	const _command_scale_factor = parseFloat(Parameters["Command Scale Factor"]) || 1.2;
	const _force_center = Parameters["Force Center Position"] === "true";
	const _center_x_offset = parseInt(Parameters["Center X Offset"]) || 0;
	const _center_y_offset = parseInt(Parameters["Center Y Offset"]) || 0;
	const _use_sv_battlers = Parameters["Use SV Battlers"] === "true";
	const _sv_battler_scale = parseFloat(Parameters["SV Battler Scale"]) || 0.75;
	const _sv_animation_speed = parseFloat(Parameters["SV Animation Speed"]) || 1.0;
	const _party_status_y_pos = parseFloat(Parameters["Party Status Y Position"]) || 0.82;
	const _battler_x_offset = parseInt(Parameters["Battler X Offset"]) || 0;
	const _battler_y_offset = parseInt(Parameters["Battler Y Offset"]) || 0;
	const _show_actor_names = Parameters["Show Actor Names"] !== "false";
	const _show_level_info = Parameters["Show Level Info"] !== "false";
	const _show_actor_states = Parameters["Show Actor States"] !== "false";
	const _abnormal_state_motion = Parameters["Abnormal State Motion"] !== "false";
	const _show_gold_display = Parameters["Show Gold Display"] !== "false";
	const _show_map_location = Parameters["Show Map Location"] !== "false";
	
	// Parse advanced window settings with transparency controls
	const _gold_window_settings = parseWindowSettings(Parameters["Gold Window Settings"], {
		windowXOffset: 0, windowYOffset: 0, windowWidth: 200, windowHeight: 54,
		windowOpacity: 220, windowBackOpacity: 192, windowDimmer: false,
		iconIndex: 313, iconXOffset: 8, iconYOffset: 8, iconSize: 32, showIcon: true,
		textXOffset: 45, textYOffset: 0, fontSize: 16, fontFace: "rmmz-mainfont",
		textColor: "#ffffff", outlineWidth: 2, outlineColor: "#000000",
		textAlign: "left", prefix: "", suffix: ""
	});
	
	const _map_window_settings = parseWindowSettings(Parameters["Map Window Settings"], {
		windowXOffset: 0, windowYOffset: 60, windowWidth: 200, windowHeight: 54,
		windowOpacity: 220, windowBackOpacity: 192, windowDimmer: false,
		iconIndex: 190, iconXOffset: 8, iconYOffset: 8, iconSize: 32, showIcon: true,
		textXOffset: 45, textYOffset: 0, fontSize: 16, fontFace: "rmmz-mainfont",
		textColor: "#ffffff", outlineWidth: 2, outlineColor: "#000000",
		textAlign: "left", prefix: "", suffix: ""
	});
	
	// Parse text settings
	const _name_text_settings = parseTextSettings(Parameters["Name Text Settings"], {
		fontSize: 16, fontFace: "rmmz-mainfont", textColor: "#ffffff",
		outlineWidth: 2, outlineColor: "#000000", xOffset: 0, yOffset: 10,
		bitmapWidth: 120, bitmapHeight: 24, textAlign: "center"
	});
	
	const _level_text_settings = parseTextSettings(Parameters["Level Text Settings"], {
		fontSize: 14, fontFace: "rmmz-mainfont", textColor: "#ffff88",
		outlineWidth: 2, outlineColor: "#000000", xOffset: 0, yOffset: 85, bitmapWidth: 100, bitmapHeight: 18, textAlign: "center"
	});
	
	const _current_exp_text_settings = parseTextSettings(Parameters["Current EXP Text Settings"], {
		fontSize: 12, fontFace: "rmmz-mainfont", textColor: "#88ff88",
		outlineWidth: 2, outlineColor: "#000000", xOffset: 0, yOffset: 100,
		bitmapWidth: 120, bitmapHeight: 16, textAlign: "center", prefix: "EXP: "
	});
	
	const _next_exp_text_settings = parseTextSettings(Parameters["Next EXP Text Settings"], {
		fontSize: 12, fontFace: "rmmz-mainfont", textColor: "#ff8888",
		outlineWidth: 2, outlineColor: "#000000", xOffset: 0, yOffset: 115,
		bitmapWidth: 120, bitmapHeight: 16, textAlign: "center", prefix: "Next: "
	});

	// Parse gauge settings
	const _hp_gauge_settings = parseGaugeSettings(Parameters["HP Gauge Settings"], {
		xOffset: -60, yOffset: -40, spacing: 4
	});
	
	const _mp_gauge_settings = parseGaugeSettings(Parameters["MP Gauge Settings"], {
		xOffset: -60, yOffset: -30, spacing: 4
	});

	// Parse state icon settings
	const _state_icon_settings = parseStateIconSettings(Parameters["State Icons Settings"], {
		xOffset: 0, yOffset: -20, iconSize: 24, maxIcons: 6, spacing: 2
	});

	// Enhanced window settings parser with transparency controls
	function parseWindowSettings(paramString, defaultSettings) {
		let settings = Object.assign({}, defaultSettings);
		
		try {
			if (paramString && paramString !== "undefined") {
				const parsed = JSON.parse(paramString);
				settings.windowXOffset = parseInt(parsed.windowXOffset) || defaultSettings.windowXOffset;
				settings.windowYOffset = parseInt(parsed.windowYOffset) || defaultSettings.windowYOffset;
				settings.windowWidth = parseInt(parsed.windowWidth) || defaultSettings.windowWidth;
				settings.windowHeight = parseInt(parsed.windowHeight) || defaultSettings.windowHeight;
				settings.windowOpacity = parseInt(parsed.windowOpacity) || defaultSettings.windowOpacity;
				settings.windowBackOpacity = parseInt(parsed.windowBackOpacity) || defaultSettings.windowBackOpacity;
				settings.windowDimmer = parsed.windowDimmer === "true";
				settings.iconIndex = parseInt(parsed.iconIndex) || defaultSettings.iconIndex;
				settings.iconXOffset = parseInt(parsed.iconXOffset) || defaultSettings.iconXOffset;
				settings.iconYOffset = parseInt(parsed.iconYOffset) || defaultSettings.iconYOffset;
				settings.iconSize = parseInt(parsed.iconSize) || defaultSettings.iconSize;
				settings.showIcon = parsed.showIcon !== "false";
				settings.textXOffset = parseInt(parsed.textXOffset) || defaultSettings.textXOffset;
				settings.textYOffset = parseInt(parsed.textYOffset) || defaultSettings.textYOffset;
				settings.fontSize = parseInt(parsed.fontSize) || defaultSettings.fontSize;
				settings.fontFace = String(parsed.fontFace) || defaultSettings.fontFace;
				settings.textColor = String(parsed.textColor) || defaultSettings.textColor;
				settings.outlineWidth = parseInt(parsed.outlineWidth) || defaultSettings.outlineWidth;
				settings.outlineColor = String(parsed.outlineColor) || defaultSettings.outlineColor;
				settings.textAlign = String(parsed.textAlign) || defaultSettings.textAlign;
				settings.prefix = String(parsed.prefix || "");
				settings.suffix = String(parsed.suffix || "");
			}
		} catch(e) {
			console.warn("Blue_MenuRing: Error parsing window settings, using defaults", e);
		}
		
		return settings;
	}

	function parseGaugeSettings(paramString, defaultSettings) {
		let settings = Object.assign({}, defaultSettings);
		
		try {
			if (paramString && paramString !== "undefined") {
				const parsed = JSON.parse(paramString);
				settings.xOffset = parseInt(parsed.xOffset) || defaultSettings.xOffset;
				settings.yOffset = parseInt(parsed.yOffset) || defaultSettings.yOffset;
				settings.spacing = parseInt(parsed.spacing) || defaultSettings.spacing;
			}
		} catch(e) {
			console.warn("Blue_MenuRing: Error parsing gauge settings, using defaults", e);
		}
		
		return settings;
	}

	function parseStateIconSettings(paramString, defaultSettings) {
		let settings = Object.assign({}, defaultSettings);
		
		try {
			if (paramString && paramString !== "undefined") {
				const parsed = JSON.parse(paramString);
				settings.xOffset = parseInt(parsed.xOffset) || defaultSettings.xOffset;
				settings.yOffset = parseInt(parsed.yOffset) || defaultSettings.yOffset;
				settings.iconSize = parseInt(parsed.iconSize) || defaultSettings.iconSize;
				settings.maxIcons = parseInt(parsed.maxIcons) || defaultSettings.maxIcons;
				settings.spacing = parseInt(parsed.spacing) || defaultSettings.spacing;
			}
		} catch(e) {
			console.warn("Blue_MenuRing: Error parsing state icon settings, using defaults", e);
		}
		
		return settings;
	}

	function parseTextSettings(paramString, defaultSettings) {
		let settings = Object.assign({}, defaultSettings);
		
		try {
			if (paramString && paramString !== "undefined") {
				const parsed = JSON.parse(paramString);
				settings.fontSize = parseInt(parsed.fontSize) || defaultSettings.fontSize;
				settings.fontFace = String(parsed.fontFace) || defaultSettings.fontFace;
				settings.textColor = String(parsed.textColor) || defaultSettings.textColor;
				settings.outlineWidth = parseInt(parsed.outlineWidth) || defaultSettings.outlineWidth;
				settings.outlineColor = String(parsed.outlineColor) || defaultSettings.outlineColor;
				settings.xOffset = parseInt(parsed.xOffset) || defaultSettings.xOffset;
				settings.yOffset = parseInt(parsed.yOffset) || defaultSettings.yOffset;
				settings.bitmapWidth = parseInt(parsed.bitmapWidth) || defaultSettings.bitmapWidth;
				settings.bitmapHeight = parseInt(parsed.bitmapHeight) || defaultSettings.bitmapHeight;
				settings.textAlign = String(parsed.textAlign) || defaultSettings.textAlign;
				if (parsed.prefix !== undefined) {
					settings.prefix = String(parsed.prefix);
				}
			}
		} catch(e) {
			console.warn("Blue_MenuRing: Error parsing text settings, using defaults", e);
		}
		
		return settings;
	}
	
	const _help_window_description = {};

	try {
		const helpDescriptions = Parameters["Help Window Descriptions"];
		if (helpDescriptions && helpDescriptions !== "undefined") {
			const parsed = JSON.parse(helpDescriptions);
			for(let comm of parsed) {
				if (typeof comm === 'string') {
					const parsed_comm = JSON.parse(comm);
					_help_window_description[parsed_comm["Symbol Name"]] = parsed_comm["Description"];
				}
			}
		}
	} catch(e) {
		console.warn("Blue_MenuRing: Error parsing Help Window Descriptions, using defaults");
		_help_window_description["item"] = "%1 - The pocket containing all your items.";
		_help_window_description["skill"] = "%1 - Edit your party skills and abilities.";
		_help_window_description["equip"] = "%1 - Edit party's equipment.";
		_help_window_description["status"] = "%1 - Check party's members status.";
		_help_window_description["formation"] = "%1 - Edit party's formation.";
		_help_window_description["options"] = "%1 - Change game options.";
		_help_window_description["save"] = "%1 - Save the game.";
		_help_window_description["gameEnd"] = "%1 - Exit game or go back to titlescreen.";
	}
	
	const _actor_help_window_string_format = String(Parameters["Actor Help Window String Format"]) || "%1 - %2";
	const _ring_menu_icons = {};

	try {
		const ringIcons = Parameters["Ring Menu Icons"];
		if (ringIcons && ringIcons !== "undefined") {
			const parsed = JSON.parse(ringIcons);
			for(let comm of parsed) {
				if (typeof comm === 'string') {
					const parsed_comm = JSON.parse(comm);
					_ring_menu_icons[parsed_comm["Symbol Name"]] = parseInt(parsed_comm["IconIndex"]);
				}
			}
		}
	} catch(e) {
		console.warn("Blue_MenuRing: Error parsing Ring Menu Icons, using defaults");
		_ring_menu_icons["item"] = 208;
		_ring_menu_icons["skill"] = 76;
		_ring_menu_icons["equip"] = 132;
		_ring_menu_icons["status"] = 222;
		_ring_menu_icons["formation"] = 75;
		_ring_menu_icons["options"] = 242;
		_ring_menu_icons["save"] = 186;
		_ring_menu_icons["gameEnd"] = 16;
	}

	let _custom_process_command = "if(symbol === \"mysymbol\") {\n//my code...\n}";
	let _custom_process_personal_command = "if(symbol === \"mysymbol\") {\n//my code...\n}";
	
	try {
		if (Parameters["Custom Commands Symbols"] && Parameters["Custom Commands Symbols"] !== "undefined") {
			_custom_process_command = JSON.parse(Parameters["Custom Commands Symbols"]);
		}
	} catch(e) {
		console.warn("Blue_MenuRing: Error parsing Custom Commands Symbols, using default");
	}
	
	try {
		if (Parameters["Custom Personal Commands Symbols"] && Parameters["Custom Personal Commands Symbols"] !== "undefined") {
			_custom_process_personal_command = JSON.parse(Parameters["Custom Personal Commands Symbols"]);
		}
	} catch(e) {
		console.warn("Blue_MenuRing: Error parsing Custom Personal Commands Symbols, using default");
	}

	//-----------------------------------------------------------------------------
	// Window_RingMenuGold - WITH PROPER CLEANUP
	//-----------------------------------------------------------------------------
	class Window_RingMenuGold extends Window_Base {
		initialize() {
			const rect = new Rectangle(0, 0, _gold_window_settings.windowWidth, _gold_window_settings.windowHeight);
			super.initialize(rect);
			this.opacity = _gold_window_settings.windowOpacity;
			this.backOpacity = _gold_window_settings.windowBackOpacity;
			this._iconSprite = null;
			this._dimmerSprite = null;
			this.createIcon();
			this.refresh();
			
			// Apply dimmer effect if enabled
			if (_gold_window_settings.windowDimmer) {
				this.createDimmerSprite();
			}
		}

		createDimmerSprite() {
			this._dimmerSprite = new Sprite();
			this._dimmerSprite.bitmap = new Bitmap(this.width, this.height);
			this._dimmerSprite.bitmap.fillRect(0, 0, this.width, this.height, 'rgba(0, 0, 0, 0.4)');
			this.addChildToBack(this._dimmerSprite);
		}

		createIcon() {
			if (_gold_window_settings.showIcon) {
				this._iconSprite = new Sprite();
				this._iconSprite.bitmap = ImageManager.loadSystem("IconSet");
				this._iconSprite.x = _gold_window_settings.iconXOffset;
				this._iconSprite.y = _gold_window_settings.iconYOffset;
				
				if (this._iconSprite.bitmap.isReady()) {
					this.setupIconFrame();
				} else {
					this._iconSprite.bitmap.addLoadListener(() => {
						this.setupIconFrame();
					});
				}
				
				this.addChild(this._iconSprite);
			}
		}

		setupIconFrame() {
			if (!this._iconSprite || !this._iconSprite.bitmap) return;
			
			const iconIndex = _gold_window_settings.iconIndex;
			const pw = ImageManager.iconWidth;
			const ph = ImageManager.iconHeight;
			const sx = (iconIndex % 16) * pw;
			const sy = Math.floor(iconIndex / 16) * ph;
			this._iconSprite.setFrame(sx, sy, pw, ph);
			
			// Scale to desired size
			const scale = _gold_window_settings.iconSize / pw;
			this._iconSprite.scale.set(scale, scale);
		}

		refresh() {
			this.contents.clear();
			
			// Setup text formatting
			this.contents.fontSize = _gold_window_settings.fontSize;
			this.contents.fontFace = _gold_window_settings.fontFace;
			this.contents.textColor = _gold_window_settings.textColor;
			this.contents.outlineWidth = _gold_window_settings.outlineWidth;
			this.contents.outlineColor = _gold_window_settings.outlineColor;
			
			const gold = $gameParty.gold();
			const prefix = _gold_window_settings.prefix || "";
			const suffix = _gold_window_settings.suffix || "";
			const text = `${prefix}${gold.toLocaleString()}${suffix}`;
			
			// Calculate text area
			const textX = _gold_window_settings.textXOffset;
			const textY = _gold_window_settings.textYOffset;
			const textWidth = this.contents.width - textX - 8;
			const textHeight = this.contents.height - textY;
			
			this.contents.drawText(text, textX, textY, textWidth, textHeight, _gold_window_settings.textAlign);
		}

		update() {
			super.update();
			// Auto-refresh every 60 frames (1 second at 60fps) to keep gold current
			if (Graphics.frameCount % 60 === 0) {
				this.refresh();
			}
		}

		// PROPER CLEANUP METHOD
		destroy(options) {
			// Clean up icon sprite
			if (this._iconSprite) {
				// Don't destroy the shared IconSet bitmap, just clear reference
				this._iconSprite.bitmap = null;
				if (this._iconSprite.parent) {
					this._iconSprite.parent.removeChild(this._iconSprite);
				}
				this._iconSprite.destroy();
				this._iconSprite = null;
			}

			// Clean up dimmer sprite
			if (this._dimmerSprite) {
				if (this._dimmerSprite.bitmap) {
					this._dimmerSprite.bitmap.destroy();
					this._dimmerSprite.bitmap = null;
				}
				if (this._dimmerSprite.parent) {
					this._dimmerSprite.parent.removeChild(this._dimmerSprite);
				}
				this._dimmerSprite.destroy();
				this._dimmerSprite = null;
			}

			// Call parent destroy
			super.destroy(options);
		}
	}

	//-----------------------------------------------------------------------------
	// Window_RingMenuMap - WITH PROPER CLEANUP
	//-----------------------------------------------------------------------------
	class Window_RingMenuMap extends Window_Base {
		initialize() {
			const rect = new Rectangle(0, 0, _map_window_settings.windowWidth, _map_window_settings.windowHeight);
			super.initialize(rect);
			this.opacity = _map_window_settings.windowOpacity;
			this.backOpacity = _map_window_settings.windowBackOpacity;
			this._lastMapId = -1;
			this._iconSprite = null;
			this._dimmerSprite = null;
			this.createIcon();
			this.refresh();
			
			// Apply dimmer effect if enabled
			if (_map_window_settings.windowDimmer) {
				this.createDimmerSprite();
			}
		}

		createDimmerSprite() {
			this._dimmerSprite = new Sprite();
			this._dimmerSprite.bitmap = new Bitmap(this.width, this.height);
			this._dimmerSprite.bitmap.fillRect(0, 0, this.width, this.height, 'rgba(0, 0, 0, 0.4)');
			this.addChildToBack(this._dimmerSprite);
		}

		createIcon() {
			if (_map_window_settings.showIcon) {
				this._iconSprite = new Sprite();
				this._iconSprite.bitmap = ImageManager.loadSystem("IconSet");
				this._iconSprite.x = _map_window_settings.iconXOffset;
				this._iconSprite.y = _map_window_settings.iconYOffset;
				
				if (this._iconSprite.bitmap.isReady()) {
					this.setupIconFrame();
				} else {
					this._iconSprite.bitmap.addLoadListener(() => {
						this.setupIconFrame();
					});
				}
				
				this.addChild(this._iconSprite);
			}
		}

		setupIconFrame() {
			if (!this._iconSprite || !this._iconSprite.bitmap) return;
			
			const iconIndex = _map_window_settings.iconIndex;
			const pw = ImageManager.iconWidth;
			const ph = ImageManager.iconHeight;
			const sx = (iconIndex % 16) * pw;
			const sy = Math.floor(iconIndex / 16) * ph;
			this._iconSprite.setFrame(sx, sy, pw, ph);
			
			// Scale to desired size
			const scale = _map_window_settings.iconSize / pw;
			this._iconSprite.scale.set(scale, scale);
		}

		refresh() {
			this.contents.clear();
			
			// Setup text formatting
			this.contents.fontSize = _map_window_settings.fontSize;
			this.contents.fontFace = _map_window_settings.fontFace;
			this.contents.textColor = _map_window_settings.textColor;
			this.contents.outlineWidth = _map_window_settings.outlineWidth;
			this.contents.outlineColor = _map_window_settings.outlineColor;
			
			const mapName = $gameMap.displayName() || 'Unknown Location';
			const prefix = _map_window_settings.prefix || "";
			const suffix = _map_window_settings.suffix || "";
			const text = `${prefix}${mapName}${suffix}`;
			
			// Calculate text area
			const textX = _map_window_settings.textXOffset;
			const textY = _map_window_settings.textYOffset;
			const textWidth = this.contents.width - textX - 8;
			const textHeight = this.contents.height - textY;
			
			this.contents.drawText(text, textX, textY, textWidth, textHeight, _map_window_settings.textAlign);
		}

		update() {
			super.update();
			// Refresh display when map changes
			if (this._lastMapId !== $gameMap.mapId()) {
				this._lastMapId = $gameMap.mapId();
				this.refresh();
			}
		}

		// PROPER CLEANUP METHOD
		destroy(options) {
			// Clean up icon sprite
			if (this._iconSprite) {
				// Don't destroy the shared IconSet bitmap, just clear reference
				this._iconSprite.bitmap = null;
				if (this._iconSprite.parent) {
					this._iconSprite.parent.removeChild(this._iconSprite);
				}
				this._iconSprite.destroy();
				this._iconSprite = null;
			}

			// Clean up dimmer sprite
			if (this._dimmerSprite) {
				if (this._dimmerSprite.bitmap) {
					this._dimmerSprite.bitmap.destroy();
					this._dimmerSprite.bitmap = null;
				}
				if (this._dimmerSprite.parent) {
					this._dimmerSprite.parent.removeChild(this._dimmerSprite);
				}
				this._dimmerSprite.destroy();
				this._dimmerSprite = null;
			}

			// Call parent destroy
			super.destroy(options);
		}
	}

	class Sprite_PartyMember extends Sprite {
		initialize(actor) {
			super.initialize();
			this._actor = actor;
			this._battlerName = '';
			this._characterName = '';
			this._motion = null;
			this._motionCount = 0;
			this._pattern = 0;
			this._isSvBattler = false;
			this.anchor.x = 0.5;
			this.anchor.y = 1;
			this.createTextSprites();
			this.createStateIcons();
			this.loadActorGraphic();
		}

		createTextSprites() {
			if (_show_actor_names) {
				this._nameSprite = new Sprite();
				this._nameSprite.bitmap = new Bitmap(_name_text_settings.bitmapWidth, _name_text_settings.bitmapHeight);
				this.setupTextSprite(this._nameSprite, _name_text_settings);
				this._nameSprite.x = _name_text_settings.xOffset;
				this._nameSprite.y = _name_text_settings.yOffset;
				this.addChild(this._nameSprite);
				this.updateNameText();
			}

			if (_show_level_info) {
				this._levelSprite = new Sprite();
				this._levelSprite.bitmap = new Bitmap(_level_text_settings.bitmapWidth, _level_text_settings.bitmapHeight);
				this.setupTextSprite(this._levelSprite, _level_text_settings);
				this._levelSprite.x = _level_text_settings.xOffset;
				this._levelSprite.y = _level_text_settings.yOffset;
				this.addChild(this._levelSprite);

				this._currentExpSprite = new Sprite();
				this._currentExpSprite.bitmap = new Bitmap(_current_exp_text_settings.bitmapWidth, _current_exp_text_settings.bitmapHeight);
				this.setupTextSprite(this._currentExpSprite, _current_exp_text_settings);
				this._currentExpSprite.x = _current_exp_text_settings.xOffset;
				this._currentExpSprite.y = _current_exp_text_settings.yOffset;
				this.addChild(this._currentExpSprite);

				this._nextExpSprite = new Sprite();
				this._nextExpSprite.bitmap = new Bitmap(_next_exp_text_settings.bitmapWidth, _next_exp_text_settings.bitmapHeight);
				this.setupTextSprite(this._nextExpSprite, _next_exp_text_settings);
				this._nextExpSprite.x = _next_exp_text_settings.xOffset;
				this._nextExpSprite.y = _next_exp_text_settings.yOffset;
				this.addChild(this._nextExpSprite);

				this.updateLevelText();
			}
		}

		createStateIcons() {
			if (_show_actor_states && this._actor) {
				this._stateIconContainer = new Sprite();
				this._stateIconContainer.x = _state_icon_settings.xOffset;
				this._stateIconContainer.y = _state_icon_settings.yOffset;
				this.addChild(this._stateIconContainer);
				this.updateStateIcons();
			}
		}

		updateStateIcons() {
			if (!this._stateIconContainer || !this._actor) return;

			// Clear existing icons
			while (this._stateIconContainer.children.length > 0) {
				const child = this._stateIconContainer.children[0];
				this._stateIconContainer.removeChild(child);
				child.destroy();
			}

			// Get all state icons
			const icons = this._actor.allIcons().slice(0, _state_icon_settings.maxIcons);
			const iconSize = _state_icon_settings.iconSize;
			const spacing = _state_icon_settings.spacing;
			
			// Calculate total width for centering
			const totalWidth = (icons.length * iconSize) + ((icons.length - 1) * spacing);
			const startX = -totalWidth / 2;

			// Create icon sprites
			for (let i = 0; i < icons.length; i++) {
				const iconIndex = icons[i];
				if (iconIndex > 0) {
					const iconSprite = new Sprite();
					iconSprite.bitmap = ImageManager.loadSystem("IconSet");
					
					if (iconSprite.bitmap.isReady()) {
						this.setupIconFrame(iconSprite, iconIndex, iconSize);
					} else {
						iconSprite.bitmap.addLoadListener(() => {
							this.setupIconFrame(iconSprite, iconIndex, iconSize);
						});
					}
					
					iconSprite.x = startX + (i * (iconSize + spacing));
					iconSprite.y = 0;
					iconSprite.anchor.x = 0;
					iconSprite.anchor.y = 0;
					this._stateIconContainer.addChild(iconSprite);
				}
			}
		}

		setupIconFrame(iconSprite, iconIndex, iconSize) {
			const pw = ImageManager.iconWidth;
			const ph = ImageManager.iconHeight;
			const sx = (iconIndex % 16) * pw;
			const sy = Math.floor(iconIndex / 16) * ph;
			iconSprite.setFrame(sx, sy, pw, ph);
			
			// Scale to desired size
			const scale = iconSize / pw;
			iconSprite.scale.set(scale, scale);
		}

		setupTextSprite(sprite, settings) {
			sprite.bitmap.fontSize = settings.fontSize;
			sprite.bitmap.fontFace = settings.fontFace;
			sprite.bitmap.textColor = settings.textColor;
			sprite.bitmap.outlineWidth = settings.outlineWidth;
			sprite.bitmap.outlineColor = settings.outlineColor;
			sprite.anchor.x = 0.5;
			sprite.anchor.y = 0;
		}

		updateNameText() {
			if (this._nameSprite && this._actor) {
				this._nameSprite.bitmap.clear();
				this._nameSprite.bitmap.drawText(
					this._actor.name(), 
					0, 0, 
					_name_text_settings.bitmapWidth, 
					_name_text_settings.bitmapHeight, 
					_name_text_settings.textAlign
				);
			}
		}

		updateLevelText() {
			if (!this._actor) return;

			if (this._levelSprite) {
				this._levelSprite.bitmap.clear();
				this._levelSprite.bitmap.drawText(
					'Lv.' + this._actor.level, 
					0, 0, 
					_level_text_settings.bitmapWidth, 
					_level_text_settings.bitmapHeight, 
					_level_text_settings.textAlign
				);
			}

			if (this._currentExpSprite) {
				this._currentExpSprite.bitmap.clear();
				const currentExp = this._actor.currentExp();
				this._currentExpSprite.bitmap.drawText(
					(_current_exp_text_settings.prefix || '') + currentExp, 
					0, 0, 
					_current_exp_text_settings.bitmapWidth, 
					_current_exp_text_settings.bitmapHeight, 
					_current_exp_text_settings.textAlign
				);
			}

			if (this._nextExpSprite) {
				this._nextExpSprite.bitmap.clear();
				const nextExp = this._actor.nextLevelExp();
				this._nextExpSprite.bitmap.drawText(
					(_next_exp_text_settings.prefix || '') + nextExp, 
					0, 0, 
					_next_exp_text_settings.bitmapWidth, 
					_next_exp_text_settings.bitmapHeight, 
					_next_exp_text_settings.textAlign
				);
			}
		}

		loadActorGraphic() {
			if (_use_sv_battlers) {
				this.loadSvBattler();
			} else {
				this.loadCharacterSprite();
			}
		}

		loadSvBattler() {
			const battlerName = this._actor.battlerName();
			
			if (battlerName && battlerName !== '') {
				this.bitmap = ImageManager.loadSvActor(battlerName);
				this._battlerName = battlerName;
				this._isSvBattler = true;
				
				if (this.bitmap) {
					this.bitmap.addLoadListener(() => {
						if (this.bitmap.width > 0) {
							this.setupSvMotion();
						} else {
							console.warn('SV Battler failed to load, using character sprite');
							this.loadCharacterSprite();
						}
					});
				} else {
					this.loadCharacterSprite();
				}
			} else {
				this.loadCharacterSprite();
			}
		}

		loadCharacterSprite() {
			const characterName = this._actor.characterName();
			const characterIndex = this._actor.characterIndex();
			
			if (characterName && characterName !== '') {
				this.bitmap = ImageManager.loadCharacter(characterName);
				this._characterName = characterName;
				this._characterIndex = characterIndex;
				this._isSvBattler = false;
				
				if (this.bitmap) {
					this.bitmap.addLoadListener(() => {
						this.setupCharacterFrame();
					});
				}
			}
		}

		setupSvMotion() {
			if (this._isSvBattler) {
				this._motion = { index: 1, loop: true };
				this._motionCount = 0;
				this._pattern = 0;
				this.refreshMotion();
			}
		}

		refreshMotion() {
			if (!this._isSvBattler || !this._actor || !_abnormal_state_motion) {
				return;
			}

			const actor = this._actor;
			const stateMotion = actor.stateMotionIndex();
			
			// Determine motion based on actor state
			if (stateMotion === 3) {
				this.startMotion("dead");
			} else if (stateMotion === 2) {
				this.startMotion("sleep");
			} else if (stateMotion === 1) {
				this.startMotion("abnormal");
			} else if (actor.isDying()) {
				this.startMotion("dying");
			} else {
				this.startMotion("wait");
			}
		}

		startMotion(motionType) {
			if (!this._isSvBattler) return;
			
			const motions = {
				wait: { index: 1, loop: true },
				abnormal: { index: 15, loop: true },
				sleep: { index: 16, loop: true },
				dead: { index: 17, loop: true },
				dying: { index: 14, loop: true }
			};
			
			const newMotion = motions[motionType] || motions.wait;
			if (this._motion !== newMotion) {
				this._motion = newMotion;
				this._motionCount = 0;
				this._pattern = 0;
			}
		}

		setupCharacterFrame() {
			if (!this._isSvBattler && this.bitmap && this.bitmap.width > 0) {
				const big = ImageManager.isBigCharacter(this._characterName);
				const pw = this.bitmap.width / (big ? 3 : 12);
				const ph = this.bitmap.height / (big ? 4 : 8);
				const n = big ? 0 : this._characterIndex;
				const sx = ((n % 4) * 3 + 1) * pw;
				const sy = Math.floor(n / 4) * 4 * ph;
				const half_ph = Math.floor(ph / 1.5);
				this.setFrame(sx, sy, pw, half_ph);
				this.scale.set(_sv_battler_scale, _sv_battler_scale);
			}
		}

		updateMotion() {
			if (this._isSvBattler && this._motion) {
				this.updateMotionCount();
			}
		}

		updateMotionCount() {
			if (++this._motionCount >= this.motionSpeed()) {
				if (this._motion.loop) {
					this._pattern = (this._pattern + 1) % 4;
				}
				this._motionCount = 0;
			}
		}

		motionSpeed() {
			return Math.max(1, Math.floor(12 / _sv_animation_speed));
		}

		updateFrame() {
			if (this._isSvBattler && this.bitmap && this.bitmap.width > 0) {
				const motionIndex = this._motion ? this._motion.index : 1;
				const pattern = this._pattern < 3 ? this._pattern : 1;
				const cw = this.bitmap.width / 9;
				const ch = this.bitmap.height / 6;
				const cx = Math.floor(motionIndex / 6) * 3 + pattern;
				const cy = motionIndex % 6;
				this.setFrame(cx * cw, cy * ch, cw, ch);
				this.scale.set(_sv_battler_scale, _sv_battler_scale);
			} else if (!this._isSvBattler) {
				this.setupCharacterFrame();
			}
		}

		update() {
			super.update();
			this.updateMotion();
			this.updateFrame();
			
			if (Graphics.frameCount % 60 === 0) {
				this.updateLevelText();
				this.updateStateIcons();
				if (this._isSvBattler && _abnormal_state_motion) {
					this.refreshMotion();
				}
			}
		}

		// PROPER CLEANUP METHOD
		destroy(options) {
			// Clean up text sprite bitmaps
			if (this._nameSprite) {
				if (this._nameSprite.bitmap) {
					this._nameSprite.bitmap.destroy();
					this._nameSprite.bitmap = null;
				}
				this._nameSprite.destroy();
				this._nameSprite = null;
			}

			if (this._levelSprite) {
				if (this._levelSprite.bitmap) {
					this._levelSprite.bitmap.destroy();
					this._levelSprite.bitmap = null;
				}
				this._levelSprite.destroy();
				this._levelSprite = null;
			}

			if (this._currentExpSprite) {
				if (this._currentExpSprite.bitmap) {
					this._currentExpSprite.bitmap.destroy();
					this._currentExpSprite.bitmap = null;
				}
				this._currentExpSprite.destroy();
				this._currentExpSprite = null;
			}

			if (this._nextExpSprite) {
				if (this._nextExpSprite.bitmap) {
					this._nextExpSprite.bitmap.destroy();
					this._nextExpSprite.bitmap = null;
				}
				this._nextExpSprite.destroy();
				this._nextExpSprite = null;
			}

			// Clean up state icon container
			if (this._stateIconContainer) {
				while (this._stateIconContainer.children.length > 0) {
					const child = this._stateIconContainer.children[0];
					// Don't destroy shared IconSet bitmap
					if (child.bitmap) {
						child.bitmap = null;
					}
					this._stateIconContainer.removeChild(child);
					child.destroy();
				}
				this._stateIconContainer.destroy();
				this._stateIconContainer = null;
			}

			// Clear main bitmap reference (shared resource, don't destroy)
			this.bitmap = null;

			super.destroy(options);
		}
	}

	Scene_Map = class extends Scene_Map {

		createDisplayObjects() {
			super.createDisplayObjects();
			this._ringMenu = new Ring_Menu();
			this.addChild(this._ringMenu);
			this._ringMenu.createHelpWindow();
		}
		
		callMenu() {
			if(typeof $gameTemp._ringMenuOpened === "undefined") {
				SoundManager.playOk();
			}
			$gameTemp.clearDestination();
			this._mapNameWindow.hide();
			this.callRingMenu();
			this.menuCalling = false;
			this._isMenuOpened = 1;
		}

		callRingMenu() {
			$gamePlayer.setDirection(2);
			
			let x, y;
			if (_force_center) {
				x = Graphics.width / 2 + _center_x_offset;
				y = Graphics.height / 2 + _center_y_offset;
				x = x.clamp(100, Graphics.width - 100);
				y = y.clamp(100, Graphics.height - 100);
			} else {
				x = $gamePlayer.screenX();
				y = $gamePlayer.screenY();
			}
			
			this._ringMenu.call(x, y);
		}

		isRingMenuOpened() {
			return !!this._isMenuOpened;
		}

		updateCallMenu() {
			if(!!this._ringMenu.isCommandPersonal()) {
				return;
			}
			if(!!this.isRingMenuOpened()) {
				if(this.isMenuCalled()) {
					SoundManager.playOk();
					this._ringMenu.dispose();
					this._isMenuOpened = undefined;
					this.menuCalling = false;
				}
			} else {
				if(typeof $gameTemp._ringMenuOpened !== "undefined") {
					this.callMenu();
					$gameTemp._ringMenuOpened = undefined;
				}
				return super.updateCallMenu();
			}
		}
	}

	const _old_Game_Map_isEventRunning = Game_Map.prototype.isEventRunning;
	Game_Map.prototype.isEventRunning = function() {
		return _old_Game_Map_isEventRunning.call(this) || SceneManager._scene.isRingMenuOpened();
	};

	class Ring_Menu extends Sprite {

		static OPEN_RADIUS = _open_radius;
		static CLOSE_RADIUS = _closed_radius;
		static MENU_OPENING = 0x00;
		static MENU_WAITING = 0x01;
		static MENU_CLOSING = 0x02;
		static MENU_COMMAND_PERSONAL = 0x04;
		static DELTA_DIFF = 0.01;

		lerp(start, end, amt) {
			const deltaTime = SceneManager._smoothDeltaTime || 0.016;
			const safeDeltaTime = Math.min(Math.max(deltaTime, 0.001), 0.1);
			amt *= safeDeltaTime;
			return (1-amt)*start+amt*end;
		}

		isCommandPersonal() {
			return this._phase === Ring_Menu.MENU_COMMAND_PERSONAL;
		}

		initialize(x,y) {
			super.initialize();
			this._center = new PIXI.Point(0,0);
			this._radius = Ring_Menu.CLOSE_RADIUS;
			this._globalAlpha = 0;
			this._index = -1;
			this._destinationIndex = this.startIndex();
			this._actorIndex = -1;
			this._angleDistance = 0;
			this._phase = -1;
			this._symbols = [];
			this._names = {};
			this.visible = false;
			this.clearBlendData();
			this.createMenuCommands();
			this.createPartyStatus();
			this._goldWindow = null;
			this._mapWindow = null;
		}

		clearBlendData() {
			this._blendingAmount = 100;
			this._blendingSubract = 4;
		}

		// Position info windows with advanced offset and spacing controls
		updateInfoWindowPositions() {
			const padding = 10;
			
			if (this._goldWindow && this._mapWindow) {
				// Both windows: position with individual offsets
				this._goldWindow.x = Graphics.width - this._goldWindow.width - padding + _gold_window_settings.windowXOffset;
				this._goldWindow.y = Graphics.height - this._goldWindow.height - padding + _gold_window_settings.windowYOffset;
				
				this._mapWindow.x = Graphics.width - this._mapWindow.width - padding + _map_window_settings.windowXOffset;
				this._mapWindow.y = Graphics.height - this._mapWindow.height - padding + _map_window_settings.windowYOffset;
			} else if (this._goldWindow) {
				// Only gold window
				this._goldWindow.x = Graphics.width - this._goldWindow.width - padding + _gold_window_settings.windowXOffset;
				this._goldWindow.y = Graphics.height - this._goldWindow.height - padding + _gold_window_settings.windowYOffset;
			} else if (this._mapWindow) {
				// Only map window
				this._mapWindow.x = Graphics.width - this._mapWindow.width - padding + _map_window_settings.windowXOffset;
				this._mapWindow.y = Graphics.height - this._mapWindow.height - padding + _map_window_settings.windowYOffset;
			}
		}

		placeGauge(actor, type, x, y) {
			const key = "actor%1-gauge-%2".format(actor.actorId(), type);
			const sprite = new Sprite_Gauge();
			sprite.setup(actor, type);
			sprite.move(x, y);
			sprite.show();
			return sprite;
		}

		createPartyStatus() {
			this._partyStatus = new Sprite();
			this._partyStatus.visible = false;
			this._partyMemberSprites = [];
			this._gaugeSprites = [];
			
			const battleMembers = $gameParty.battleMembers();
			const memberCount = battleMembers.length;
			
			if (memberCount === 0) {
				console.warn('No battle members found for party status');
				return;
			}
			
			const screenWidth = Graphics.width;
			const usableWidth = screenWidth * 0.85;
			const startX = (screenWidth - usableWidth) / 2;
			const memberWidth = usableWidth / memberCount;
			const statusY = Math.floor(Graphics.height * _party_status_y_pos);
			const spriteOffsetY = -120;
			
			for(let i = 0; i < memberCount; i++) {
				const member = battleMembers[i];
				const memberCenterX = startX + (memberWidth * (i + 0.5));
				
				const memberSprite = new Sprite_PartyMember(member);
				memberSprite.x = memberCenterX + _battler_x_offset;
				memberSprite.y = statusY + spriteOffsetY + _battler_y_offset;
				this._partyStatus.addChild(memberSprite);
				this._partyMemberSprites.push(memberSprite);
				
				const gaugeX = memberCenterX + _hp_gauge_settings.xOffset;
				const gaugeY = statusY + _hp_gauge_settings.yOffset;
				const hp_gauge = this.placeGauge(member, "hp", gaugeX, gaugeY);
				
				const mpGaugeX = memberCenterX + _mp_gauge_settings.xOffset;
				const mpGaugeY = statusY + _mp_gauge_settings.yOffset;
				const mp_gauge = this.placeGauge(member, "mp", mpGaugeX, mpGaugeY);
				
				this._partyStatus.addChild(hp_gauge);
				this._partyStatus.addChild(mp_gauge);
				
				this._gaugeSprites.push(hp_gauge);
				this._gaugeSprites.push(mp_gauge);
			}
		}

		switchBlendingConst() {
			return this._blendingSubract *= -1;
		}

		createHelpWindow() {
			const helpWidth = Math.min(Graphics.width * 0.8, 800);
			const rect = new Rectangle(
				(Graphics.width - helpWidth) / 2,
				0,
				helpWidth,
				Window_Base.prototype.lineHeight.call(this) * 2
			);
			this._helpWindow = new Window_Help(rect);
			this._helpWindow.y = -this._helpWindow.height;
			this._helpWindow.hide();
			this.parent.addChild(this._helpWindow);
			this.parent.addChild(this._partyStatus);
			this.refreshHelpWindow(this._destinationIndex);
		}

		updateCenter(x,y) {
			return this._center.set(x,y);
		}

		calculateAngleDistance() {
			return (Math.PI * 2) / this.children.length;
		}

		calculateCommandAngle(index) {
			return (this._angleDistance * index);
		}

		createMenuCommands() {
			this._referenceWindow = new Window_MenuCommand(new PIXI.Rectangle(0,0,1,1));
			this._referenceWindow.refresh();
			for(let i = 0; i < this._referenceWindow._list.length; i++) {
				const comm = this._referenceWindow._list[i];
				this._symbols.push(comm.symbol);
				this._names[comm.symbol] = comm.name;
				let sp = new Sprite();
				sp.alpha = this._globalAlpha;
				let iconset = ImageManager.loadSystem("iconset");
				iconset.addLoadListener(() => {
					sp.bitmap = iconset;
					sp.anchor.set(0.5);
					const iconIndex = !!_ring_menu_icons[comm.symbol] ? _ring_menu_icons[comm.symbol] : 16;
					const pw = ImageManager.iconWidth;
					const ph = ImageManager.iconHeight;
					const sx = (iconIndex % 16) * pw;
					const sy = Math.floor(iconIndex / 16) * ph;
					sp.setFrame(sx,sy,pw,ph);
				});
				this.addChild(sp);
			}
			this._angleDistance = this.calculateAngleDistance();
		}

		refreshHelpWindow(index, isOpening = false) {
			if(this._phase === Ring_Menu.MENU_COMMAND_PERSONAL) {
				const actor = $gameParty.battleMembers()[index];
				this._helpWindow.setText(_actor_help_window_string_format.format(actor.name(), actor.profile()));
			} else {
				const symbol = !isOpening ? this.getSymbol() : this._symbols[0];
				let help = !!_help_window_description[symbol] ? _help_window_description[symbol] : "%1";
				this._helpWindow.setText(help.format(this._names[symbol]));
			}
		}

		actor() {
			return $gameParty.battleMembers()[this._actorIndex];
		}

		call(x,y) {
			this.updateCenter(x,y);
			this._helpWindow.show();
			this._index = this.children.length - 1;
			this.visible = true;
			this._phase = Ring_Menu.MENU_OPENING;
			this._partyStatus.visible = true;
			this._requestHelpRefresh = true;
			
			// Create windows only if they don't already exist
			if (_show_gold_display && !this._goldWindow) {
				this._goldWindow = new Window_RingMenuGold();
				this._goldWindow.visible = true;
				this._goldWindow.openness = 255;
				SceneManager._scene.addChild(this._goldWindow);
			} else if (this._goldWindow) {
				this._goldWindow.visible = true;
				this._goldWindow.refresh();
			}
			
			if (_show_map_location && !this._mapWindow) {
				this._mapWindow = new Window_RingMenuMap();
				this._mapWindow.visible = true;
				this._mapWindow.openness = 255;
				SceneManager._scene.addChild(this._mapWindow);
			} else if (this._mapWindow) {
				this._mapWindow.visible = true;
				this._mapWindow.refresh();
			}
			
			this.updateInfoWindowPositions();
		}

		dispose() {
			this._phase = Ring_Menu.MENU_CLOSING;
			this._index = -1;
			this._destinationIndex = 0;
			this._partyStatus.visible = false;
			
			// PROPER CLEANUP with full resource destruction
			if (this._goldWindow) {
				this._goldWindow.visible = false;
				
				if (this._goldWindow.parent) {
					this._goldWindow.parent.removeChild(this._goldWindow);
				}
				
				// Destroy the window completely
				this._goldWindow.destroy({ children: true, texture: false });
				this._goldWindow = null;
			}
			
			if (this._mapWindow) {
				this._mapWindow.visible = false;
				
				if (this._mapWindow.parent) {
					this._mapWindow.parent.removeChild(this._mapWindow);
				}
				
				// Destroy the window completely
				this._mapWindow.destroy({ children: true, texture: false });
				this._mapWindow = null;
			}
		}

		startIndex() {
			if(typeof $gameTemp._ringMenuOpened !== "undefined") {
				return $gameTemp._ringMenuOpened;
			}
			return 0;
		}

		updatePhase() {
			switch(this._phase) {
				case Ring_Menu.MENU_OPENING:
					if(this._radius > Ring_Menu.OPEN_RADIUS) {
						const new_radius = this.lerp(this._radius, Ring_Menu.OPEN_RADIUS, _menu_speed);
						const new_alpha = this.lerp(this._globalAlpha, 1, _menu_speed);
						const new_index = this.lerp(this._index, this._destinationIndex, _menu_speed);
						const help_y = this.lerp(this._helpWindow.y, 0, _menu_speed);
						this._radius = new_radius;
						this._globalAlpha = new_alpha;
						this._index = new_index;
						this._helpWindow.y = help_y;
						const cond = (Math.abs(this._radius - Ring_Menu.OPEN_RADIUS) < Ring_Menu.DELTA_DIFF && 
						Math.abs(this._globalAlpha - 1) < Ring_Menu.DELTA_DIFF &&
						Math.abs(this._index - this._destinationIndex) < Ring_Menu.DELTA_DIFF &&
						Math.abs(this._helpWindow.y - 0) < Ring_Menu.DELTA_DIFF);
						if(!!cond) {
							this._index = this._destinationIndex;
							this._globalAlpha = 1;
							this._radius = Ring_Menu.OPEN_RADIUS;
							this._phase = Ring_Menu.MENU_WAITING;
							this._helpWindow.y = 0;
						}
						if(!!this._helpWindow && this._requestHelpRefresh) {
							this.refreshHelpWindow(this._destinationIndex, true);
							this._requestHelpRefresh = undefined;
						}
					}
					break;
				case Ring_Menu.MENU_WAITING:
					if(Input.isTriggered("right") || Input.isTriggered("down")) {
						SoundManager.playCursor();
						this._index = (this._index + 1) % this.children.length;
						this.refreshHelpWindow(this._index);
					} else if(Input.isTriggered("left") || Input.isTriggered("up")) {
						SoundManager.playCursor();
						this._index = this._index - 1 < 0 ? this.children.length - 1 : this._index - 1;
						this.refreshHelpWindow(this._index);
					} else if(Input.isTriggered("ok")) {
						SoundManager.playOk();
						this.processSymbol();
					}
					break;
				case Ring_Menu.MENU_COMMAND_PERSONAL:
					this.updateBlendAnimation();
					if(Input.isTriggered("right") || Input.isTriggered("down")) {
						SoundManager.playCursor();
						this.clearSpriteBlending();
						this._actorIndex = this._actorIndex - 1 < 0 ? $gameParty.battleMembers().length - 1 : this._actorIndex - 1;
						this.refreshHelpWindow(this._actorIndex);
					} else if(Input.isTriggered("left") || Input.isTriggered("up")) {
						SoundManager.playCursor();
						this.clearSpriteBlending();
						this._actorIndex = (this._actorIndex + 1) % $gameParty.battleMembers().length;
						this.refreshHelpWindow(this._actorIndex);
					} else if(Input.isTriggered("ok")) {
						SoundManager.playOk();
						this.clearSpriteBlending();
						this.onPersonalOk();
					} else if(Input.isTriggered("cancel")) {
						Input.clear();
						SoundManager.playCancel();
						this.onPersonalCancel();
					}
					break;
				case Ring_Menu.MENU_CLOSING:
					if(this._radius < Ring_Menu.CLOSE_RADIUS) {
						const new_radius = this.lerp(this._radius, Ring_Menu.CLOSE_RADIUS, _menu_speed);
						const new_alpha = this.lerp(this._globalAlpha, 0, _menu_speed);
						const new_index = this.lerp(this._index, this.children.length - 1, _menu_speed);
						const help_y = this.lerp(this._helpWindow.y, -this._helpWindow.height, _menu_speed);
						this._radius = new_radius;
						this._globalAlpha = new_alpha;
						this._index = new_index;
						this._helpWindow.y = help_y;
						const cond = (Math.abs(this._radius - Ring_Menu.CLOSE_RADIUS) < Ring_Menu.DELTA_DIFF && 
						Math.abs(this._globalAlpha - 0) < Ring_Menu.DELTA_DIFF &&
						Math.abs(this._index - (this.children.length - 1)) < Ring_Menu.DELTA_DIFF &&
						Math.abs(this._helpWindow.y  + this._helpWindow.height) < Ring_Menu.DELTA_DIFF);
						if(!!cond) {
							this._radius = Ring_Menu.CLOSE_RADIUS;
							this._globalAlpha = 0;
							this._phase = -1;
							this._index = -1;
							this.visible = false;
						} 
					}
					break;
			}
		}

		getSymbol() {
			return this._symbols[this._index];
		}

		processSymbol() {
			$gameTemp._ringMenuOpened = this._index;
			const symbol = this.getSymbol();
			switch(symbol) {
				case "item":
					Scene_Menu.prototype.commandItem.call(this);
					break;
				case "skill":
				case "equip":
				case "status":
					this.commandPersonal();
					break;
				case "formation":
					this.commandFormation();
					break;
				case "options":
					Scene_Menu.prototype.commandOptions.call(this);
					break;
				case "save":
					Scene_Menu.prototype.commandSave.call(this);
					break;
				case "gameEnd":
					Scene_Menu.prototype.commandGameEnd.call(this);
					break;	
				default:
					eval(_custom_process_command);
					break;
			}
		}

		commandFormation() {
			// Check if VisuStella Party System is available
			if (typeof Scene_Party !== 'undefined' && Imported.VisuMZ_2_PartySystem) {
				$gameTemp._ringMenuOpened = undefined;
				this.dispose();
				SceneManager._scene.menuCalling = false;
				SceneManager._scene._isMenuOpened = undefined;
				SceneManager.push(Scene_Party);
			} else {
				// Fallback to default formation if Party System not available
				this.commandPersonal();
			}
		}

		commandPersonal() {
			$gameTemp._ringMenuOpened = undefined;
			this._phase = Ring_Menu.MENU_COMMAND_PERSONAL;
			this._actorIndex = 0;
			this._globalAlpha = 0.2;
			if(this.getSymbol() === "formation") {
				this._pendingIndex = -1;
			}
			this._actorSprites = SceneManager._scene._spriteset._characterSprites.filter(spr => {
				return spr._character === $gamePlayer || $gamePlayer.followers().visibleFollowers().contains(spr._character);
			});
			this._actorSprites.reverse();
		}

		clearSpriteBlending() {
			this.clearBlendData();
			for(let sprite of this._actorSprites) {
				sprite.setBlendColor([0,0,0,0]);
			}
		}

		updateBlendAnimation() {
			if(Graphics.frameCount % 3 === 0) {
				const sprite = this._actorSprites[this._actorIndex];
				this._blendingAmount = (this._blendingAmount - this._blendingSubract).clamp(0,100);
				sprite.setBlendColor([255,255,255,this._blendingAmount]);
				if(!!this._pendingIndex) {
					if(this._pendingIndex >= 0) {
						this._actorSprites[this._pendingIndex].setBlendColor([255,255,255,this._blendingAmount]);
					}
				}
				if([0,100].contains(this._blendingAmount)) {
					this.switchBlendingConst();
				}
			}
		}

		onPersonalCancel() {
			if(!!this._pendingIndex) {
				if(this._pendingIndex >= 0) {
					this.clearSpriteBlending();
					this._pendingIndex = -1;
					return;
				}
			}
			this._phase = Ring_Menu.MENU_WAITING;
			this._actorIndex = -1;
			this._globalAlpha = 1;
			this._pendingIndex = undefined;
			this.clearSpriteBlending();
			this._actorSprites = undefined;
			this.refreshHelpWindow(this._index);
		}
		
		onPersonalOk() {
			const symbol = this.getSymbol();
			if(symbol === "formation") {
				if(this._pendingIndex < 0) {
					this._pendingIndex = this._actorIndex;			
				} else {
					$gameParty.swapOrder(this._actorIndex, this._pendingIndex);
					$gamePlayer.refresh();
					this._pendingIndex = -1;
				}
				return;
			}
			$gameParty.setMenuActor(this.actor());
			$gameTemp._ringMenuOpened = this._index;
			this.processPersonalSymbol();
		}

		processPersonalSymbol() {
			const symbol = this.getSymbol();
			switch(symbol) {
				case "skill":
					SceneManager.push(Scene_Skill);
					break;
				case "equip":
					SceneManager.push(Scene_Equip);
					break;
				case "status":
					SceneManager.push(Scene_Status);
					break;
				default:
					eval(_custom_process_personal_command);
					break;
			}
		}

		update() {
			super.update();
			if(!this.visible) {
				return;
			}
			this.updatePhase();
			
			if (this._partyMemberSprites) {
				for (const sprite of this._partyMemberSprites) {
					if (sprite && sprite.update) {
						sprite.update();
					}
				}
			}
			
			// Update windows if they exist
			if (this._goldWindow && this._goldWindow.visible) {
				this._goldWindow.update();
			}
			if (this._mapWindow && this._mapWindow.visible) {
				this._mapWindow.update();
			}
			
			if(Graphics.frameCount % 2 !== 0) {
				return;
			}
			for(let i = 0; i < this.children.length; i++) {
				const child = this.children[i];
				const angle = this.calculateCommandAngle(i) - this.calculateCommandAngle(this._index + 2);
				child.alpha = this._globalAlpha;
				child.position.set(Math.ceil(this._center.x + this._radius * Math.cos(angle)), Math.ceil(this._center.y + this._radius * Math.sin(angle)));
				if(this._phase === Ring_Menu.MENU_WAITING) {
					if(i === this._index && child.scale.x !== _command_scale_factor) {
						child.scale.set(_command_scale_factor);
					} else if(i !== this._index && child.scale.x !== 1) {
						child.scale.set(1);
					}
				} else {
					if(child.scale.x !== 1) {
						child.scale.set(1);
					}
				}
			}
		}

		// PROPER CLEANUP METHOD FOR RING MENU
		destroy(options) {
			// Clean up gold window
			if (this._goldWindow) {
				if (this._goldWindow.parent) {
					this._goldWindow.parent.removeChild(this._goldWindow);
				}
				this._goldWindow.destroy({ children: true, texture: false });
				this._goldWindow = null;
			}

			// Clean up map window
			if (this._mapWindow) {
				if (this._mapWindow.parent) {
					this._mapWindow.parent.removeChild(this._mapWindow);
				}
				this._mapWindow.destroy({ children: true, texture: false });
				this._mapWindow = null;
			}

			// Clean up party member sprites
			if (this._partyMemberSprites) {
				for (const sprite of this._partyMemberSprites) {
					if (sprite) {
						sprite.destroy({ children: true, texture: false });
					}
				}
				this._partyMemberSprites = [];
			}

			// Clean up gauge sprites
			if (this._gaugeSprites) {
				for (const gauge of this._gaugeSprites) {
					if (gauge) {
						gauge.destroy({ children: true, texture: false });
					}
				}
				this._gaugeSprites = [];
			}

			// Clean up party status container
			if (this._partyStatus) {
				this._partyStatus.destroy({ children: true, texture: false });
				this._partyStatus = null;
			}

			// Clean up help window
			if (this._helpWindow) {
				if (this._helpWindow.parent) {
					this._helpWindow.parent.removeChild(this._helpWindow);
				}
				this._helpWindow.destroy({ children: true, texture: false });
				this._helpWindow = null;
			}

			// Clean up reference window
			if (this._referenceWindow) {
				this._referenceWindow.destroy({ children: true, texture: false });
				this._referenceWindow = null;
			}

			super.destroy(options);
		}
	}

	console.log('%c[Blue Ring Menu v1.2.3] %cLoaded with PROPER memory management!','color: #4CAF50; font-weight: bold;', 
				'color: #2196F3;');
	console.log('✓ Complete resource cleanup implemented');
	console.log('✓ Memory leak prevention active');
	console.log('✓ Proper destroy() methods for all windows and sprites');
	console.log('Settings: Force Center =', _force_center, ', Use SV Battlers =', _use_sv_battlers);
	console.log('Gold Display =', _show_gold_display, ', Map Location =', _show_map_location);

})(Bluemoon.MenuRing);
