import "./faq.css";

type Props = {
  textHead: string;
  textContent: string;
};

export function Faq({ textHead, textContent }: Props) {
  const handleClickFaq = (e: React.MouseEvent<HTMLDivElement>) => {
    const faq = e.currentTarget;
    const faqContent = faq.lastElementChild;
    faq.classList.toggle("active");

    if (!faqContent) return;

    if (faq.classList.contains("active")) {
      faqContent?.setAttribute(
        "style",
        `height:${faqContent.scrollHeight + 20}px`,
      );
    } else {
      faqContent.setAttribute("style", "height:0px");
    }
  };
  return (
    <div className="faq" onClick={handleClickFaq}>
      <div className="head">
        <span>{textHead}</span>
        <svg
          width="18"
          height="19"
          viewBox="0 0 18 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 14.469L1 6.46897L1.96897 5.5L9 12.531L16.031 5.5L17 6.46897L9 14.469Z"
            fill="#f6f8f7"
          />
        </svg>
      </div>
      <div className="content">
        <p>{textContent}</p>
      </div>
    </div>
  );
}
