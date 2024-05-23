import Link from "next/link";
import  { db } from "~/server/db";

const mockURLS = [
  "https://utfs.io/f/8b91abcc-82c2-46e0-9897-705e5c080b57-p9gfu1.jpeg",
  "https://utfs.io/f/8b91abcc-82c2-46e0-9897-705e5c080b57-p9gfu1.jpeg",
  "https://utfs.io/f/8b91abcc-82c2-46e0-9897-705e5c080b57-p9gfu1.jpeg",
  "https://utfs.io/f/8b91abcc-82c2-46e0-9897-705e5c080b57-p9gfu1.jpeg"
];

const mockImages = mockURLS.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  console.log(posts);

  return (
    <main>
      <div className="flex flex-wrap gap-5"> 
        { posts.map((post) => (
          <div key={post.id}> {post.name} </div>
        ))}
        {[...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + "-" + index} className="w-48 p-4">
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
      Hello (Gallery in progress)
    </main>
  );
}
