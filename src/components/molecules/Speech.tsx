import type { ParentComponent } from 'solid-js';
import { Image, Box, Text } from '@/components/atoms';

interface Props {}

const style = {
    tail: /* css */ `
        position: absolute;
        top: 0;
        left: -5px;
        z-index: 10;
    `,

    box: /* css */ `
        width: fit-content;
        height: fit-content;
        position: relative;
        padding: 0.5rem 1rem;
        margin-left: 1rem;
        border-radius: 13px;
        background-color: #efefef;
        z-index: 11;
    `,
};

export const Speech: ParentComponent<Props> = ({ children }) => {
    return (
        <Box sx={style.box}>
            <Image src="/image/speech.svg" width={24} height={24} useAbsolute sx={style.tail} />
            <Text fontSize="14px" sx="z-index:11;">
                {children}
            </Text>
        </Box>
    );
};
