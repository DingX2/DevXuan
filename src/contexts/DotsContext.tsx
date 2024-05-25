// import { type ParentComponent, createContext, createSignal, useContext } from 'solid-js';
// import { type Dot } from '@/types';

// type DotReturnType = [
//     () => Dot[],
//     {
//         set: (value: Dot[]) => void;
//         add: (value: Dot) => void;
//         get: () => Dot[];
//     },
// ];

// interface DotsContextType {
//     dotsUtils: DotReturnType;
// }
// export const DotsContext = createContext<DotsContextType | undefined>(undefined);
// const initialDots: Dot[] = [];
// export const MyContext = createContext(initialDots);

// export const DotsProvider: ParentComponent = (props) => {
//     const [dots, setDots] = createSignal<Dot[]>(initialDots);
//     const dotsUtils = [
//         dots,
//         {
//             set(value: Dot[]) {
//                 setDots(value);
//             },
//             add(value: Dot) {
//                 setDots((prev) => [...prev, value]);
//             },
//             get() {
//                 dots();
//             },
//         },
//     ];

//     return <DotsContext.Provider value={{ dotsUtils }}>{props.children}</DotsContext.Provider>;
// };

// export function useCounter(): DotReturnType {
//     const context = useContext(DotsContext);
//     if (!context) {
//         throw new Error('useCounter must be used within a DotsProvider');
//     }
//     return context.dotsUtils;
// }
