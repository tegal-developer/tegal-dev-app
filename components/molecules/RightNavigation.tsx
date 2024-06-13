import AuthNav from './AuthNav';
import ThemeSwitcher from './ThemeSwitcher';

export default function RightNavigation() {
  return (
    <div className="lg:flex items-center gap-10 hidden">
      <AuthNav />
      <ThemeSwitcher />
    </div>
  );
}
