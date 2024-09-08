import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import logo from "../assets/logo.png";
import { Link } from 'react-router-dom'

type Role = 'Student' | 'Alumni';

const universityIds: number[] = [1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010];

const SignUpPage: React.FC = () => {
  const [role, setRole] = useState<Role>('Student');

  return (
    <div className="md:flex">
        <div className='w-1/2 hidden md:flex items-center justify-center h-screen'>
            <img 
            src={logo}
            className='size-3/4 object-contain'
            ></img>

        </div>
    <div className="container w-1/2 mx-auto flex items-center justify-start min-h-screen py-8">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Sign Up</CardTitle>
          <CardDescription className="text-center">Join our alumni network today</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Enter your full name" required />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email address" required />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="Create a password" required />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirm Password</Label>
                <Input id="confirm-password" type="password" placeholder="Confirm your password" required />
              </div>
              
              <div className="space-y-2">
                <Label>Role</Label>
                <div className="flex space-x-4">
                  <Button
                    className={`flex-1 hover:text-white ${role === 'Student' ? 'border-2 border-black bg-white text-black' : 'bg-white text-black'}`}
                    onClick={() => setRole('Student')}
                  >
                    Student
                  </Button>
                  <Button
                    className={`flex-1  hover:text-white ${role === 'Alumni' ? 'border-2 border-black bg-white text-black' : 'bg-white text-black'}`}
                    onClick={() => setRole('Alumni')}
                  >
                    Alumni
                  </Button>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="university_id">University ID</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your university ID" />
                  </SelectTrigger>
                  <SelectContent>
                    {universityIds.map((id) => (
                      <SelectItem key={id} value={id.toString()}>
                        {id}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <Link to="/">
            <Button className="w-full">Sign Up</Button>
          </Link>
          <p className="text-sm text-center text-muted-foreground">
            Already have an account?{' '}
            <a href="/login" className="text-primary hover:underline">
              Log in
            </a>
          </p>
        </CardFooter>
      </Card>
    </div>
    </div>
  );
};

export default SignUpPage;
