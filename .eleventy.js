const markdownIt = require("markdown-it");
const markdownItAttrs = require("markdown-it-attrs");

module.exports = function(eleventyConfig) {

    // Elevent PassThrough
    eleventyConfig.addPassthroughCopy("style.css");
    eleventyConfig.addPassthroughCopy("Bagnard.otf");

    // Add target=blank
    const mdOptions = {
        html: true,
        breaks: true,
        linkify: true,
    };

    const markdownLib = markdownIt(mdOptions)
        .use(markdownItAttrs)
        .disable("code");
    
    eleventyConfig.setLibrary("md", markdownLib);
    

};