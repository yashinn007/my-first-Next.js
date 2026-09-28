import Link from "next/link";

const UsersPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  //console.log("posts:", posts);
  return (
    <div className="container mx-auto my-15">
      <h2 className="text-3xl font-bold text-center mb-7">
        This is Users page
      </h2>
      <div className="grid grid-cols-3 gap-4">
        {posts.map((post) => (
          <div key={post.id} className="card bg-cyan-600 text-primary-content">
            <div className="card-body">
              <h2 className="card-title">Post: {post.title}</h2>
              {/* <p>{post.body}</p> */}
              <div className="card-actions justify-end">
                <Link href={`/users/${post.id}`}>
                  <button className="btn">Buy Now</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersPage;
