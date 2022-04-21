import '../src/styles/scss/index.scss';

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
        matchers: {
            color: /(background|color|fill)$/i,
            date: /Date$/,
        },
    },
    options: {
        storySort: {
            method: 'alphabetical',
            order: ['Home', 'Components', 'Services', 'Templates', '*', 'WIP'],
            locales: 'en-US',
        },
    },
}