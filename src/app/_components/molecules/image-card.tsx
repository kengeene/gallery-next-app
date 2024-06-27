import Image from 'next/image'
import ExampleImage from '@/app/assets/img/image.png'
import Typography from '@/app/_components/atoms/typography'

export default function ImageCard() {
  return (
    <div className="group relative overflow-hidden rounded-lg">
      <Image
        src={ExampleImage}
        alt="GPT bot reading"
        className="w-full rounded-lg"
        width={266}
        height={100}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute inset-0 flex flex-col justify-between p-4">
          <div className="flex items-center">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-sm font-bold text-light">
              P
            </div>
            <Typography type="helper"> By Patrick</Typography>
          </div>

          <div className="space-y-1">
            <Typography type="primary">GPT bot reading</Typography>
            <Typography type="secondary">Image generated from DALL-E...</Typography>
          </div>
        </div>

        <div className="absolute right-4 top-4">
          <svg
            className="h-6 w-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
}
