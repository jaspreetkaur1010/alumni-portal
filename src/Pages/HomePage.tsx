import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Link } from "react-router-dom"; // Import from react-router-dom instead of next/link
import Post from "@/components/post/Post";
import CreatePost from "@/components/createPost/CreatePost";
import Navigation from "@/components/navigation/Navigation";

export default function Component() {
  return (
  <>
  <Navigation />
    <div className="min-h-screen px-4 bg-background">
      <main className="container mx-auto flex flex-col lg:flex-row gap-6 py-6">
        <div className = "gap-6 flex flex-col lg:w-2/3">
        <CreatePost />
        <Post />
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
    </>
  );
}
