import Image, { StaticImageData } from "next/image";
import Typography from "@/app/_components/atoms/typography";
import ExampleImage from "@/app/assets/img/image.png";

export default function ImageCard({
  data,
}: {
  data: {
    author: string;
    title: string;
    description: string;
    imageUrl: StaticImageData;
  };
}) {
  return (
    <div className="group relative overflow-hidden rounded-lg h-64 w-64">
      <Image
        src={ExampleImage}
        alt="GPT bot reading"
        className="w-full rounded-lg"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute inset-0 flex flex-col justify-between p-4">
          <div className="flex items-center">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary py-2 text-sm font-bold text-light">
              {data.author.charAt(0)}
            </div>
            <Typography type="helper"> By {data.author}</Typography>
          </div>

          <div className="space-y-1">
            <div className="flex items-center justify-between truncate pr-2">
              <Typography type="primary">{data.title}</Typography>
              <svg
                className="h-6 w-6 flex-shrink-0 border-primary text-white hover:fill-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                ></path>
              </svg>
            </div>
            <div className="line-clamp-1">
              <Typography type="secondary">{data.description}</Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
