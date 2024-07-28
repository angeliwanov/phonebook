import pluginJs from '@eslint/js';
import globals from 'globals';

export default [
  { files: ['**/*.js'], languageOptions: { sourceType: 'module' } },
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
  {
    ignores: ['dist'],
  },
];
