import { Link } from 'react-router-dom'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Bell, MessageSquare } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import logo from "../../assets/logo.png";

const Navigation = () => {
  return (
    <header className="border-b">
        <div className="container mx-auto flex items-center justify-between py-4 flex-col lg:flex-row space-y-4 lg:space-y-0">
          <div className="flex items-center space-x-4">
            {/* Replace Next.js Link with React Router Link */}
            <Link to="/"><img src = {logo} className = "h-[30px]" /></Link>
            <Input className="w-full sm:w-64" placeholder="Search AlumniConnect" type="search" />
          </div>
          <nav className="flex items-center space-x-2 flex-wrap justify-center">
            <Button variant="ghost">Home</Button>
            <Button variant="ghost">Network</Button>
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
            <Avatar>
              <AvatarImage src="/placeholder-user.jpg" alt="@username" />
              <AvatarFallback>UN</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>
  )
}

export default Navigation