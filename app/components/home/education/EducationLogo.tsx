// app/components/home/education/EducationLogo.tsx
import Image from 'next/image';

interface EducationLogoProps {
  logo: string;
  institution: string;
}

export default function EducationLogo({ logo, institution }: EducationLogoProps) {
  return (
    <div className="shrink-0">
      <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center border border-line p-2">
        <div className="relative w-full h-full">
          <Image src={logo} alt={institution} fill style={{ objectFit: 'contain' }} />
        </div>
      </div>
    </div>
  );
}
