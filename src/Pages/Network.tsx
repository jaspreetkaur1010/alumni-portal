  import { useState } from "react";
  import { Link } from "react-router-dom";
  import { Button } from "@/components/ui/button";
  import { Input } from "@/components/ui/input";
  import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
  import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
  import { MessageSquare, UserPlus, Filter, Bell } from "lucide-react";
  
  export default function NetworkPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [searchSuggestedQuery, setSearchSuggestedQuery] = useState("");
    const [showAllSuggestions, setShowAllSuggestions] = useState(false);
  
    const connections = [
        { id: 1, name: "Alice Johnson", role: "Product Manager", company: "Apple", year: "2015" },
        { id: 2, name: "Bob Smith", role: "Software Engineer", company: "Microsoft", year: "2018" },
        { id: 3, name: "Carol Williams", role: "Data Scientist", company: "Amazon", year: "2017" },
        { id: 4, name: "David Brown", role: "UX Designer", company: "Google", year: "2016" },
        { id: 5, name: "Emily Davis", role: "Marketing Specialist", company: "Facebook", year: "2019" },
        { id: 6, name: "Frank Miller", role: "Cybersecurity Analyst", company: "IBM", year: "2020" },
        { id: 7, name: "Grace Lee", role: "Financial Analyst", company: "Goldman Sachs", year: "2014" },
        { id: 8, name: "Hannah Moore", role: "HR Manager", company: "Oracle", year: "2016" },
        { id: 9, name: "Isaac Taylor", role: "Frontend Developer", company: "Spotify", year: "2019" },
        { id: 10, name: "Jasmine Anderson", role: "Machine Learning Engineer", company: "NVIDIA", year: "2018" },
        { id: 11, name: "Kevin Thomas", role: "Cloud Architect", company: "AWS", year: "2021" },
        { id: 12, name: "Laura Wilson", role: "Content Strategist", company: "Salesforce", year: "2017" },
        { id: 13, name: "Michael Harris", role: "Operations Manager", company: "Intel", year: "2015" },
        { id: 14, name: "Nina Robinson", role: "Product Designer", company: "Adobe", year: "2018" },
        { id: 15, name: "Oscar Clark", role: "Database Administrator", company: "Oracle", year: "2019" },
        { id: 16, name: "Patricia Lewis", role: "Business Analyst", company: "SAP", year: "2020" },
        { id: 17, name: "Quincy Walker", role: "DevOps Engineer", company: "Red Hat", year: "2021" },
        { id: 18, name: "Rachel Hall", role: "Project Manager", company: "Cisco", year: "2016" },
        { id: 19, name: "Steven Allen", role: "Network Engineer", company: "Dell", year: "2017" },
        { id: 20, name: "Tina Young", role: "Digital Marketer", company: "HubSpot", year: "2019" }
      ];
  
    const suggestedConnections = [
      { id: 5, name: "Eva Martinez", role: "Marketing Manager", company: "Netflix", year: "2019" },
      { id: 6, name: "Frank Lee", role: "Financial Analyst", company: "Goldman Sachs", year: "2020" },
      { id: 7, name: "Grace Kim", role: "Project Manager", company: "Adobe", year: "2018" },
      { id: 8, name: "Henry Chen", role: "Software Developer", company: "Facebook", year: "2017" },
      { id: 9, name: "Ivy Davis", role: "Data Analyst", company: "LinkedIn", year: "2021" },
      { id: 10, name: "Jack Robinson", role: "Sales Manager", company: "Salesforce", year: "2019" },
      { id: 11, name: "Karen White", role: "Customer Success Manager", company: "HubSpot", year: "2022" },
      { id: 12, name: "Liam Black", role: "UX Researcher", company: "Adobe", year: "2021" },
      { id: 13, name: "Mia Clark", role: "Operations Manager", company: "Cisco", year: "2022" },
      { id: 14, name: "Noah Turner", role: "Product Designer", company: "Figma", year: "2023" },
      { id: 15, name: "Olivia Harris", role: "Cybersecurity Specialist", company: "Symantec", year: "2022" },
      { id: 16, name: "Paul Lewis", role: "Data Scientist", company: "Google", year: "2021" },
      { id: 17, name: "Quinn Morgan", role: "Cloud Engineer", company: "AWS", year: "2023" },
      { id: 18, name: "Rachel Evans", role: "Product Manager", company: "Atlassian", year: "2020" },
      { id: 19, name: "Samuel Adams", role: "Digital Marketer", company: "HubSpot", year: "2021" },
      { id: 20, name: "Tina Reed", role: "Business Analyst", company: "SAP", year: "2023" }
    ];
  
    const filteredConnections = connections.filter(connection =>
      connection.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      connection.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      connection.company.toLowerCase().includes(searchQuery.toLowerCase())
    );
  
    const filteredSuggestedConnections = suggestedConnections.filter(suggestion =>
      suggestion.name.toLowerCase().includes(searchSuggestedQuery.toLowerCase()) ||
      suggestion.role.toLowerCase().includes(searchSuggestedQuery.toLowerCase()) ||
      suggestion.company.toLowerCase().includes(searchSuggestedQuery.toLowerCase())
    );
  
    const displayedSuggestedConnections = showAllSuggestions ? filteredSuggestedConnections : filteredSuggestedConnections.slice(0, 8);
  
    return (
      <div className="container mx-auto px-4">
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
        <h1 className="text-3xl font-bold mb-6 pt-6">Your Network</h1>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-2/3">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Your Connections</CardTitle>
                  <Button variant="outline" size="sm">
                    <Filter className="mr-2 h-4 w-4" />
                    Filter
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <Input
                    type="search"
                    placeholder="Search your connections..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full"
                  />
                </div>
                <div className="space-y-4">
                  {filteredConnections.map((connection) => (
                    <div key={connection.id} className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <Avatar>
                          <AvatarImage src={`/placeholder-avatar-${connection.id}.jpg`} alt={connection.name} />
                          <AvatarFallback>{connection.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold">{connection.name}</p>
                          <p className="text-sm text-muted-foreground">{connection.role} at {connection.company}</p>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Link to={`/message`} className="no-underline">
                          <Button size="sm" variant="ghost">
                            <MessageSquare className="h-4 w-4 mr-2" />
                            Message
                          </Button>
                        </Link>
                        <Link to={`/userprofile`} className="no-underline">
                          <Button size="sm" variant="outline">
                            <UserPlus className="h-4 w-4 mr-2" />
                            View Profile
                          </Button>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="w-full md:w-1/3">
            <Card>
              <CardHeader>
                <CardTitle>Suggested Connections</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <Input
                    type="search"
                    placeholder="Search suggested connections..."
                    value={searchSuggestedQuery}
                    onChange={(e) => setSearchSuggestedQuery(e.target.value)}
                    className="w-full"
                  />
                </div>
                <div className="space-y-4">
                  {displayedSuggestedConnections.map((suggestion) => (
                    <div key={suggestion.id} className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <Avatar>
                          <AvatarImage src={`/placeholder-avatar-${suggestion.id}.jpg`} alt={suggestion.name} />
                          <AvatarFallback>{suggestion.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold">{suggestion.name}</p>
                          <p className="text-sm text-muted-foreground">{suggestion.role} at {suggestion.company}</p>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Link to={`/message`} className="no-underline">
                          <Button size="sm" variant="ghost">
                            <MessageSquare className="h-4 w-4 mr-2" />
                            Message
                          </Button>
                        </Link>
                        <Link to={`/userprofile`} className="no-underline">
                          <Button size="sm" variant="outline">
                            <UserPlus className="h-4 w-4 mr-2" />
                            Connect
                          </Button>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
                {filteredSuggestedConnections.length > displayedSuggestedConnections.length && (
                  <div className="text-center mt-4">
                    <Button onClick={() => setShowAllSuggestions(!showAllSuggestions)} variant="outline">
                      {showAllSuggestions ? "Show Less" : "See More"}
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }
  