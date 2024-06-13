import { useState } from 'react';
import HamburgerButton from './HamburgerButton';
import PopUpMenu from './PopUpMenu';

export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <HamburgerButton isOpen={isOpen} setIsOpen={setIsOpen} />
      <PopUpMenu isOpen={isOpen} />
    </>
  );
}
