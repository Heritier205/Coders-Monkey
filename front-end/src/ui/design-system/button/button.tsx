import { IconProps } from "@/types/iconProps";
import clsx from "clsx";
import { Spiner } from "../spiner/spiner";

interface Props {
  size?: "small" | "medium" | "large";
  variant?: "accent" | "secondary" | "outline" | "disabled" | "ico";
  icon?: IconProps;
  iconTheme?: "accent" | "secondary" | "gray";
  iconPosition?: "left" | "right";
  disabled?: boolean;
  isLoading?: boolean;
  children?: React.ReactNode;
}

export const Button = ({
  size = "medium",
  variant = "accent",
  icon,
  iconTheme = "accent",
  iconPosition = "right",
  disabled,
  isLoading,
  children,
}: Props) => {
  let variantStyle: string = "",
    sizeStyle: string = "",
    iconSize: number = 0;

  switch (variant) {
    case "accent": // Default
      variantStyle = "bg-primary hover:bg-primary-400 text-white rounded";
      break;
    case "secondary":
      variantStyle =
        "bg-primary-200 hover:bg-primary-300/50 text-primary rounded";
      break;
    case "outline":
      variantStyle =
        "bg-white hover:bg-gray-400/50 border border-gray-500 text-gray-900 rounded";
      break;
    case "disabled":
      variantStyle =
        "bg-gray-400 border border-gray-500 text-gray-600 rounded cursor-not-allowed";
      break;
    case "ico":
      if (iconTheme === "accent") {
        variantStyle =
          "bg-primary hover:bg-primary-400 text-white rounded-full";
      }
      if (iconTheme === "secondary") {
        variantStyle =
          "bg-primary-200 hover:bg-primary-300/50 text-primary rounded-full";
      }
      if (iconTheme === "gray") {
        variantStyle = "bg-gray-700 hover:bg-gray-600 text-white rounded-full";
      }
      break;
  }

  switch (size) {
    case "small":
      sizeStyle = `text-caption3 font-medium ${icon && variant === "ico"
        ? "flex items-center justify-center w-[40px] h-[40px]"
        : "px-[14px] py-[10px]"
        }`;
      iconSize = 18;
      break;
    case "medium": // Default
      sizeStyle = `text-caption2 font-medium ${icon && variant === "ico"
        ? "flex items-center justify-center w-[50px] h-[50px]"
        : "px-[18px] py-[15px]"
        }`;
      iconSize = 20;
      break;
    case "large":
      sizeStyle = `text-caption1 font-medium ${icon && variant === "ico"
        ? "flex items-center justify-center w-[60px] h-[60px]"
        : "px-[22px] py-[18px]"
        }`;
      iconSize = 24;
      break;
  }

  return (
    <>
      <button
        type="button"
        className={clsx(
          variantStyle,
          iconSize,
          sizeStyle,
          isLoading && "cursor-wait",
          "relative"
        )}
        onClick={() => console.log("click")}
        disabled={disabled}
      >
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <Spiner
              size="small"
              variant={(variant === "accent" || (variant === "ico" && ["accent", "gray"].includes(iconTheme))) ? "white" : "primary"}
            />
          </div>
        )}
        <div
          className={clsx(isLoading && "invisible")}
        >
          {icon && variant === "ico" ? (
            <icon.icon size={iconSize} />
          ) : (
            <div
              className={clsx(
                icon && iconPosition && "flex gap-1 items-center"
              )}
            >
              {icon && iconPosition === "left" && <icon.icon size={iconSize} />}
              {children}
              {icon && iconPosition === "right" && (
                <icon.icon size={iconSize} />
              )}
            </div>
          )}
        </div>
      </button>
    </>
  );
};
