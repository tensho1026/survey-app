// src/pages/Home.tsx
import { Link } from "react-router-dom";
import PollCard from "../components/PollCard";

const polls = [
  {
    id: 1,
    title: "次回の社内イベントについて",
    description: "次回の社内イベントのテーマを決めるための投票です。",
  },
  {
    id: 2,
    title: "新しいオフィスの場所",
    description: "新しいオフィスの候補地について意見を募集しています。",
  },
  // ...他のデータも同様
];

export default function Home() {
  return (
    <div className='max-w-4xl mx-auto py-8 px-4'>
      <div className='flex justify-between items-center mb-8'>
        <h1 className='text-3xl font-bold'>投票一覧</h1>
        <Link to='/login'>
          <button className='bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded'>
            ログイン
          </button>
        </Link>
        <Link to='/create'>
          <button className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded'>
            新規投票作成
          </button>
        </Link>
      </div>
      <div className='space-y-4'>
        {polls.map((poll) => (
          <Link to={`/polls/${poll.id}`} key={poll.id} className='block'>
            <PollCard poll={poll} />
          </Link>
        ))}
      </div>
    </div>
  );
}
