# SSS (Simple Slide System)

SSS or Simple Slide System is a library written in JavaScript for making Presentations in HTML.

## Themes
Themes can be Specified in the Themes directory as a CSS-File. You can add it in the HTML-Head.
```html
<link rel="stylesheet" href="themes/<theme>.css">
```
There are the following standard Themes:
- terminal
- cattpuchinmocha

## Config
You can configure SSS via setting a variable in the head. Here is a example:
```html
<script>
    const SSS_CENTER_SLIDE_CONTENT = true
    const SSS_TITLE = "Welcome to SSS"
    const SSS_SLIDE_NUMBER = true
    const SSS_PROGRESS_BAR = true
</script>
```
| Variable | Description | Type
| --- | --- | --- |
`SSS_CENTER_SLIDE_CONTENT` | Centers the content of every slide | Boolean
`SSS_TITLE` | Sets the HTML Title | String
`SSS_SLIDE_NUMBER` | Shows the slide Number at the top left | Boolean
`SSS_PROGRESS_BAR` | Shows a Progressbar at the top | Boolean