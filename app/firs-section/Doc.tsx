import { ViewVerticalIcon } from "@radix-ui/react-icons"

import { Button } from "@/components/ui/button"

export function ButtonWithIcon() {
  return (
    <Button size={'sm'} style={{backgroundColor: '#2f2e2f', color: '#ffffff'}}>

      <ViewVerticalIcon className="mr-2 h-4 w-4" /> Documantation
    </Button>
  )
}