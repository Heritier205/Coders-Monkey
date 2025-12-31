import clsx from "clsx";

interface Props {
  variant?:
    | "display"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "lead"
    | "body-lg"
    | "body-base"
    | "body-sm"
    | "caption1"
    | "caption2"
    | "caption3"
    | "caption4";
  component?: "h1" | "h2" | "h3" | "h4" | "h5" | "p" | "span" | "div";
  theme?: "black" | "gray" | "white" | "primary" | "secondary";
  weight?: "regular" | "medium";
  className?: string;
  children: React.ReactNode;
}

export const Typography = ({
  variant = "h3",
  component: Component = "div",
  theme = "black",
  weight = "regular",
  className,
  children,
}: Props) => {
  let variantStyle: String = "";

  switch (variant) {
    case "display":
      variantStyle = "text-red-500";
      break;
    case "h1":
      variantStyle = "text-green-500";
      break;
  }

  return (
    <Component className={clsx(variantStyle, weight ==="medium" && "font-medium" ,className)}>{children}</Component>
  );
};
