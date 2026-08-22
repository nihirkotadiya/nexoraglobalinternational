import {
  Wheat,
  Coffee,
  Shirt,
  Factory,
  FlaskConical,
  Cog,
  Hammer,
  ShoppingBag,
  Globe2,
  PackageSearch,
  Ship,
  ClipboardList,
  BadgeCheck,
  Truck,
  FileText,
  Network,
  MessagesSquare,
  Search,
  PackageCheck,
} from "lucide-react";

export interface IconProps {
  className?: string;
  strokeWidth?: number;
}

/**
 * Renders one of a known, fixed set of icons by name. Implemented as a
 * switch over literal JSX tags (rather than selecting a component
 * reference to use as a dynamic tag) so icon identity stays statically
 * analyzable for the React Compiler.
 */
export function renderIcon(name: string, props: IconProps = {}) {
  switch (name) {
    case "Wheat":
      return <Wheat {...props} />;
    case "Coffee":
      return <Coffee {...props} />;
    case "Shirt":
      return <Shirt {...props} />;
    case "Factory":
      return <Factory {...props} />;
    case "FlaskConical":
      return <FlaskConical {...props} />;
    case "Cog":
      return <Cog {...props} />;
    case "Hammer":
      return <Hammer {...props} />;
    case "ShoppingBag":
      return <ShoppingBag {...props} />;
    case "PackageSearch":
      return <PackageSearch {...props} />;
    case "Ship":
      return <Ship {...props} />;
    case "ClipboardList":
      return <ClipboardList {...props} />;
    case "BadgeCheck":
      return <BadgeCheck {...props} />;
    case "Truck":
      return <Truck {...props} />;
    case "FileText":
      return <FileText {...props} />;
    case "Network":
      return <Network {...props} />;
    case "MessagesSquare":
      return <MessagesSquare {...props} />;
    case "Search":
      return <Search {...props} />;
    case "PackageCheck":
      return <PackageCheck {...props} />;
    case "Globe2":
    default:
      return <Globe2 {...props} />;
  }
}
