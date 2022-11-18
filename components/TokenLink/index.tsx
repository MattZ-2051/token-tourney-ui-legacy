import Link from 'next/link';
export interface TokenLinkProps {
  href: string;
  label: string;
}

const TokenLink = ({ href, label }: TokenLinkProps) => (
  <Link
    href={href}
    className="font-helvetica-bold pr-8 text-xs font-bold uppercase"
  >
    {label}
  </Link>
);

export default TokenLink;