const commonStyles = {
    text: `fontSize: 12px;`,
    gap: `gap: 0px;`,
    width: `width: 100%;`,
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
            ${commonStyles.width}
        }
    `,
    mobileStack: `@media (max-width: 768px) {
        ${commonStyles.column}
    }`,
    mobileHidden: `@media (max-width: 768px) {
        ${commonStyles.displayNone}
    }`,
    mobileBox: `@media (max-width: 768px) {
        ${(commonStyles.padding, commonStyles.fitContent, commonStyles.width)}
    }
`,
};
