import sass from 'rollup-plugin-sass';
import { terser } from 'rollup-plugin-terser';


export default [
  {
    input: 'src/index.js',

    plugins: [
      sass({
        output: true,
        options: {
          outputStyle: 'compressed',
        },
      }),
      terser(),
    ],

    output: [
      { file: 'dist/frappe-gantt-0.6.1-1.min.js', format: 'iife', name: 'FrappeGantt' },
    ],
  },
];
