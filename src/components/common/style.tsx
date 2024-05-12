import { createGlobalStyles } from 'solid-styled-components';

export const GlobalStyle = () => {
    const GlobalStyleComponent = createGlobalStyles`
    @font-face {
        font-family: 'Pretendard-Regular';
        font-display: swap;
        src: url('public/fonts/Pretendard-Regular.woff') format('woff');
    }

    * {
        font-family: 'Pretendard-Regular', Noto Sans KR, sans-serif;
        font-weight: 400;
        font-style: normal;
    }
    `;
    return <GlobalStyleComponent />;
};
