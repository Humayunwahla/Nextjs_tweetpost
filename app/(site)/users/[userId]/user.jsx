import Image from "next/image"
import Tweet from "./tweet";


const User = ({ user }) => {
  console.log(user);
  
    return (
      <section className='my-6 mx-8 flex gap-20 center' >
        <div>
          <div className='relative h-40 w-40 rounded-full'>
            {user.imageUrl && (
              <Image
                src={user.imageUrl}
                alt={user.name ?? 'profile image'}
                className='inline-block rounded-full'
                fill
              />
            ) }
          </div>
          <h1 className='text-xl font-bold'>{user?.name}</h1>
          <p className='text-sm text-stone-400'>{user?.email}</p>
        </div>
        <div className='grow'>
          <ul>
            {user.tweets.map(tweet => (
              <Tweet key={tweet.id} tweet={tweet} />
            ))}
          </ul>
        </div>
      </section>
    )
  }
  export default User