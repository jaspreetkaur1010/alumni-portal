import { Input } from "@/components/ui/input";
import { Card, CardHeader } from "../ui/card";
import { Button } from "../ui/button";
import Tiptap from "../tiptap/Tiptap";
import { useState } from "react";
// import { useCurrentEditor } from "@tiptap/react";

const CreatePost = () => {
    const [content, setContent] = useState<string>('Sample Content')
    // const { editor } = useCurrentEditor()
  return (
        <Card className="lg:w-full">
            <CardHeader className="flex flex-col items-center gap-4">
              <Input type={`text`} placeholder="Title" />
              <Tiptap/>
              <Button onClick = {() => {
                console.log(content)
              }}>Post</Button>
            </CardHeader>
        </Card>
  )
}

export default CreatePost;