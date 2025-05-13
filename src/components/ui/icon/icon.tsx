import { IconName, iconRegistry } from './iconRegistry';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName;
  size?: number;
}

export default function Icon({ name, size = 16, ...props }: IconProps) {
  const SvgIcon = iconRegistry[name];

  if (!SvgIcon) return null;

  return <SvgIcon width={size} height={size} {...props} />;
}
