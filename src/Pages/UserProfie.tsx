
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {  MapPin, Briefcase, Mail, Link as LinkIcon, MessageSquare, UserPlus, Share2, Bell } from "lucide-react";
import Navigation from "@/components/navigation/Navigation";

export default function UserProfile() {
  return (<>
    <Navigation/>
    <div className="container px-6 mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center">
                <Avatar className="w-32 h-32">
                  <AvatarImage src="/placeholder-user.jpg" alt="John Doe" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <h1 className="mt-4 text-2xl font-bold">John Doe</h1>
                <p className="text-muted-foreground">Software Engineer</p>
                <div className="flex mt-4 space-x-2">
                  <Badge>Class of 2018</Badge>
                  <Badge variant="secondary">Computer Science</Badge>
                </div>
              </div>
              <div className="mt-6 space-y-4">
                <Button className="w-full">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Message
                </Button>
                <Button variant="outline" className="w-full">
                  <UserPlus className="mr-2 h-4 w-4" />
                  Connect
                </Button>
              </div>
              <div className="mt-6 space-y-2">
                <div className="flex items-center text-sm">
                  <Briefcase className="mr-2 h-4 w-4" />
                  <span>Google</span>
                </div>
                <div className="flex items-center text-sm">
                  <MapPin className="mr-2 h-4 w-4" />
                  <span>San Francisco, CA</span>
                </div>
                <div className="flex items-center text-sm">
                  <Mail className="mr-2 h-4 w-4" />
                  <a href="mailto:john.doe@example.com">john.doe@example.com</a>
                </div>
                <div className="flex items-center text-sm">
                  <LinkIcon className="mr-2 h-4 w-4" />
                  <a href="https://johndoe.com" target="_blank" rel="noopener noreferrer">
                    johndoe.com
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="md:col-span-2">
          <Tabs defaultValue="about">
            <TabsList>
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="activity">Activity</TabsTrigger>
              <TabsTrigger value="connections">Connections</TabsTrigger>
            </TabsList>
            <TabsContent value="about" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>About Me</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Passionate software engineer with 5 years of experience in full-stack development. 
                    Graduated from [University Name] in 2018 with a degree in Computer Science. 
                    Currently working at Google, focusing on cloud infrastructure and scalability.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Experience</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold">Software Engineer</h3>
                    <p className="text-sm text-muted-foreground">Google • 2020 - Present</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Junior Developer</h3>
                    <p className="text-sm text-muted-foreground">Tech Startup • 2018 - 2020</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Education</CardTitle>
                </CardHeader>
                <CardContent>
                  <div>
                    <h3 className="font-semibold">Bachelor of Science in Computer Science</h3>
                    <p className="text-sm text-muted-foreground">[University Name] • Class of 2018</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Skills</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className='space-y-4'>
                        <div>
                            <h3 className="font-semibold">Web Development</h3>
                            <ul className="flex flex-wrap space-x-4 text-sm text-muted-foreground">
                            <li>HTML</li>
                            <li>TailwindCSS</li>
                            <li>React</li>
                            <li>NodeJs</li>
                            <li>Express</li>
                            <li>JavaScript</li>
                            <li>NextJs</li>
                            <li>MongoDB</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold">Programming</h3>
                            <ul className="flex flex-wrap space-x-4 text-sm text-muted-foreground">
                            <li>Java</li>
                            <li>C++</li>
                            <li>C</li>
                            <li>Kafka</li>
                            <li>Python</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold">Other</h3>
                            <ul className="flex flex-wrap space-x-4 text-sm text-muted-foreground">
                            <li>AWS</li>
                            <li>Docker</li>
                            <li>Kubernetes</li>
                            <li>GraphQL</li>
                            <li>Git</li>
                            </ul>
                        </div>
                        
                    </div>
                </CardContent>
              </Card>

              <Card className="my-4">
                <CardHeader>
                    <CardTitle>Project Name</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>
                    A brief description of the project. This project focuses on building a
                    dynamic user interface with React and integrates a backend using Node.js
                    and MongoDB.
                    </p>
                    <div className="flex mt-4 space-x-4">
                    <a
                        href="https://github.com/username/project-repo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-blue-500 hover:underline"
                    >
                        
                        GitHub Repository
                    </a>
                    </div>
                    <div className="mt-4">
                    <h3 className="font-semibold">Skills Used</h3>
                    <ul className="flex flex-wrap space-x-3 mt-2">
                        <li className="badge">React</li>
                        <li className="badge">Node.js</li>
                        <li className="badge">MongoDB</li>
                        <li className="badge">JavaScript</li>
                        <li className="badge">Tailwind CSS</li>
                    </ul>
                    </div>
                </CardContent>
                </Card>
            </TabsContent>

            <TabsContent value="activity" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <Avatar className="mt-1">
                      <AvatarImage src="/placeholder-user.jpg" alt="John Doe" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">John Doe posted an update</p>
                      <p className="text-sm text-muted-foreground">
                        Excited to announce that I'll be speaking at the upcoming AlumniTech Conference!
                      </p>
                      <div className="mt-2 flex items-center space-x-2">
                        <Button variant="ghost" size="sm">
                          <MessageSquare className="mr-2 h-4 w-4" />
                          Comment
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Share2 className="mr-2 h-4 w-4" />
                          Share
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Avatar className="mt-1">
                      <AvatarImage src="/placeholder-user.jpg" alt="John Doe" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">John Doe updated their job information</p>
                      <p className="text-sm text-muted-foreground">
                        Now working as a Software Engineer at Google
                      </p>
                      <div className="mt-2 flex items-center space-x-2">
                        <Button variant="ghost" size="sm">
                          <MessageSquare className="mr-2 h-4 w-4" />
                          Comment
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Share2 className="mr-2 h-4 w-4" />
                          Share
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="connections" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Connections</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <div key={i} className="flex items-center space-x-4">
                        <Avatar>
                          <AvatarImage src={`/placeholder-user-${i}.jpg`} alt={`User ${i}`} />
                          <AvatarFallback>U{i}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">User {i}</p>
                          <p className="text-sm text-muted-foreground">Class of 201{i + 2}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
    </>
  )
}
