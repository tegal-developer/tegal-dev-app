'use client';

import toast from 'react-hot-toast';
import Button from '../atoms/Button';
import InputText from '../atoms/InputText';
import useInputText from '@/hooks/useInputText';

export default function NewsletterForm({
  addNewsletterSubscriber,
}: {
  addNewsletterSubscriber: any;
}) {
  const [email, handleEmailChange] = useInputText('');
  const handleButtoClick = () => toast('Coming soon!');

  return (
    <div className="flex flex-col md:flex-row gap-3 md:gap-10">
      <InputText
        type="text"
        id="email"
        placeholder="johndoe@example.com"
        value={email}
        onEmailChange={handleEmailChange}
        isRequired={true}
      />
      <Button
        label="Gabung Newsletter"
        backgroundColor="#1B71D8"
        textColor="white"
        action={() => handleButtoClick()}
      />
    </div>
  );
}
