import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
    ],
    build: {
        manifest: true, // Ini akan menghasilkan manifest.json
        outDir: 'public/build', // Hasil build akan disimpan di folder ini
        rollupOptions: {
            input: { // Jika Anda ingin menentukan beberapa file input, lakukan di sini
                app: 'resources/js/app.js',
                css: 'resources/css/app.css',
            },
            output: {
                // Anda bisa menambahkan opsi output jika perlu
            }
        }
    },
});
