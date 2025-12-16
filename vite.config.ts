
  import { defineConfig } from 'vite';
  import react from '@vitejs/plugin-react-swc';
  import path from 'path';

  export default defineConfig({
    plugins: [react()],
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      alias: {
        'figma:asset/d6c1e07a04bef4396bd8b586add46123114b3446.png': path.resolve(__dirname, './src/assets/d6c1e07a04bef4396bd8b586add46123114b3446.png'),
        'figma:asset/cc1c1a0430167af9780da1025c34d69c6a8f09c9.png': path.resolve(__dirname, './src/assets/cc1c1a0430167af9780da1025c34d69c6a8f09c9.png'),
        'figma:asset/bad65bb3dd25b2017592cf161c8eeb81a075c32f.png': path.resolve(__dirname, './src/assets/bad65bb3dd25b2017592cf161c8eeb81a075c32f.png'),
        'figma:asset/b7011c4eddb5c54310fea66b7493849678f5fea0.png': path.resolve(__dirname, './src/assets/b7011c4eddb5c54310fea66b7493849678f5fea0.png'),
        'figma:asset/750b0744f638d6b96c71de73994fbf08578d9f1a.png': path.resolve(__dirname, './src/assets/750b0744f638d6b96c71de73994fbf08578d9f1a.png'),
        'figma:asset/685708400766cdfdd0dd8912961eae71f5594252.png': path.resolve(__dirname, './src/assets/685708400766cdfdd0dd8912961eae71f5594252.png'),
        'figma:asset/205f63713bd5a91a92b8bf41bd3b38e06587d60c.png': path.resolve(__dirname, './src/assets/205f63713bd5a91a92b8bf41bd3b38e06587d60c.png'),
        'figma:asset/1960f282100550f0bd4fb3cae9eb5181477d89b2.png': path.resolve(__dirname, './src/assets/1960f282100550f0bd4fb3cae9eb5181477d89b2.png'),
        '@': path.resolve(__dirname, './src'),
      },
    },
    build: {
      target: 'esnext',
      outDir: 'build',
    },
    server: {
      port: 3000,
      open: true,
    },
  });