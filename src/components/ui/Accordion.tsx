import * as Accordion from "@radix-ui/react-accordion";

export default function RAccordion() {
  return (
    <Accordion.Root
      type="single"
      collapsible
      className="w-full max-w-xl mx-auto border border-gray-200 rounded-lg"
    >
      <Accordion.Item value="item-1" className="border-b border-gray-200">
        <Accordion.Header>
          <Accordion.Trigger className="group flex w-full items-center justify-between p-4 text-left text-gray-800 hover:bg-gray-50 focus:outline-none">
            <span className="font-medium">Section 1</span>
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className="px-4 pb-4 text-sm text-gray-600 data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown">
          This is the content for section 1.
        </Accordion.Content>
      </Accordion.Item>

      <Accordion.Item value="item-2" className="border-b border-gray-200">
        <Accordion.Header>
          <Accordion.Trigger className="group flex w-full items-center justify-between p-4 text-left text-gray-800 hover:bg-gray-50 focus:outline-none">
            <span className="font-medium">Section 2</span>
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className="px-4 pb-4 text-sm text-gray-600 data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown">
          This is the content for section 2.
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
}
