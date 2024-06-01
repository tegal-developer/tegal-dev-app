'use client';

import useInputText from '@/hooks/useInputText';
import ButtonAction from '../atoms/ButtonAction';
import { useState } from 'react';
import Link from 'next/link';
import postNewMembership from '@/data/remote/collection/post-new-membership';

export default function MembershipRegistrationForm() {
  const [name, nameChangeHandler] = useInputText('');
  const [username, usernameChangeHandler] = useInputText('');
  const [email, emailChangeHandler] = useInputText('');
  const [whatsapp, whatsappChangeHandler] = useInputText('');
  const [instagram, instagramChangeHandler] = useInputText('');
  const [linkedin, linkedinChangeHandler] = useInputText('');
  const [photo, setPhoto] = useState(null);
  const [isWarning, setIsWarning] = useState({ warning: false, message: '' });
  const [isError, setIsError] = useState({ error: false, message: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState({
    isSuccess: false,
    isSuccessMessage: false,
  });
  const onInputChange = (e) => {
    const file = e.target.files[0];
    if (file.size > 102400) {
      setIsWarning({
        warning: true,
        message: 'Ups, ukuran foto yang diunggah terlalu besar nih!',
      });
      e.target.value = '';
      return;
    }
    setPhoto(file);
  };
  const onRegisterNewMembership = async () => {
    setIsLoading(true);
    try {
      setIsWarning({ warning: false, message: '' });
      setIsError({ error: false, message: '' });
      if (name === undefined || name === '') {
        setIsWarning({
          warning: true,
          message: 'Ups, nama kamu wajib diisi nih!',
        });
        return setIsLoading(false);
      }

      if (username === undefined || username === '') {
        setIsWarning({
          warning: true,
          message: 'Ups, username kamu wajib diisi nih!',
        });
        return setIsLoading(false);
      }

      if (email === undefined || email === '') {
        setIsWarning({
          warning: true,
          message: 'Ups, email kamu wajib diisi nih!',
        });
        return setIsLoading(false);
      }

      if (whatsapp === undefined || whatsapp === '') {
        setIsWarning({
          warning: true,
          message: 'Ups, nomor whatsapp kamu wajib diisi nih!',
        });
        return setIsLoading(false);
      }

      if (photo === undefined || photo === null) {
        setIsWarning({
          warning: true,
          message: 'Ups, foto kamu wajib diunggah nih!',
        });
        return setIsLoading(false);
      }

      const response = await postNewMembership({
        name,
        username,
        email,
        whatsapp,
        instagram: instagram === '' ? 'tegal.dev' : instagram,
        linkedin:
          linkedin === '' ? 'https://linkedin.com/company/tegal-dev' : linkedin,
        photo,
      });

      if (!response.value) {
        setIsError({
          error: true,
          message: response.message,
        });
        return setIsLoading(false);
      }

      setIsSuccess({ isSuccess: true, isSuccessMessage: true });
    } catch (error) {
      setIsError({
        error: true,
        message: error.message,
      });
    }
    setIsLoading(false);
  };

  return (
    <>
      {!isSuccess.isSuccess ? (
        <form
          className="my-5 flex flex-col gap-5"
          onKeyUp={async (e) => {
            e.preventDefault();

            if (e.key === 'Enter') onRegisterNewMembership();
          }}
        >
          {isWarning.warning ? (
            <div
              role="alert"
              className="alert alert-warning cursor-pointer"
              onClick={() => setIsWarning({ warning: false, message: '' })}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              <span>{isWarning.message}</span>
            </div>
          ) : (
            ''
          )}
          {isError.error ? (
            <div
              role="alert"
              className="alert alert-error cursor-pointer"
              onClick={() => setIsError({ error: false, message: '' })}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current shrink-0 h-6 w-6 cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>{isError.message}</span>
            </div>
          ) : (
            ''
          )}
          <div className="flex flex-col gap-2">
            <label className="input input-bordered flex items-center gap-2 bg-transparent w-full">
              <input
                type="text"
                className="grow"
                placeholder="Nama"
                required
                value={name}
                onChange={nameChangeHandler}
              />
              <span className="text-red-500">*</span>
            </label>
            <label className="input input-bordered flex items-center gap-2 bg-transparent w-full">
              <input
                type="text"
                className="grow"
                placeholder="Username"
                required
                value={username}
                onChange={usernameChangeHandler}
              />
              <span className="text-red-500">*</span>
            </label>

            <label className="input input-bordered flex items-center gap-2 bg-transparent w-full">
              <input
                type="text"
                className="grow"
                placeholder="Email"
                required
                value={email}
                onChange={emailChangeHandler}
              />
              <span className="text-red-500">*</span>
            </label>
            <label
              className="
                input
                input-bordered
                flex
                items-center
                gap-2
                bg-transparent
                w-full
                pl-0"
            >
              <span
                className="
                  bg-[#2a323c]
                  dark:bg-gray-700
                  p-3
                  rounded-md
                  text-gray-300
                  dark:text-gray-300
                  items-center
                  flex
                  h-full
                  font-medium"
              >
                62
              </span>
              <input
                type="text"
                className="grow"
                placeholder="No WhatsApp (ex: 812 xxx)"
                required
                value={whatsapp}
                onChange={whatsappChangeHandler}
              />
              <span className="text-red-500">*</span>
            </label>

            <label className="input input-bordered flex items-center gap-2 bg-transparent w-full">
              <input
                type="text"
                className="grow"
                placeholder="Username Instagram"
                value={instagram}
                onChange={instagramChangeHandler}
              />
              <span className="badge badge-info bg-[#1B71D8] text-white hidden md:block">
                Opsional
              </span>
            </label>
            <label className="input input-bordered flex items-center gap-2 bg-transparent w-full">
              <input
                type="text"
                className="grow"
                placeholder="URL LinkedIn"
                value={linkedin}
                onChange={linkedinChangeHandler}
              />
              <span className="badge badge-info bg-[#1B71D8] text-white hidden md:block">
                Opsional
              </span>
            </label>
            <label className="form-control w-full">
              <input
                type="file"
                className="file-input file-input-bordered w-full bg-transparent"
                accept="image/*"
                onChange={onInputChange}
                required
              />
              <div className="label justify-end flex gap-1">
                <span className="text-red-500">*</span>
                <span className="label-text-alt">
                  Pilih foto kamu dengan resolusi 1:1 (Max 100 KB)
                </span>
              </div>
            </label>
          </div>
          <div className="flex gap-2 justify-end">
            <ButtonAction
              buttonType="button"
              buttonLabel="Batal"
              buttonAction={() => document.getElementById('my_modal_2').close()}
              backgroundColor="transparent"
              hoverBackgroundColor="gray-100"
              darkHoverBackgroundColor="gray-700"
              textColor="gray-700"
            />
            <ButtonAction
              buttonType="button"
              buttonLabel="Daftar"
              buttonAction={async (e) => {
                e.preventDefault();
                onRegisterNewMembership();
              }}
              backgroundColor="[#1B71D8]"
              hoverBackgroundColor="[#0d4385]"
              darkHoverBackgroundColor="[#0d4385]"
              textColor="white"
              isDisabled={isLoading}
            />
          </div>
        </form>
      ) : (
        <div className="my-5 flex flex-col gap-5">
          {isSuccess.isSuccessMessage ? (
            <div
              role="alert"
              className="alert alert-success cursor-pointer"
              onClick={() =>
                setIsSuccess({ ...isSuccess, isSuccessMessage: false })
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>{`Yay! Selamat bergabung yah, ${name}!`}</span>
            </div>
          ) : (
            ''
          )}
          <div className="flex flex-col justify-center gap-5">
            <h2 className="text-center">
              Berikut kartu keanggotaan digital kamu nih!
            </h2>
            <Link
              className="
                btn
                bg-[#1B71D8]
                hover:bg-[#0d4385]
                border-0
                text-white
                active:scale-95"
              href={`https://me.tegal.dev/?${username}`}
              target="_blank"
            >
              Cek Kartu Keanggotaan Digital Kamu
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
