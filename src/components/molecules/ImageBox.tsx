import { type ParentComponent } from 'solid-js';
import { Image, Box, Text } from '@/components/atoms';
import { animation } from '@/utils';

interface Props {
    image: string;
    width?: string;
    height?: string | number;
    imgWidth?: string | number;
    hoverText?: string;
}

export const ImageBox: ParentComponent<Props> = ({ image, children, width, height, imgWidth, hoverText }) => {
    return (
        <Box
            direction="column"
            backgroundColor="#fff"
            width={width}
            height="100px"
            useFlexGap
            spacing={5}
            {...animation().flip}
        >
            <Image src={image} alt="Image" width={imgWidth} height={height} />
            <Text>{children}</Text>
            {hoverText && <Text>{hoverText}</Text>}
        </Box>
    );
};
