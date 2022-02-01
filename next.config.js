const path = require("path");

module.exports = {
    reactStrictMode: true,
    sassOptions: {
        includePaths: [path.join(__dirname, "styles")],
        prependData: `
        $text-primary: #f9f9f9;
        $text-secondary: #c9c9c9;

        $primary: #f887ff;
        $secondary: #de004e;
        $secondary-dark: #860029;
        
        $bg-primary: #29132e;
        $bg-secondary: #321450;
        `,
    },
};
