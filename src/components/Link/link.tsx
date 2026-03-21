type props = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: React.ReactNode;
};

export function Link({ href, children, ...props }: props) {
  const handleEvent = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event?.preventDefault();
    window.history.pushState({}, "", href);
    const popsPath = new PopStateEvent("popstate");
    window.dispatchEvent(popsPath);
  };

  return (
    <a href={href} onClick={handleEvent} {...props}>
      {children}
    </a>
  );
}
