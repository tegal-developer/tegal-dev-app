import Link from 'next/link';
import Button from '../atoms/Button';
import Logo from '../atoms/Logo';
import TextLink from '../atoms/TextLink';

export default function Navbar({
  imageSource,
  imageAlt,
  imageWidth,
  imageHeight,
}: {
  imageSource: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
}) {
  return (
    <nav
      className="
        bg-white
        w-full
        flex
        items-center
        justify-between
        px-10
        py-5
        text-[#5F6368]"
    >
      <div className="flex items-center gap-20">
        <Link href={'#'}>
          <Logo
            imageSource={imageSource}
            imageAlt={imageAlt}
            imageWidth={imageWidth}
            imageHeight={imageHeight}
          />
        </Link>
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
        </ul>
      </div>
      <ul className="font-semibold flex gap-5 items-center">
        <li>
          <TextLink href="#" text="Sign In" />
        </li>
        <li>
          <Button
            label="Register"
            backgroundColor="#1B71D8"
            textColor="white"
          />
        </li>
      </ul>
    </nav>
  );
}
