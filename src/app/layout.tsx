import { ThemeProviderWrapper } from '@/context/ThemeContext';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Teste Aiqfome',
  description: 'Desafio técnico Aiqfome com suporte a dark mode',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pt-BR'>
      <body>
        <ThemeProviderWrapper> {children}</ThemeProviderWrapper>
      </body>
    </html>
  );
}
