import TextLink from '../atoms/TextLink';

export default function Navigation() {
  return (
    <ul className="font-semibold flex gap-5">
      <li>
        <TextLink href="#" text="Explore" />
      </li>
      <li>
        <TextLink href="#" text="Community" />
      </li>
      <li>
        <TextLink href="#" text="About" />
      </li>
      <li>
        <TextLink href="#" text="FAQ" />
      </li>
    </ul>
  );
}
