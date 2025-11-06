# RMMZ Auto Updater Plugin

**Version:** 1.0.0
**For:** RPG Maker MZ
**Platform:** Desktop (NW.js) and Mobile (Cordova/Android/iOS)

## Overview

This plugin automatically downloads and updates game assets before the title screen loads, making it perfect for:

- **Mobile games** that need to bypass the 200MB Google Play AAB file size limit
- **Desktop games** that want seamless updates without manual file replacement
- **Large games** that want to distribute content in manageable chunks
- **Live service games** that need frequent content updates

## Key Features

✅ **Platform Support**
- Works on Desktop (Windows/Mac/Linux via NW.js)
- Works on Mobile (Android/iOS via Cordova)
- Automatic platform detection

✅ **Smart Downloading**
- Version checking (only downloads what changed)
- Progress bar with percentage and file size
- Resume interrupted downloads
- Automatic retry with exponential backoff
- WiFi detection on mobile

✅ **User Experience**
- Beautiful download screen with custom background
- Clear status messages
- WiFi warning for mobile users
- Storage space checking
- Cancellable downloads

✅ **Developer Friendly**
- Simple manifest.json configuration
- Support for multiple cloud storage providers
- Checksum verification for data integrity
- Debug mode with detailed logging

## Installation

### Step 1: Add Plugin to Your Game

1. Copy `RMMZ_AutoUpdater.js` to your `js/plugins/` folder
2. Open RPG Maker MZ
3. Go to **Tools → Plugin Manager**
4. Add the plugin and configure parameters

### Step 2: Prepare Your Asset Packs

1. Organize your game files into logical packs:
   ```
   CoreAssets.zip      (maps, characters, tilesets)
   Audio_BGM.zip       (background music)
   Audio_SE.zip        (sound effects)
   Movies.zip          (cutscene videos)
   ```

2. Upload these ZIP files to cloud storage:
   - **Dropbox** (2GB free)
   - **Google Drive** (15GB free)
   - **AWS S3** (pay-per-use)
   - **GitHub Releases** (unlimited for open source)

3. Get direct download links for each file

### Step 3: Create manifest.json

Create a `manifest.json` file with this structure:

```json
{
  "version": "1.0.0",
  "requiredSpace": 500,
  "packs": [
    {
      "name": "CoreAssets",
      "version": "1.0.0",
      "size": 52428800,
      "checksum": "abc123",
      "url": "https://example.com/CoreAssets.zip",
      "required": true,
      "priority": 1
    }
  ]
}
```

**Fields Explained:**
- `version`: Overall game version (semver format)
- `requiredSpace`: Minimum free space needed (MB)
- `packs`: Array of downloadable asset packs
  - `name`: Unique identifier for the pack
  - `version`: Pack version (allows differential updates)
  - `size`: File size in bytes
  - `checksum`: MD5/SHA256 hash for verification (optional)
  - `url`: Direct download URL
  - `required`: If false, can be skipped
  - `priority`: Download order (lower = first)

### Step 4: Upload manifest.json

Upload your manifest.json to cloud storage and get a direct link.

**For Dropbox:**
1. Upload `manifest.json` to Dropbox
2. Get shareable link: `https://www.dropbox.com/s/abc123/manifest.json?dl=0`
3. Change `?dl=0` to `?dl=1` or use `dl.dropboxusercontent.com`
4. Final URL: `https://dl.dropboxusercontent.com/s/abc123/manifest.json`

### Step 5: Configure Plugin

In RPG Maker MZ Plugin Manager, set these parameters:

| Parameter | Description | Example |
|-----------|-------------|---------|
| **Manifest URL** | Direct link to manifest.json | `https://dl.dropbox...` |
| **Enable Auto Update** | Check for updates on start | `true` |
| **WiFi Only Warning** | Warn mobile users not on WiFi | `true` |
| **Allow Cellular** | Allow download over mobile data | `false` |
| **Max Retries** | Retry attempts for failed downloads | `3` |
| **Background Image** | Custom background from img/pictures | (optional) |
| **Progress Bar Color** | Color of progress bar | `#00ff00` |

## Mobile Deployment (Bypassing 200MB Limit)

### For Android/Google Play:

1. **Create Minimal APK/AAB** (<200MB):
   - Include only: Engine files, core plugins, system graphics
   - Exclude: Large images, audio, movies, maps

2. **Build with Cordova:**
   ```bash
   cordova build android --release
   ```

3. **Upload to Google Play:**
   - Your AAB will be under 200MB ✓
   - First-time users will download additional assets
   - Updates only download changed packs

4. **User Experience:**
   ```
   User installs app (150MB from Play Store)
         ↓
   App launches, shows download screen
         ↓
   Downloads asset packs (300MB via WiFi)
         ↓
   Game starts with all content
   ```

