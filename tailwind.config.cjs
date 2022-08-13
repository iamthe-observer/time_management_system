module.exports = {
    content: ['./index.html', './src/**/*.{html,vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            spacing: {
                13: '130px',
                15: '60px',
            },
            colors: {
                prime: '#4e80ec',
                primeTrans: '#4e80ec80',
                sec: '#A6D1E6',
                secTrans: '#a6d1e680',
                light: '#FEFBF6',
                dark: '#3D3C42',
                grey: '#e0e0e0',
                lightgrey: '#f0f0f0',
            },
        },
    },
};