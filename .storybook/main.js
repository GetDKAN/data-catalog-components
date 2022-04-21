const path = require('path')

module.exports = {
    stories: [
        '../src/**/*.stories.mdx',
        '../src/**/*.stories.@(js|jsx|ts|tsx)'
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        '@storybook/addon-a11y',
        '@storybook/preset-scss',
        {
            /**
             * Fix Storybook issue with PostCSS@8
             * @see https://github.com/storybookjs/storybook/issues/12668#issuecomment-773958085
             */
            name: '@storybook/addon-postcss',
            options: {
                postcssLoaderOptions: {
                    implementation: require('postcss'),
                },
            },
        },
    ],
    framework: '@storybook/react',
    core: {
        builder: 'webpack5',
    },
    webpackFinal: (config, { configType }) => {
        /**
         * Add support for alias-imports
         * @see https://github.com/storybookjs/storybook/issues/11989#issuecomment-715524391
         */
        config.resolve.alias = {
            ...config.resolve?.alias,
            '@': [
                path.resolve(__dirname, '../src/'),
                path.resolve(__dirname, '../')
            ],
        }

        return config;
    },
}
