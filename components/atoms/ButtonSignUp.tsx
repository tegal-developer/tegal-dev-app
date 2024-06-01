export default function ButtonSignUp({
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
      className={`
        text-${textColor}
        dark:text-white
        font-semibold
        bg-[${backgroundColor}]
        hover:bg-[#0d4385]
        active:scale-95
        duration-150
        px-3
        py-1
        text-xs
        rounded-lg`}
      onClick={action}
    >
      {label}
    </button>
  );
}
