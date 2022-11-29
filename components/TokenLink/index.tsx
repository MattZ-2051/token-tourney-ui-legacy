import Link from 'next/link';
export interface TokenLinkProps {
  href: string;
  label: string;
  className?: string;
}

const TokenLink = ({ href, label, className = '' }: TokenLinkProps) => (
  <Link
    href={href}
    className={`font-helvetica-bold pr-8 text-xs font-bold uppercase hover:opacity-70 ${className}`}
  >
    {label}
  </Link>
);

export default TokenLink;
