import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowUpIcon, ArrowDownIcon, MessageSquare, Share2, BookmarkIcon, MoreHorizontal} from "lucide-react";
import { Button } from "@/components/ui/button";
const Post = () => {
    return(
        <div className="w-full lg:w-full space-y-6">
          <Card>
            <CardHeader className="flex flex-row items-start gap-4">
              <div className="flex flex-col items-center">
                <Button size="icon" variant="ghost">
                  <ArrowUpIcon className="h-5 w-5" />
                </Button>
                <span className="text-sm font-bold">128</span>
                <Button size="icon" variant="ghost">
                  <ArrowDownIcon className="h-5 w-5" />
                </Button>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <Avatar className="h-6 w-6">
                    <AvatarImage src="/placeholder-user.jpg" alt="@username" />
                    <AvatarFallback>UN</AvatarFallback>
                  </Avatar>
                  <span className="text-sm font-medium">Posted by @johndoe</span>
                  <span className="text-sm text-muted-foreground">2 hours ago</span>
                </div>
                <h3 className="text-lg font-bold mt-2">Just landed my dream job thanks to our alumni network!</h3>
              </div>
            </CardHeader>
            <CardContent>
              <p>
                I'm excited to share that I've just accepted an offer from Google! A huge thank you to all the alumni who helped me prepare for the interviews and provided valuable insights. This community is amazing!
              </p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="flex gap-4">
                <Button variant="ghost" size="sm">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  24 Comments
                </Button>
                <Button variant="ghost" size="sm">
                  <Share2 className="mr-2 h-4 w-4" />
                  Share
                </Button>
                <Button variant="ghost" size="sm">
                  <BookmarkIcon className="mr-2 h-4 w-4" />
                  Save
                </Button>
              </div>
              <Button variant="ghost" size="sm">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        </div>
    )
}

export default Post;