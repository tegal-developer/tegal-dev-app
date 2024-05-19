export default function Button({
  label,
  backgroundColor,
  hoverBackgroundColor,
  textColor,
  action,
  textSize,
}: {
  label: string;
  backgroundColor: string;
  hoverBackgroundColor: string;
  textColor: string;
  action: any;
  textSize: string;
}) {
  return (
    <button
      type="button"
      className={`
        bg-[${backgroundColor}]
        hover:bg-[${hoverBackgroundColor}]
        text-${textColor}
        py-3
        px-5
        text-sm
        font-semibold
        md:text-${textSize}
        rounded-full`}
      onClick={action}
    >
      {label}
    </button>
  );
}
