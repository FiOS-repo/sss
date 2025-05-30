# SSS (Simple Slide System)
SSS (Simple Slide System) is a lightweight JavaScript library for creating HTML-based presentations with ease.

## Installation
Clone the repository:
```bash
git clone https://github.com/FiOS-repo/sss.git
cd sss
```
Start the development server (with live reload):
```bash
npm install
npm start
```
The presentation entry point is the index.html file.

# Docs

## Usage
Edit the slides directly in `index.html` using `<section>` elements inside the `.slides` container. Each section represents one slide.
```html
<div class="slides">
  <section>
    <h1>Slide 1</h1>
    <p>Welcome to your first SSS slide!</p>
  </section>
  <section>
    <h1>Slide 2</h1>
    <p>More content here...</p>
  </section>
</div>
```

## Themes
Themes are standard CSS files located in the `themes/` directory. To apply a theme, link it in your HTML `<head>`:
```html
<link rel="stylesheet" href="themes/<theme>.css">
```
### Available Themes:
- `terminal`
- `cattpuchinmocha`
You can also add your own themes by creating additional CSS files in the themes/ directory.

## Configuration
You can configure SSS via global variables in a `<script>` tag in the `<head>` of your HTML file:
```html
<script>
  const SSS_CENTER_SLIDE_CONTENT = true;
  const SSS_TITLE = "Welcome to SSS";
  const SSS_SLIDE_NUMBER = true;
  const SSS_PROGRESS_BAR = true;
</script>
```
| Variable                   | Description                          | Type    |
| -------------------------- | ------------------------------------ | ------- |
| `SSS_CENTER_SLIDE_CONTENT` | Centers the content of each slide    | Boolean |
| `SSS_TITLE`                | Sets the document title              | String  |
| `SSS_SLIDE_NUMBER`         | Displays the slide number (top left) | Boolean |
| `SSS_PROGRESS_BAR`         | Displays a progress bar at the top   | Boolean |
