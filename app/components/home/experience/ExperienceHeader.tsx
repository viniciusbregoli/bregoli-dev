// app/components/home/experience/ExperienceHeader.tsx

interface ExperienceHeaderProps {
  company: string;
  position: string;
}

export default function ExperienceHeader({ company, position }: ExperienceHeaderProps) {
  return (
    <div>
      <h3 className="text-xl font-bold text-foreground">{company}</h3>
      <h4 className="text-sm text-primary mt-0.5 font-medium">{position}</h4>
    </div>
  );
}
