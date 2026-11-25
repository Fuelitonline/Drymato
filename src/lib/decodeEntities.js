// lib/decodeEntities.js
const decodeEntities = (str = "") =>
    String(str)
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&quot;/g, '"')
        .replace(/&#39;|&apos;/g, "'")
        .replace(/&amp;/g, "&");

export default decodeEntities;