import "./loader.css";

interface LoaderProps {
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * Loader type
   */
  className?: "simple" | "complex";
}

/**
 * Primary UI component for user interaction
 */
export const Loader = ({
  backgroundColor,
  className = "simple",
  ...props
}: LoaderProps) => {
  return (
    <span
      className={className}
      style={{ background: backgroundColor || "white" }}
      {...props}
    ></span>
  );
};
