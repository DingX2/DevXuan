import { type ParentComponent } from 'solid-js';
import { Image, Box, Text } from '@/components/atoms';

interface Props {
    image: string;
    width?: string | number;
    height?: string | number;
    hoverText?: string;
}

export const ImageBox: ParentComponent<Props> = ({ image, children, width, height, hoverText }) => {
    return (
        <Box direction="column" backgroundColor="#fff" height="100px" useFlexGap spacing={5}>
            <Image src={image} alt="Image" width={width} height={height} />
            <Text>{children}</Text>
            {hoverText && <Text>{hoverText}</Text>}
        </Box>
    );
};
