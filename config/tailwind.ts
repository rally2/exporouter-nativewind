import resolveConfig from 'tailwindcss/resolveConfig';
const config = require('@/tailwind.config');

const tailwindConfig = resolveConfig(config);

export default tailwindConfig;
