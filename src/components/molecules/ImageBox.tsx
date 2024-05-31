import { type ParentComponent } from 'solid-js';
import { Image, Box, Text, Stack } from '@/components/atoms';
import { animation } from '@/utils';

interface Props {
    image: string;
    width?: string;
    height?: string | number;
    imgWidth?: string | number;
    hoverText?: string;
    click?: boolean;
    onClick?: () => void;
}

export const ImageBox: ParentComponent<Props> = (props) => {
    return (
        <Box
            direction="column"
            backgroundColor="#fff"
            width={props.width}
            height="80px"
            useFlexGap
            spacing={5}
            {...animation().flip}
            pointer
            onClick={props.onClick}
            sx="min-width: 70px; max-width: 200px;"
            padding="1rem"
        >
            <Stack direction={!props.click ? 'column' : 'row'} useFlexGap spacing={4}>
                <Image src={props.image} alt="Image" width={props.imgWidth} height={props.height} />
                <Text fontSize="14px">{props.children}</Text>
            </Stack>
            {props.click && <Text fontSize="14px">{props.hoverText}</Text>}
        </Box>
    );
};
