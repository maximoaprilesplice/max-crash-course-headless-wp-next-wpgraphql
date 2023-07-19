import Link from "next/link";

export default function PostCard({ post }) {
  return (
    <Link className="card" href={post.uri}>
      <h3>{post.title} &rarr;</h3>
    </Link>
  );
}
