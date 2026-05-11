type AdBlockProps = {
  size?: "leaderboard" | "rectangle" | "in-content";
};

export function AdBlock({ size = "in-content" }: AdBlockProps) {
  return (
    <aside className={`ad-block ad-block--${size}`} aria-label="Advertisement">
      <span>Advertisement</span>
      {/*
        Connect Google AdSense, Mediavine Journey, Raptive, or Ezoic tags here.
        Keep this component reusable so ad placements can be tuned without editing page content.
      */}
    </aside>
  );
}
