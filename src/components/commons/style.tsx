import { createGlobalStyles } from 'solid-styled-components';

export const GlobalStyle = () => {
    const GlobalStyleComponent = createGlobalStyles`
    @font-face {
        font-family: 'Pretendard-Regular';
        font-display: swap;
        src: url('public/fonts/Pretendard-Regular.woff') format('woff');
    }

    @font-face {
        font-family: 'Cafe24MeongiB';
        font-display: swap;
        src: url('public/fonts/Cafe24Meongi-B-v1.0.woff') format('woff');
    }

    @font-face {
        font-family: 'Cafe24SsurroundAir';
        font-display: swap;
        src: url('public/fonts/Cafe24SsurroundAir-v1.1.woff') format('woff');
    }

    
    @font-face {
        font-family: 'Cafe24MeongiW';
        font-display: swap;
        src: url('public/fonts/Cafe24Meongi-W-v1.0.woff') format('woff');
    }

    @font-face {
        font-family: 'Cafe24Decoshadow';
        font-display: swap;
        src: url('public/fonts/Cafe24Decoshadow.woff') format('woff');
    }

    body {
        font-family: 'Pretendard-Regular', 'Noto Sans KR', sans-serif;
        font-weight: 400;
        font-style: normal;
    }

    `;
    return <GlobalStyleComponent />;
};
