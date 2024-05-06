import { type Component, createSignal } from 'solid-js';
import { styled } from 'solid-styled-components';
import { Button } from './components/atoms';
import solidLogo from './assets/solid.svg';

const Box = styled.div``;

export const App: Component = () => {
    const [count, setCount] = createSignal(0);

    return (
        <>
            <div>
                <a href="https://solidjs.com" target="_blank" rel="noreferrer">
                    <img src={solidLogo} class="logo solid" alt="Solid logo" />
                </a>
            </div>
            <Box>Vite + Solid</Box>
            <Button>버튼</Button>
            <div class="card">
                <button onClick={() => setCount((count) => count + 1)}>count is {count()}</button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p class="read-the-docs">Click on the Vite and Solid logos to learn more</p>
        </>
    );
};
