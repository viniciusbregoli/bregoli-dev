// app/components/home/education/EducationLogo.tsx
import Image from 'next/image';

interface EducationLogoProps {
  logo: string;
  institution: string;
}

export default function EducationLogo({ logo, institution }: EducationLogoProps) {
  return (
    <div className="flex-shrink-0 flex justify-center mb-4 md:mb-0 md:mr-6">
      <div className="w-20 h-20 bg-white dark:bg-gray-700 rounded-lg flex items-center justify-center shadow-sm p-2">
        <div className="relative w-full h-full">
          <Image
            src={logo}
            alt={institution}
            fill
            style={{ objectFit: 'contain' }}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = '/api/placeholder/80/80';
            }}
          />
        </div>
      </div>
    </div>
  );
}
