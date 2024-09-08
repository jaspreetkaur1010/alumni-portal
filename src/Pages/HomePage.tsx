import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { ArrowUpIcon, ArrowDownIcon, MessageSquare, Share2, BookmarkIcon, MoreHorizontal, Bell } from "lucide-react";
import { Link } from "react-router-dom";

export default function Component() {
  return (
    <div className="min-h-screen px-4 bg-background">
      <header className="border-b">
        <div className="container mx-auto flex items-center justify-between py-4 flex-col lg:flex-row space-y-4 lg:space-y-0">
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-2xl font-bold">AlumniConnect</Link>
            <Input className="w-full sm:w-64" placeholder="Search AlumniConnect" type="search" />
          </div>
          <nav className="flex items-center space-x-2 flex-wrap justify-center">
            <Link to={"/"}>
              <Button variant="ghost">Home</Button>
            </Link>
            <Link to={"/network"}>
              <Button variant="ghost">Network</Button>
            </Link>
            <Button variant="ghost">Events</Button>
            <Button variant="ghost">Jobs</Button>
            <Button variant="ghost">Referrals</Button>
            <Button variant="ghost">Companies</Button>
            <Button variant="ghost">Projects</Button>
          </nav>
          <div className="flex items-center space-x-4">
            <Link to="/message">
              <Button className="ml-2" variant="ghost">
                <MessageSquare className="h-5 w-5" />
              </Button>
            </Link>
            <Button size="icon" variant="ghost">
              <Bell className="h-5 w-5" />
            </Button>
            <Link to={"/userprofile"}>
              <Avatar>
                <AvatarImage src="/placeholder-user.jpg" alt="@username" />
                <AvatarFallback>UN</AvatarFallback>
              </Avatar>
            </Link>
          </div>
        </div>
      </header>
      <main className="container mx-auto flex flex-col lg:flex-row gap-6 py-8">
        <div className="w-full lg:w-2/3 space-y-6">
          {/* Post 1 */}
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <Avatar>
                <AvatarImage src="/placeholder-user.jpg" alt="@username" />
                <AvatarFallback>UN</AvatarFallback>
              </Avatar>
              <Input placeholder="Create a post" />
              <Button>Post</Button>
            </CardHeader>
          </Card>
          {/* Post 2 */}
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
          {/* Post 3 */}
          <Card>
            <CardHeader className="flex flex-row items-start gap-4">
              <div className="flex flex-col items-center">
                <Button size="icon" variant="ghost">
                  <ArrowUpIcon className="h-5 w-5" />
                </Button>
                <span className="text-sm font-bold">64</span>
                <Button size="icon" variant="ghost">
                  <ArrowDownIcon className="h-5 w-5" />
                </Button>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <Avatar className="h-6 w-6">
                    <AvatarImage src="/placeholder-user2.jpg" alt="@username" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <span className="text-sm font-medium">Posted by @janedoe</span>
                  <span className="text-sm text-muted-foreground">5 hours ago</span>
                </div>
                <h3 className="text-lg font-bold mt-2">Thrilled to be a part of an exciting new project!</h3>
              </div>
            </CardHeader>
            <CardContent>
              <p>
                I’m joining an innovative startup that’s working on groundbreaking technology! I can’t wait to dive in and start making an impact. Thanks to the community for all the support during my job search.
              </p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="flex gap-4">
                <Button variant="ghost" size="sm">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  12 Comments
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
          {/* Add more posts similarly */}
        </div>

        <div className="w-full lg:w-1/3 space-y-6">
          <Card>
            <CardHeader>
              <h3 className="text-lg font-bold">Join a Community</h3>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              <Button className="w-full md:w-auto">Tech-Industry</Button>
              <Button className="w-full md:w-auto">Study Abroad</Button>
              <Button className="w-full md:w-auto">Entrepreneurship</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <h3 className="text-lg font-bold">Trending Topics</h3>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>
                  <Link to="#" className="text-sm hover:underline">#AlumniMeetup2023</Link>
                </li>
                <li>
                  <Link to="#" className="text-sm hover:underline">#CareerAdvice</Link>
                </li>
                <li>
                  <Link to="#" className="text-sm hover:underline">#ClassReunion</Link>
                </li>
                <li>
                  <Link to="#" className="text-sm hover:underline">#MentorshipProgram</Link>
                </li>
                <li>
                  <Link to="#" className="text-sm hover:underline">#AlumniReferrals</Link>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
