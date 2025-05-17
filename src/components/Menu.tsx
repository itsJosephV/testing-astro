import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

export default function Menu() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="bg-gray-200 px-4 py-2 rounded">
        Menu
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className="bg-white border shadow-md rounded p-2">
        <DropdownMenu.Item className="hover:bg-gray-100 p-2">
          Item 1
        </DropdownMenu.Item>
        <DropdownMenu.Item className="hover:bg-gray-100 p-2">
          Item 2
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
