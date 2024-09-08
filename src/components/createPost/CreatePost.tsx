import { Input } from "@/components/ui/input";
import { Card, CardHeader } from "../ui/card";
import { Button } from "../ui/button";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const CreatePost = () => {
    const [content, setContent] = useState<string>('Sample Content')
    const [title, setTitle] = useState<string>('Sample Title')
    // const { editor } = useCurrentEditor()

    async function postHandler() {
        
    }
  return (
    <Card>
    <CardHeader className="flex flex-row items-center gap-4 justify-between">
      <Avatar>
        <AvatarImage src="/placeholder-user.jpg" alt="@username" />
        <AvatarFallback>UN</AvatarFallback>
      </Avatar>
      <div className = "flex flex-col w-full gap-6">
        <Input placeholder="Post Title" onChange={(event) => {
            setTitle(event.target.value)
        }}/>
        <Textarea placeholder="Post Content" onChange = {(event) => {
            setContent(event.target.value);
        }}/>
        <Button className = "place-self-end w-1/6">Post</Button>
      </div>
    </CardHeader>
  </Card>
  )
}

export default CreatePost;