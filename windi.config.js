import colors from 'windicss/colors';

export default {
  alias: {
    // ...
  },
  attributify: true,
  darkMode: 'class',
  extract: {
    exclude: ['node_modules', '.git', '.next/**/*'],
    include: ['**/*.{jsx,css}'],
  },
  plugins: [
    // Other plugins
    require('@windicss/plugin-animations')({
      settings: {
        animatedSpeed: 1000,
        heartBeatSpeed: 1000,
        hingeSpeed: 2000,
        bounceInSpeed: 750,
        bounceOutSpeed: 750,
        animationDelaySpeed: 1000,
      },
    }),
  ],
  shortcuts: {
    // ...
  },
  safelist: [
    // ...
  ],
  theme: {
    extend: {
      colors: {
        white: '#FAFAFA',
        black: '#333',
        primary: colors.rose,
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        serif: ['Roboto Slab', 'ui-serif', 'Georgia'],
        mono: ['Space Mono', 'ui-monospace', 'SFMono-Regular'],
        heading: ['Barlow'],
      },
    },
  },
};
