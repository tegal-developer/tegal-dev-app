export default function ButtonSignIn({ action }: { action: any }) {
  return (
    <button
      type="button"
      className={`
        bg-[#E7EDF2]
        hover:bg-[#d1d6db]
        dark:hover:bg-[#9ea2a5]
        text-gray-700
        active:scale-95
        duration-150
        py-1
        px-3
        text-xs
        font-semibold
        rounded-lg`}
      onClick={action}
    >
      Sign In
    </button>
  );
}
