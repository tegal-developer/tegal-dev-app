'use client';

import { useState } from 'react';
import ActivityItem from './ActivityItem';
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
      <div
        className="
          flex
          w-full
          py-3
          md:hidden
          gap-3
          overflow-x-scroll"
      >
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
      <div className="flex flex-col md:flex-row gap-10 md:divide-x-8">
        <div
          className="
            hidden  
            md:flex
            md:flex-col
            gap-5
            justify-center"
        >
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
            className={`flex gap-10 md:gap-20 w-full md:px-5 ${
              selectedActivity === communityActivity?.id ? 'block' : 'hidden'
            } rounded-2xl`}
          >
            <div className="flex flex-col gap-5 tracking-wider">
              <h2 className="text-xl md:text-2xl font-bold">
                {communityActivity?.attributes?.name}
              </h2>
              <div className="space-y-5 text-sm tracking-wide leading-relaxed">
                {parse(communityActivity?.attributes?.description)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
