import Image from 'next/image'
import ExampleImage from '@/app/assets/img/image.png'

export default function ImageCard() {
  return (
    <div className="relative">
      <Image
        src={ExampleImage}
        alt="GPT bot reading"
        className="w-full rounded-lg"
        width={266}
        height={100}
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-secondary text-xs font-bold text-light">
              P
            </div>
            <p className="ml-2 text-sm text-light">By Patrick</p>
          </div>
          <svg
            className="h-6 w-6 text-light"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          />
        </div>
        <p className="mt-2 text-sm text-light">GPT bot reading</p>
        <p className="text-xs text-gray-400">Image generated from DALL-E...</p>
      </div>
    </div>
  );
}
