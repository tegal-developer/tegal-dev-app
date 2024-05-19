'use client';

import { useState } from 'react';
import ActivityItem from './ActivityItem';
import Image from 'next/image';
import UnNamed from '@/public/unnamed.jpg';
import parse from 'html-react-parser';

export default function ActivityItemList({
  communityActivities,
}: {
  communityActivities: any;
}) {
  const [selectedActivity, setSelectedActivity] = useState(
    communityActivities[0].id,
  );

  return (
    <>
      <div className="flex items-center md:justify-between w-full gap-10 px-5 overflow-x-scroll p-3">
        {communityActivities?.map((communityActivity: any) => (
          <ActivityItem
            key={communityActivity?.id}
            id={communityActivity?.id}
            text={communityActivity?.attributes?.name}
            selectedActivity={selectedActivity}
            setSelectedActivity={setSelectedActivity}
          />
        ))}
      </div>
      {communityActivities?.map((communityActivity: any) => (
        <div
          key={communityActivity?.id}
          className={`flex flex-col gap-10 md:gap-20 w-full px-5 ${
            selectedActivity === communityActivity?.id ? 'block' : 'hidden'
          } border-4 p-5 shadow-sm rounded-2xl`}
        >
          <div className="flex flex-col gap-10 tracking-wider">
            <h2 className="text-xl md:text-4xl font-bold">
              {communityActivity?.attributes?.name}
            </h2>
            <div className="tracking-wider space-y-5">
              {parse(communityActivity?.attributes?.description)}
            </div>
          </div>
          <div className="flex gap-10 w-full overflow-x-scroll">
            <Image
              src={UnNamed}
              alt="image"
              width={325}
              height={325}
              className="rounded-xl"
            />
            <Image
              src={UnNamed}
              alt="image"
              width={325}
              height={325}
              className="rounded-xl"
            />
            <Image
              src={UnNamed}
              alt="image"
              width={325}
              height={325}
              className="rounded-xl"
            />
            <Image
              src={UnNamed}
              alt="image"
              width={325}
              height={325}
              className="rounded-xl"
            />
            <Image
              src={UnNamed}
              alt="image"
              width={325}
              height={325}
              className="rounded-xl"
            />
          </div>
        </div>
      ))}
    </>
  );
}
