import ActivityItem from './ActivityItem';

export default function ActivityItemList() {
  return (
    <div className="flex items-center gap-20">
      <ActivityItem text="MEET UP & HACKALEARN" />
      <ActivityItem text="WORKSHOP & PELATIHAN IT" />
      <ActivityItem text="KOLABORASI" />
      <ActivityItem text="PENGABDIAN SOSIAL" />
    </div>
  );
}
