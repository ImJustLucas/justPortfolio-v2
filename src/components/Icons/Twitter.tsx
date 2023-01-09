import { IconTypes } from "@typesDef/icons";

import SOCIALS from "@constants/socials";

export const TwitterIcon = ({ color }: IconTypes) => {
  const handleClick = () => {
    window.open(SOCIALS.TWITTER, "_blank", "noopener,noreferrer");
  };
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={handleClick}
    >
      <g clip-path="url(#clip0_1_66)">
        <path
          d="M22.162 5.65599C21.3985 5.99368 20.589 6.21546 19.76 6.31399C20.6337 5.79142 21.2877 4.969 21.6 3.99999C20.78 4.48799 19.881 4.82999 18.944 5.01499C18.3146 4.34157 17.4804 3.89495 16.5709 3.74457C15.6615 3.59419 14.7279 3.74848 13.9153 4.18344C13.1026 4.6184 12.4564 5.30967 12.0771 6.14978C11.6978 6.98989 11.6067 7.93177 11.818 8.82899C10.1551 8.74564 8.52832 8.31351 7.04328 7.56065C5.55823 6.80779 4.24812 5.75104 3.19799 4.45899C2.82628 5.09744 2.63095 5.82321 2.63199 6.56199C2.63199 8.01199 3.36999 9.29299 4.49199 10.043C3.828 10.0221 3.17862 9.84277 2.59799 9.51999V9.57199C2.59819 10.5377 2.93236 11.4736 3.54384 12.221C4.15532 12.9685 5.00647 13.4815 5.95299 13.673C5.33661 13.84 4.6903 13.8646 4.06299 13.745C4.32986 14.5762 4.85 15.3032 5.55058 15.8241C6.25117 16.345 7.09712 16.6338 7.96999 16.65C7.10247 17.3313 6.10917 17.835 5.04687 18.1322C3.98458 18.4293 2.87412 18.5142 1.77899 18.382C3.69069 19.6114 5.91609 20.2641 8.18899 20.262C15.882 20.262 20.089 13.889 20.089 8.36199C20.089 8.18199 20.084 7.99999 20.076 7.82199C20.8949 7.23016 21.6016 6.49701 22.163 5.65699L22.162 5.65599Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_1_66">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
