type Props = {
  className: string;
  width: string;
  height: string;
};

export function HomeIcon({ width, height, className }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      className={className}
    >
      <path fill="#8a9394" d="M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8z" />
    </svg>
  );
}
