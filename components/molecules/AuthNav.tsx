import Button from '../atoms/Button';
import TextLink from '../atoms/TextLink';

export default function AuthNav() {
  return (
    <ul className="font-semibold flex gap-5 items-center">
      <li>
        <TextLink href="#" text="Sign In" />
      </li>
      <li>
        <Button label="Register" backgroundColor="#1B71D8" textColor="white" />
      </li>
    </ul>
  );
}
