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
        active:scale-95
        duration-150
        dark:text-white
        py-1
        px-3
        text-xs
        font-semibold
        md:text-${textSize}
        rounded-lg`}
      onClick={action}
    >
      {label}
    </button>
  );
}
