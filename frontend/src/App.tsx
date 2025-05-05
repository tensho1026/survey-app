import "./App.css";
import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";
import PollCard from "./components/PollCard";
import CreatePoll from "./pages/CreatePoll";

function App() {
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
    {
      id: 3,
      title: "リモートワークポリシー",
      description: "今後のリモートワークポリシーについての意見を集めています。",
    },
    {
      id: 4,
      title: "社内ツールの選定",
      description: "新しい社内コミュニケーションツールの選定に関する投票です。",
    },
    {
      id: 5,
      title: "福利厚生の改善案",
      description: "福利厚生の改善案についてのアイデアを募集しています。",
    },
  ];
  return (
    <Router>
      <div className='max-w-4xl mx-auto py-8 px-4'>
        <div className='flex justify-between items-center mb-8'>
          <h1 className='text-3xl font-bold'>投票一覧</h1>
          <Link to="create">
          <button className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded'>
            新規投票作成
          </button>
          </Link>
        </div>

        <div className='space-y-4'>
          {polls.map((poll) => (
              <Link to={`/polls/${poll.id}`} key={poll.id} className='block'>
                <PollCard poll={poll}/>
              </Link>
          ))}
        </div>
      </div>
      <Routes>
        {/* ここに今後 /polls/:id の詳細ページコンポーネントを追加 */}
        <Route path="/create" element={<CreatePoll />} />
      </Routes>
    </Router>
  );
}

export default App;
