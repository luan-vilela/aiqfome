'use client';

import { useTicketStore } from '@/store/useTicketStore';
import { usePathname } from 'next/navigation';

import * as S from './footerTicket.styles';

export function FooterTicket() {
  const pathname = usePathname();
  const ticket = useTicketStore((state) => state.ticket);

  const pathParts = pathname.split('/').filter(Boolean);
  const firstParam = pathParts[1];

  const hasTicketForParam = firstParam && ticket[firstParam];
  const isTicketPage = pathname?.startsWith('/ticket/');
  return (
    <S.Wrapper>
      <S.Text>
        feito com <span>💜</span> em maringá-PR
      </S.Text>

      {hasTicketForParam && !isTicketPage && <S.Button href={`/ticket/${firstParam}`}>ver ticket</S.Button>}

      {!hasTicketForParam && (
        <>
          <S.Text>
            <span>aiqfome.com © 2007-2023 aiqfome LTDA.</span>
          </S.Text>
          <S.Text>
            <span>CNPJ: 09.186.786/0001-58</span>
          </S.Text>
        </>
      )}
    </S.Wrapper>
  );
}
