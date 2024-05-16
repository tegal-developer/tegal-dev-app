export default function Button({
  label,
  backgroundColor,
  hoverBackgroundColor,
  textColor,
  action,
}: {
  label: string;
  backgroundColor: string;
  hoverBackgroundColor: string;
  textColor: string;
  action: any;
}) {
  return (
    <button
      type="button"
      className={`
        bg-[${backgroundColor}]
        hover:bg-[${hoverBackgroundColor}]
        text-${textColor}
        p-3 rounded-full`}
      onClick={action}
    >
      {label}
    </button>
  );
}
