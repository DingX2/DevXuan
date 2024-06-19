const commonStyles = {
    text: `fontSize: 10px;`,
    gap: `gap: 0px;`,
    putBottom: `bottom: 0;`,
    width: `width: 100%;`,
    width80: `width: 80%;`,
    width50: `width: 50%;`,
    column: `flex-direction: column;`,
    padding: `padding: 1rem 1.5rem;`,
    fitContent: `height: fit-content;`,
    displayNone: `
        display: none;
    `,
};

export const mobileHome = {
    mobile: `@media (max-width: 480px) {
            ${(commonStyles.text, commonStyles.gap)}
        }`,
    tablet: `@media (max-width: 768px) {
            ${(commonStyles.width, commonStyles.gap)}
        }
    `,
    mobileStack: `@media (max-width: 768px) {
        ${commonStyles.column}
    }`,
    mobileHidden: `@media (max-width: 480px) {
        ${commonStyles.displayNone}
    }`,
    mobileBox: `@media (max-width: 768px) {
        ${(commonStyles.padding, commonStyles.fitContent, commonStyles.width)}
    }`,
    mobileImage: `@media (max-width: 768px) {
        ${commonStyles.width50}
    }`,
    mobileNav: `@media (min-width: 480px) {
        ${commonStyles.displayNone}
    }
`,
};
