export default function ButtonAction({
  buttonLabel,
  buttonAction,
  backgroundColor,
  hoverBackgroundColor,
  darkHoverBackgroundColor,
  textColor,
  isDisabled,
}: {
  buttonLabel: string;
  buttonAction: any;
  backgroundColor: string;
  hoverBackgroundColor: string;
  darkHoverBackgroundColor: string;
  textColor: string;
  isDisabled?: boolean;
}) {
  return (
    <button
      type="button"
      className={`
        bg-${backgroundColor}
        inline-flex
        items-center
        justify-center
        px-5
        py-3
        text-xs
        font-medium
        text-center
        text-${textColor}
        border
        border-gray-300
        rounded-lg
        focus:ring-4
        w-full
        md:w-56
        active:scale-95
        duration-150
        focus:ring-gray-100
        dark:text-white
        hover:bg-${hoverBackgroundColor}
        dark:hover:bg-${darkHoverBackgroundColor}
        ease-in-out
        dark:hover:shadow-slate-500
        dark:focus:ring-gray-800`}
      disabled={isDisabled}
      onClick={buttonAction}
    >
      {isDisabled ? (
        <span className="loading loading-spinner loading-xs" />
      ) : (
        buttonLabel
      )}
    </button>
  );
}
