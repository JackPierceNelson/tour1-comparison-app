// build.js
const esbuild = require('esbuild');

async function build() {
    try {
        await esbuild.build({
            entryPoints: ['src/main.jsx'], // Entry point in the src directory
            bundle: true,
            outfile: 'dist/out.js',
            minify: true, 
            sourcemap: true,
        });
        console.log('Build successful!');
    } catch (error) {
        console.error('Build failed:', error);
    }
}

build();