import Link from "next/link";
import { NavigationMenuItem, NavigationMenuContent, NavigationMenuTrigger, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { MenuListData } from "../navbar.types";

export type MenuListProps = {
  data: MenuListData;
  label: string;
};

export function MenuList({ data, label }: MenuListProps) {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className="font-normal px-3">{label}</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid gap-3 p-4 w-[400px] md:w-[500px] lg:w-[600px] md:grid-cols-2">
          {data.map((item) => (
            <li key={item.id}>
              <Link href={item.url ?? "/"} passHref>
                <NavigationMenuLink className="block p-3 space-y-1 rounded-md text-sm font-medium leading-none hover:bg-accent hover:text-accent-foreground">
                  <div>{item.label}</div>
                  {item.description && <p className="text-sm text-muted-foreground">{item.description}</p>}
                </NavigationMenuLink>
              </Link>
            </li>
          ))}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
}
