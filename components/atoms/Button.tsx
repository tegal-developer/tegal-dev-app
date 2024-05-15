export default function Button({
  label,
  backgroundColor,
  textColor,
  action,
}: {
  label: string;
  backgroundColor: string;
  textColor: string;
  action: any;
}) {
  return (
    <button
      type="button"
      className={`bg-[${backgroundColor}] text-${textColor} p-3 rounded-full`}
      onClick={action}
    >
      {label}
    </button>
  );
}
