import IconSun from "/images/icon-sun.svg";
import IconMoon from "/images/icon-moon.svg";

export const themeConfig = {
    light: {
        name: "light",
        layout: {
            heroClass: "theme-light",
            backgroundColor: "bg-soft-lavender",
            textColor: "text-dark-grayish-blue"
        },
        todo: {
            backgroundColor: "bg-off-white",
            borderColor: "border-soft-lavender",
            textColor: "text-dark-grayish-blue"
        },
        filter: {
            textColor: "text-muted-gray",
            hover: "hover:text-dark-grayish-blue"
        },
        icon: IconMoon
    },

    dark: {
        name: "dark",
        layout: {
            heroClass: "theme-dark",
            backgroundColor: "bg-very-dark-blue",
            textColor: "text-muted-gray"
        },
        todo: {
            backgroundColor: "bg-dark-desaturated-blue",
            borderColor: "border-deep-navy",
            textColor: "text-light-lavender"
        },
        filter: {
            textColor: "text-desaturated-blue",
            hover: "hover:text-soft-lavender-hover"
        },
        icon: IconSun
    }
};

