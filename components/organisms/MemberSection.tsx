'use client';

import Image from 'next/image';
import Container from '../templates/Container';
import TextHeadingSection from '../atoms/TextHeadingSection';
import { useEffect, useState } from 'react';
import postAllMembershipsByPage from '@/data/remote/next/post-all-memberships-by-page';

export default function MemberSection({
  membershipHeading,
}: {
  membershipHeading: string;
}) {
  const [memberships, setMemberships] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    postAllMembershipsByPage(page).then((retrievedAllMemberships) => {
      if (retrievedAllMemberships?.data?.members?.length === 0) setPage(1);
      else setMemberships(retrievedAllMemberships?.data?.members);
    });
  }, [page]);

  return (
    <section
      id="membership"
      className="
        bg-white
        dark:bg-gray-900
        dark:border-t
        dark:border-gray-700
        px-5
        py-6
        md:py-12
        text-gray-700
        dark:text-white
        text-center"
    >
      <Container>
        <TextHeadingSection heading={membershipHeading} />
        <div className="flex flex-wrap max-w-[720px] gap-3 items-center justify-center">
          {memberships?.map((membership: any) => (
            <div
              key={membership?.key}
              className="tooltip"
              data-tip={membership?.username}
            >
              <div
                className="
                  w-[75px]
                  h-[75px]
                  overflow-hidden
                  rounded-lg
                  border-2
                  hover:scale-110
                  cursor-pointer
                  duration-300
                  object-cover
                  active:scale-95
                  hover:brightness-75"
              >
                <Image
                  src={membership?.photo}
                  alt="Member"
                  width={75}
                  height={75}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="join grid grid-cols-2">
          <button
            className="join-item btn btn-outline hover:bg-gray-100 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-white dark:hover:bg-gray-700"
            onClick={() => {
              if (page > 1) return setPage(page - 1);
              else return;
            }}
          >
            Previous
          </button>
          <button
            className="join-item btn btn-outline hover:bg-gray-100 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-white dark:hover:bg-gray-700"
            onClick={() => setPage(page + 1)}
          >
            Next
          </button>
        </div>
      </Container>
    </section>
  );
}
