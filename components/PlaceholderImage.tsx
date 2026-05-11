type PlaceholderImageProps = {
  label: string;
  variant?: "wide" | "vertical";
};

export function PlaceholderImage({ label, variant = "wide" }: PlaceholderImageProps) {
  return (
    <div className={`image-placeholder image-placeholder--${variant}`} role="img" aria-label={label}>
      <span>{label}</span>
    </div>
  );
}
