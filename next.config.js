const path = require("path");

module.exports = {
    reactStrictMode: true,
    images: {
        domains: ["imgur.com"],
    },
    sassOptions: {
        includePaths: [path.join(__dirname, "styles")],
        prependData: `
        $text-primary: #f9f9f9;
        $text-secondary: #c9c9c9;

        $primary: #f887ff;
        $primary-dark: #C554CC;
        $secondary: #de004e;
        $secondary-dark: #860029;
        
        $bg-primary: #29132e;
        $bg-secondary: #321450;
        `,
    },
};
