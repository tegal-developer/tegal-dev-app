'use client';

import toast from 'react-hot-toast';
import InputText from '../atoms/InputText';
import useInputText from '@/hooks/useInputText';
import { isValidEmail } from '@/utils';
import postNewsLetterSubscriber from '@/data/remote/strapi/collection/post-newsletter-subscriber';
import { useState } from 'react';

export default function NewsletterForm() {
  const [email, handleEmailChange] = useInputText('');
  const [isLoading, setIsLoading] = useState(false);
  const handleButtoClick = async () => {
    setIsLoading(true);
    try {
      if (email === '') {
        setIsLoading(false);
        return toast.error('Ups! Kamu perlu ngisi email dulu nih!');
      } else if (!isValidEmail(email)) {
        setIsLoading(false);
        return toast.error('Ups! Email yang kamu isi gak valid nih!');
      } else {
        const responseJson = await postNewsLetterSubscriber(email);

        if (responseJson.data) {
          setIsLoading(false);
          return toast.success('Makasih yah udah bergabung!');
        }

        if (responseJson.error.status === 400) {
          setIsLoading(false);
          return toast.error('Email kamu udah terdaftar nih!');
        }
      }
    } catch (error) {}
    setIsLoading(false);
  };

  return (
    <form
      className="
        flex
        flex-col
        sm:flex-row
        md:justify-center
        xl:justify-normal
        md:flex-row gap-3"
      onKeyUp={(e: React.KeyboardEvent<any>) => {
        e.preventDefault();

        if (e.key === 'Enter') handleButtoClick();
      }}
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
        className="
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
          rounded-lg
          md:w-56"
        onClick={handleButtoClick}
        disabled={isLoading}
      >
        {isLoading ? (
          <span className="loading loading-spinner loading-xs" />
        ) : (
          'Gabung Newsletter'
        )}
      </button>
    </form>
  );
}
