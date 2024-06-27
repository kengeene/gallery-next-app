export default function IconBackground({children}: {children: any}) {
  return (
    <>
      <svg
        className="h-6 w-6 text-secondary"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        {children}
      </svg>
    </>
  );
}
