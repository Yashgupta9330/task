import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function InputWithLabel({place}) {
  return (
    <div className="grid w-full items-center gap-1.5">
      <Label htmlFor="email" className="font-bold text-[16px] leading-[24px] text-[#000000]">{place}</Label>
      <Input type="email" id="email" placeholder=""  className="h-[50px]"/>
    </div>
  )
}
