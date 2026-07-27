import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group"
import Image from "next/image"

export default function SearchArea() {
  return (
    <div className="mx-auto mt-12 md:mt-16 max-w-3xl">
      <InputGroup className="mx-auto flex max-w-xl items-center gap-2 font-bold text-my-neutral-0 md:flex-row flex-col">
        <div className="flex h-12 flex-1 items-center rounded-xl bg-my-neutral-800 pl-4 w-full py-2 md:py-0">
          <InputGroupAddon align="inline-start">
            <Image
              src="/icon-search.svg"
              alt=""
              aria-hidden="true"
              width={20}
              height={20}
              className="opacity-70"
            />
          </InputGroupAddon>
          <InputGroupInput placeholder="Search for a place..." />
        </div>
        <InputGroupButton className="h-12 shrink-0 cursor-pointer rounded-xl bg-my-blue-500 px-6 font-bold transition-colors hover:bg-my-blue-700 hover:text-my-neutral-0 md:w-fit w-full">
          Search
        </InputGroupButton>
      </InputGroup>
    </div>
  )
}
