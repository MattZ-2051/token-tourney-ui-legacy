import Link from 'next/link';

export interface HeaderLinkProps {
  href: string;
  label: string;
}

const HeaderLink = ({ href, label }: HeaderLinkProps) => (
  <Link href={href} className="font-helvetica-bold pr-8 text-xs font-bold uppercase">
    {label}
  </Link>
);

export default HeaderLink;
