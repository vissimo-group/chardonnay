import React from 'react'

export type IconProps = {
  color?: string;
  size?: number;
  autoSize?: boolean;
  svgProps?: React.SVGProps<SVGSVGElement> & { width?: string };
} & Omit<React.HTMLProps<HTMLSpanElement>, 'color' | 'size'>;

