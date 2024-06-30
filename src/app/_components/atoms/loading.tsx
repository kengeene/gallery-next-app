export default function Loading({variant}: {variant: string}) {
    switch (variant) {
      case "accent":
        return (
         <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-light" />
        );
      case "secondary":
        return (
          <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-secondary" />
        );
      case "primary":
      default:
        return (
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-primary" />
        );
    }
}