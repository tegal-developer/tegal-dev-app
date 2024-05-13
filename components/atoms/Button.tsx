export default function Button({
  label,
  backgroundColor,
  textColor,
}: {
  label: string;
  backgroundColor: string;
  textColor: string;
}) {
  return (
    <button
      type="button"
      className={`bg-[${backgroundColor}] text-${textColor} p-3 rounded-full`}
    >
      {label}
    </button>
  );
}
