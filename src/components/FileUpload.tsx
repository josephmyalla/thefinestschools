import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"

export function InputFile() {
  return (
    <div className="grid w-full max-w-sm items-center gap-3">
      <Label htmlFor="picture">Upload Students Picture</Label>
      <Input id="picture" type="file" className="bg-gray-200 border-2 border-gray-100 cursor-pointer shadow-md"/>
    </div>
  )
}
