import Link from "next/link";

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

export default function HomePage() {
  return (
    <main>
      <div className="flex flex-wrap gap-5"> {
        [...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48 p-4">
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
      Hello (Gallery in progress)
    </main>
  );
}
