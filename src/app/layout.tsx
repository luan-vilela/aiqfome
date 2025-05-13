import { ThemeProviderWrapper } from '@/context/themeContext';
import StyledComponentsRegistry from '@/lib/registry';
import { Metadata } from 'next';

import { FooterTicket } from '@/components/footer/footer-ticket/footerTicket';

import { Header } from '../components/header/header';

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
      <head>
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap'
        />
      </head>
      <body>
        <StyledComponentsRegistry>
          <ThemeProviderWrapper>
            <Header />
            <div className='main'>{children}</div>
            <FooterTicket />
          </ThemeProviderWrapper>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
