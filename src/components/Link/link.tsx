import { NavLink } from "react-router";

type props = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: React.ReactNode;
};

export function Link({ href, children, ...props }: props) {
  return (
    <NavLink to={href} {...props}>
      {children}
    </NavLink>
  );
}
