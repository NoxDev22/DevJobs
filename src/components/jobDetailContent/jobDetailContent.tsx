import "./jobDetailContent.css";

import { CompleteIcon } from "../svgIcons/completeIcon";
type Props = {
  title?: string;
  list?: string;
};

export function JobDetailContent({ title, list }: Props) {
  const list_rq = list?.split("-");

  return (
    <div className="jobDetails__content">
      <h2>{title}</h2>
      <ul className="jobDetails__contentList">
        {list_rq?.map((rq, index) => {
          if (rq) {
            return (
              <li key={index} className="jobDetails__contentLi">
                <CompleteIcon width="22" height="22" /> {rq}
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
}
