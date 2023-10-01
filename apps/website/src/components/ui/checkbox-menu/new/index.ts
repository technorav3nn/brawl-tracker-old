import { DropdownMenu as DropdownMenuPrimitive } from "bits-ui";
import MenuContent from "./MenuContent.svelte";
import MenuItem from "./MenuItem.svelte";
import MenuItemGroup from "./MenuItemGroup.svelte";
import MenuItemGroupLabel from "./MenuItemGroupLabel.svelte";
import MenuLabel from "./MenuLabel.svelte";
import Root from "./MenuRoot.svelte";

const Sub = DropdownMenuPrimitive.Sub;
const Trigger = DropdownMenuPrimitive.Trigger;
const Group = DropdownMenuPrimitive.Group;

export {
	Group,
	MenuContent as Content,
	MenuItem as Item,
	MenuItemGroup as ItemGroup,
	MenuItemGroupLabel as ItemGroupLabel,
	MenuLabel as Label,
	Root,
	Sub,
	Trigger,
};
