type VennCirclesProps = {
  className?: string;
  labels?: { ops: string; build: string; scale: string };
};

export default function VennCircles({ className, labels }: VennCirclesProps) {
  return (
    <svg
      viewBox="0 0 480 420"
      className={className}
      role="img"
      aria-label={labels ? `${labels.ops}, ${labels.build}, ${labels.scale}` : undefined}
      aria-hidden={labels ? undefined : true}
    >
      <circle cx="200" cy="180" r="140" fill="#1B4D4A" fillOpacity="0.55" />
      <circle cx="290" cy="180" r="140" fill="#8A5A2B" fillOpacity="0.55" />
      <circle cx="245" cy="270" r="140" fill="#463A66" fillOpacity="0.55" />
      {labels && (
        <>
          <text x="140" y="130" textAnchor="middle" fill="#F5F6F8" fontSize="22" fontWeight="700">
            {labels.ops}
          </text>
          <text x="350" y="130" textAnchor="middle" fill="#F5F6F8" fontSize="22" fontWeight="700">
            {labels.build}
          </text>
          <text x="245" y="360" textAnchor="middle" fill="#F5F6F8" fontSize="22" fontWeight="700">
            {labels.scale}
          </text>
        </>
      )}
    </svg>
  );
}
