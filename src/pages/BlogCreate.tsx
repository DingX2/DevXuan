import { type ParentComponent, createSignal } from 'solid-js';
import ReactMarkdown from 'react-markdown';
import { Stack, Box } from '@/components/atoms';

export const BlogCreate: ParentComponent = () => {
    const [markdown, setMarkdown] = createSignal<string>('');

    const handleInput = (event: Event) => {
        const target = event.target as HTMLTextAreaElement;
        if (target) {
            setMarkdown(target.value);
        }
    };

    return (
        <Stack>
            <Box>
                <textarea
                    rows="10"
                    cols="50"
                    value={markdown()}
                    onInput={handleInput}
                    placeholder="Write your markdown here..."
                />
            </Box>
            <Box>
                <ReactMarkdown>{markdown()}</ReactMarkdown>
            </Box>
        </Stack>
    );
};
