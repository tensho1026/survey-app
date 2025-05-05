
type Poll = {
  title:string;
  description:string
}

type Props = {
  poll:Poll
}

function PollCard({poll}:Props) {
  return (
    <div>
    
        <div className='border rounded-lg p-4 hover:bg-gray-50 transition-colors'>
          <div className='flex justify-between items-start'>
            <h2 className='text-xl font-semibold'>{poll.title}</h2>
          </div>
          <p className='text-gray-600 mt-1'>{poll.description}</p>
        </div>
      
    </div>
  );
}

export default PollCard;
