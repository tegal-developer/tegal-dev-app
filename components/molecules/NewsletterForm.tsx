'use client';

import toast from 'react-hot-toast';
import InputText from '../atoms/InputText';
import useInputText from '@/hooks/useInputText';
import { isValidEmail } from '@/utils';

export default function NewsletterForm({
  addNewsletterSubscriber,
}: {
  addNewsletterSubscriber: any;
}) {
  const [email, handleEmailChange] = useInputText('');
  const handleButtoClick = async () => {
    if (email === '') toast.error('Ups! Kamu perlu ngisi email dulu nih!');
    else if (!isValidEmail(email))
      toast.error('Ups! Email yang kamu isi gak valid nih!');
    else {
      const responseJson = await addNewsletterSubscriber(email);

      if (responseJson.data)
        return toast.success('Makasih yah udah bergabung!');

      if (responseJson.error.status === 400)
        return toast.error('Email kamu udah terdaftar nih!');
    }
  };

  return (
    <div
      className="
        flex
        flex-col
        sm:flex-row
        md:justify-center
        xl:justify-normal
        md:flex-row gap-3"
    >
      <InputText
        type="email"
        id="email"
        placeholder="johndoe@example.com"
        value={email}
        onEmailChange={handleEmailChange}
        isRequired={true}
      />
      <button
        type="button"
        className={`
        sm:min-w-[160px]
        bg-[#1B71D8]
        hover:bg-[#0d4385]
        active:scale-95
        duration-150
        text-white
        dark:text-white
        py-3
        px-3
        text-xs
        font-semibold
        rounded-lg`}
        onClick={handleButtoClick}
      >
        Gabung Newsletter
      </button>
    </div>
  );
}
