import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { useState } from "react";

export function InputFile() {

 const  [selectedImage, setSelectedImage] = useState(null);
 const [imagePreviewUrl, setImagePreviewUrl] = useState('');

 const handleImageChange = (event:any) => {
      const file = event.target.files[0]; // Get the first selected file
      if (file) {
        setSelectedImage(file);
        const url = URL.createObjectURL(file)
        setImagePreviewUrl(url); // Create a temporary URL for preview
      }
    };

  return (
    <div className="flex items-center max-w-sm gap-3">
      <Input type="file" accept="image/*" onChange={handleImageChange} className="bg-gray-200 border-2 border-gray-100 cursor-pointer shadow-md"/>

       {
        imagePreviewUrl!==""?<img src={imagePreviewUrl} className="h-8 w-8 rounded-full" />:null
      }
       
    </div>
  )
}
