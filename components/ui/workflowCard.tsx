import Image from 'next/image';
import { StaticImageData } from 'next/image';

interface WorkflowCardProps {
  image?: StaticImageData;
  title: string;
  description: string;
}

export default function WorkflowCard({ image, title, description }: WorkflowCardProps) {
  return (
    <div className="relative h-full">
      <div className="relative h-full rounded-3xl bg-gray-900 p-6 hover:bg-gray-800">
        {image && <div className="mb-4">
          <Image src={image} width={200} height={200} alt={title} />
        </div>}
        <h3 className="mb-2 font-semibold text-indigo-500">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
} 