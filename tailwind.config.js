module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {},
        colors: {
            "imagine-blue": "#4384F4",
            "imagine-gray": "#F6F6F6",
            "imagine-black": "#000000",
            "imagine-grays": "#6c757d",
            "imagine-white": "#ffffff",
        },
        fontSize: {
            "5.5xl": ["3.5rem", "1.2"],
            "4.5xl": ["2.5rem", "1.2"],
            "3.5xl": ["1.25rem", "1.5"],
            "2.5xl": ["2rem", "1.5"],
        },
        boxShadow: {
            "ig-box-shadow": "0 4px 20px -5px rgb(66 133 244 / 40%)",
            "ig-h-box-shadow": "0 5px 30px -5px rgb(66 133 244 / 70%)",
        },
        fontFamily: {
            Nunito: ["Nunito, sans-serif"],
        },
        container: {
            center: true,
            padding: "1rem",
            screens: {
                lg: "1140px",
                xl: "1140px",
                "2xl": "1140px",
            },
        },
    },
    plugins: [],
};
