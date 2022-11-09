import Post from './Post';

export default function Posts() {
  const posts = [
    {
      id: '1',
      username: 'username',
      userImg: '/images/profile.svg',
      img: 'https://images.unsplash.com/photo-1667346759402-24936821b2d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2064&q=80',
      caption: 'Mensagem legal aqui!',
    },
    {
      id: '2',
      username: 'username2',
      userImg: '/images/profile.svg',
      img: 'https://images.unsplash.com/photo-1667346697446-139e30b75c91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2064&q=80',
      caption: 'Mensagem legal aqui! 2',
    },
  ];
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
}
