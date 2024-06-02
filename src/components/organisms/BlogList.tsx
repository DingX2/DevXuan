import { type ParentComponent } from 'solid-js';
import { type Blog } from '@/types';
import { Text, Stack, Image } from '@/components/atoms';

export const BlogList: ParentComponent<Blog> = (props) => {
    return (
        <Stack direction="column">
            <Text component="h1">{props.title}</Text>
            <Text component="h2">{props.subtitle}</Text>
            <Text component="span">{props.content}</Text>
            <Text>{props.writeDate}</Text>
            <Image src={props.image} />
        </Stack>
    );
};
