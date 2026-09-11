import type { Metadata } from 'next';
import '@fontsource/manrope/400.css';
import '@fontsource/manrope/500.css';
import '@fontsource/manrope/600.css';
import '@fontsource/manrope/700.css';
import '@fontsource/manrope/800.css';
import '@fontsource/caveat/400.css';
import './globals.css';
export const metadata: Metadata = { title: { default: 'EstudaAi — Sua jornada começa aqui', template: '%s | EstudaAi' }, description: 'Organize sua rotina, estude com foco e evolua junto.', icons: { icon: '/favicon.svg' } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="pt-BR"><body>{children}</body></html>; }
