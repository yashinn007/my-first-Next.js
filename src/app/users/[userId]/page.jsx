const UserDetailPage = async ({ params }) => {
  const { userId } = await params;
  //console.log(userId, "userId");

  // get single post data from API
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${userId}`,
  );
  const post = await res.json();
  return (
    <div className="container mx-auto py-15">
      <h2 className="text-3xl font-bold mb-7 text-center">
        This is user details page
      </h2>
      <h2 className="text-2xl mb-2">
        <span className="text-amber-400">Post:</span> {post.title}
      </h2>
      <p>Descripshon: {post.body}</p>
    </div>
  );
};

export default UserDetailPage;
