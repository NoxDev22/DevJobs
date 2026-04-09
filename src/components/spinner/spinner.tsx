import "./spinner.css";

import { SpinnerCircularSplit } from "spinners-react";

type Props = {
  className: string;
};

export function Spinner({ className }: Props) {
  return (
    <div className={className}>
      <SpinnerCircularSplit
        size={90}
        thickness={100}
        speed={100}
        color="#13ec92"
        secondaryColor="rgba(0, 0, 0, 0.44)"
      />
      <p className="spinner__text">Cargando...</p>
    </div>
  );
}