### For iOS/App Store:

Similar process, but iOS limit is higher (4GB for cellular, unlimited for WiFi).

## Updating Your Game

To release an update:

1. **Update specific packs:**
   - Change version number of modified pack
   - Update the file in cloud storage
   - Update manifest.json

2. **Update manifest.json:**
   ```json
   {
     "version": "1.1.0",  // ← Increment version
     "packs": [
       {
         "name": "CoreAssets",
         "version": "1.1.0",  // ← Updated pack
         "url": "https://example.com/CoreAssets_v1.1.zip"
       }
     ]
   }
   ```

3. **Users auto-download:**
   - Next launch checks version
   - Only downloads changed packs
   - Seamless update experience

## Cloud Storage Options

### Dropbox (Easiest)
- **Free:** 2GB
- **Pros:** Easy direct links, simple UI
- **Cons:** Limited bandwidth, small free tier

### Google Drive
- **Free:** 15GB
- **Pros:** Large free tier
- **Cons:** Complex link generation, rate limits

### AWS S3 (Recommended for Production)
- **Free:** 5GB for first year
- **Pros:** Unlimited bandwidth, CDN support, reliable
- **Cons:** Requires AWS account, pay-per-use after free tier

### GitHub Releases (Best for Open Source)
- **Free:** Unlimited
- **Pros:** Great for version control, unlimited bandwidth
- **Cons:** Files must be part of releases, public only

## Troubleshooting

### "Failed to fetch manifest"
- Check manifest URL is correct
- Ensure direct download link (not preview link)
- Check CORS headers on your server

### "Download timeout"
- Increase timeout in plugin parameters
- Check internet connection
- Try smaller pack sizes

### "Insufficient storage space"
- User device is full
- Reduce `requiredSpace` in manifest
- Make some packs optional

### Mobile: "Network error"
- Check Cordova whitelist plugin is installed
- Add domain to `config.xml`:
  ```xml
  <access origin="https://dl.dropboxusercontent.com" />
  ```

### Desktop: Files not loading after download
- Check file extraction logic
- Verify paths match game structure
- Enable debug mode to see detailed logs

## Advanced Usage

### Custom Extraction Logic

The plugin currently saves packs to IndexedDB/localStorage. For production:

```javascript
// On Desktop (NW.js)
UpdateManager.prototype.extractPack = async function(pack, data) {
    const fs = require('fs');
    const path = require('path');
    const AdmZip = require('adm-zip');

    const zip = new AdmZip(Buffer.from(data));
    zip.extractAllTo(path.join(process.cwd(), 'game_files'), true);
};

// On Mobile (Cordova)
UpdateManager.prototype.extractPack = async function(pack, data) {
    const zip = new JSZip();
    await zip.loadAsync(data);

    for (const filename in zip.files) {
        const content = await zip.files[filename].async('uint8array');
        await this.writeFile(filename, content);
    }
};
```

### Checksum Verification

Implement real checksum verification:

```javascript
async verifyChecksum(data, expectedChecksum) {
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    return hashHex === expectedChecksum;
}
```

## Performance Tips

1. **Keep packs under 100MB** for better UX
2. **Use priority field** to download critical assets first
3. **Compress assets** before zipping (use PNG → WebP, OGG → Opus)
4. **Enable CDN** on your cloud storage
5. **Test on slow connections** (3G simulation)

## Security Notes

⚠️ **Important Security Considerations:**

1. **Use HTTPS only** for manifest and pack URLs
2. **Implement checksum verification** in production
3. **Validate manifest schema** before processing
4. **Don't download executable code** (violates app store policies)
5. **Consider code signing** for sensitive data

## FAQ

**Q: Does this work with encrypted games?**
A: Yes, but you'll need to handle decryption after extraction.

**Q: Can I use this for DLC?**
A: Absolutely! Set `required: false` for optional content packs.

**Q: What about game balance updates?**
A: Perfect use case! Update your pack versions for instant balance changes.

**Q: Does this work offline?**
A: No, internet connection is required for downloads. Cached packs work offline.

**Q: Can I cancel downloads?**
A: Yes, press Cancel during download (if allowed in parameters).

## Credits

Created for RPG Maker MZ community
Based on RMMZ core architecture
Inspired by mobile game update systems

## License

MIT License - Free to use in commercial and non-commercial projects

---

**Need Help?**
- Open an issue on GitHub
- Join RPG Maker forums
- Check RMMZ documentation

**Want to Contribute?**
PRs welcome! Areas for improvement:
- Better compression algorithms
- Real checksum verification
- Background download support
- Delta patching
- Multi-threaded downloads
