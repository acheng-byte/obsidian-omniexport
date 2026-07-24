# OmniExport

[中文](README.md) | [English](README_EN.md)

> Universal HTML Export Plugin for Obsidian — Self-contained single file, Interactive, Mobile-First, Multi-Platform Publishing

## Features

### Self-Contained Single-File HTML

Exported HTML embeds CSS, JavaScript, images, videos, and audio all into a single `.html` file. No external dependencies — works perfectly offline. Share it with anyone and it just opens.

### 6 Document Themes

| Theme | Use Case |
|-------|----------|
| Default | General note export |
| Official (GB/T 9704-2012) | Formal documents, official letters |
| Report | Work reports, project reports |
| Presentation | Slide-style presentation |
| Engineering | Engineering reports, technical docs (blue professional style) |
| Sales | Sales reports, performance reviews (green data style) |

All themes support dark/light mode. Exported HTML can switch themes at runtime without re-exporting.

### Multi-Format File Support

| File Type | Supported Formats | Export Method |
|-----------|-------------------|---------------|
| Markdown | `.md` | Full rendering |
| Text | `.txt` `.csv` `.json` `.yaml` `.log` | Preserved formatting |
| Image | `.png` `.jpg` `.gif` `.svg` `.webp` `.bmp` | base64 embedded |
| Video | `.mp4` `.webm` `.mov` `.avi` `.mkv` | base64 embedded |
| Audio | `.mp3` `.wav` `.ogg` `.flac` `.aac` `.m4a` | base64 embedded |

### Interactive Features (Optional)

When enabled, exported HTML includes a toolbar with:

- Table of Contents navigation (auto-generated, slide-out sidebar)
- Full-text search (200ms debounce, safe text processing)
- Dark/Light mode toggle (floating button)
- Runtime theme switching (6-theme dropdown)
- Editable tables (cells editable, reset and CSV export)
- Task list progress bars (auto-calculated completion ratio)
- File import (Excel/Word/CSV import into page)

### Asset Embedding Engine

Images, videos, and audio referenced in Markdown are automatically resolved and converted to base64 data URIs. Supports 5 path resolution strategies:

- `app://` URLs (desktop Obsidian rendering)
- `content://` URLs (mobile)
- MetadataCache resolution (wikilinks / relative paths)
- Direct path lookup
- Filename global search

### Rendering Preservation

Optional rendering features:

- Mermaid diagrams (CDN loaded)
- Math formulas via MathJax (CDN loaded)
- Code syntax highlighting via highlight.js (CDN loaded)
- SEO and Open Graph tags

### Batch Export

One-click export of the entire vault, auto-filtering non-exportable file types, with real-time progress indication.

### Custom Output Path

Custom output directory with built-in folder picker, cross-platform compatible (Desktop / Android / iOS).

### Mobile-First

All exported pages use responsive design for a perfect reading experience on mobile. The plugin itself is fully compatible with Obsidian mobile.

### Auto Update

Supports auto-detection of new versions on startup, or manual check in settings with download link.

## Quick Start

1. Search for **OmniExport** in the Obsidian community plugin store and install it
2. Configure language and theme preferences in settings (defaults to simplest MD rendering mode — enable advanced features as needed)
3. Use the command palette (`Ctrl/Cmd + P`) and search for:
   - `Export current note as HTML` — export the current file
   - `Batch export entire vault` — export the whole vault
   - `Check for plugin updates` — manual update check
   - `View export log` — view export log (errors only by default)

## Settings

| Setting | Description | Default |
|---------|-------------|---------|
| Language | 中文 / English | 中文 |
| Theme | Light / Dark / Auto | Auto |
| Document Theme | 6 theme options | Default |
| Embed Assets | Embed images/videos/audio as base64 | On |
| Interactive Features | Toolbar/search/TOC/theme toggle | Off |
| Mermaid | Render Mermaid diagrams | Off |
| Math | Render LaTeX formulas | Off |
| Code Highlight | Syntax highlighting | Off |
| SEO | Generate Open Graph tags | Off |
| Output Path | Custom output directory | Same as note |
| Auto Update | Auto-check for new versions on startup | On |
| Check Update | Manual check and download | — |

## License

MIT License

## Author

**Acheng - One City of Universe** (阿成 - 天地乾坤一座城)

GitHub: [acheng-byte](https://github.com/acheng-byte)
