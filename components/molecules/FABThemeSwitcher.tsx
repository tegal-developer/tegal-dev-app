import ThemeSwitcher from './ThemeSwitcher';

export default function FABThemeSwitcher() {
  return (
    <div
      className="
        fixed
        bottom-5
        flex
        items-center
        justify-center
        right-5
        bg-[#1B71D8]
        p-3
        rounded-full
        z-40
        md:hidden"
    >
      <ThemeSwitcher />
    </div>
  );
}
