'use client'

import React, { useState, useEffect } from 'react'
import { Bell, Book, Calendar, FileText, Home, Mail, MessageSquare, Settings, User, Search, Plus, Edit, Trash, ArrowLeft, Sun, Moon } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { ThemeProvider, useTheme } from 'next-themes'
import Image from "next/image"
import Link from "next/link"
// import { useRouter } from 'next/router'



export function Lms() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [activeView, setActiveView] = useState('dashboard')
  const [selectedCourse, setSelectedCourse] = useState(null)
  // const [courses, setCourses] = useState([
  //   { 
  //     id: 1, 
  //     title: 'Introduction to React', 
  //     description: 'Learn the basics of React', 
  //     instructor: 'Akash Gupta', 
  //     progress: 30,
  //     content: 'React is a popular JavaScript library for building user interfaces...',
  //     quiz: [
  //       {
  //         question: 'What is React?',
  //         options: ['A JavaScript library', 'A programming language', 'A database', 'An operating system'],
  //         correctAnswer: 'A JavaScript library'
  //       },
  //       {
  //         question: 'What is JSX?',
  //         options: ['A JavaScript extension', 'A React component', 'A styling framework', 'A build tool'],
  //         correctAnswer: 'A JavaScript extension'
  //       }
  //     ]
      
  //   },
  //   { 
  //     id: 2, 
  //     title: 'Advanced JavaScript', 
  //     description: 'Deep dive into JavaScript', 
  //     instructor: 'Akash Gupta', 
  //     progress: 50,
  //     content: 'This course covers advanced JavaScript concepts such as closures, prototypes, and async programming...',
  //     quiz: [
  //       {
  //         question: 'What is a closure in JavaScript?',
  //         options: ['A data type', 'A function with access to its outer scope', 'A loop construct', 'An error handling mechanism'],
  //         correctAnswer: 'A function with access to its outer scope'
  //       },
  //       {
  //         question: 'What does the "this" keyword refer to in JavaScript?',
  //         options: ['The current function', 'The global object', 'The object the method is called on', 'A syntax error'],
  //         correctAnswer: 'The object the method is called on'
  //       }
  //     ]
  //   },
  //   { 
  //     id: 3, 
  //     title: 'Web Design Fundamentals', 
  //     description: 'Master the principles of web design', 
  //     instructor: 'Akash Gupta', 
  //     progress: 70,
  //     content: 'Learn the core principles of web design, including layout, color theory, and responsive design...',
  //     quiz: [
  //       {
  //         question: 'What does CSS stand for?',
  //         options: ['Computer Style Sheets', 'Creative Style Sheets', 'Cascading Style Sheets', 'Colorful Style Sheets'],
  //         correctAnswer: 'Cascading Style Sheets'
  //       },
  //       {
  //         question: 'Which of the following is a principle of responsive design?',
  //         options: ['Fixed layouts', 'Desktop-first approach', 'Fluid grids', 'Single breakpoint'],
  //         correctAnswer: 'Fluid grids'
  //       }
  //     ]
  //   },
  // ])
  const [courses, setCourses] = useState([
    { 
      id: 1, 
      title: 'Introduction to React', 
      description: 'Learn the basics of React', 
      instructor: 'Akash Gupta', 
      progress: 30,
      content: 'React is a popular JavaScript library for building user interfaces...',
      quiz: [
        {
          question: 'What is React?',
          options: ['A JavaScript library', 'A programming language', 'A database', 'An operating system'],
          correctAnswer: 'A JavaScript library'
        },
        {
          question: 'What is JSX?',
          options: ['A JavaScript extension', 'A React component', 'A styling framework', 'A build tool'],
          correctAnswer: 'A JavaScript extension'
        }
      ],
      videos: [ // Added videos property
        { title: 'Lecture 1: React Basics', url: 'https://www.youtube.com/embed/example1' },
        { title: 'Lecture 2: JSX in Depth', url: 'https://www.youtube.com/embed/example2' },
      ]
    },
    { 
      id: 2, 
      title: 'Advanced JavaScript', 
      description: 'Deep dive into JavaScript', 
      instructor: 'Akash Gupta', 
      progress: 50,
      content: 'This course covers advanced JavaScript concepts such as closures, prototypes, and async programming...',
      quiz: [
        {
          question: 'What is a closure in JavaScript?',
          options: ['A data type', 'A function with access to its outer scope', 'A loop construct', 'An error handling mechanism'],
          correctAnswer: 'A function with access to its outer scope'
        },
        {
          question: 'What does the "this" keyword refer to in JavaScript?',
          options: ['The current function', 'The global object', 'The object the method is called on', 'A syntax error'],
          correctAnswer: 'The object the method is called on'
        }
      ],
      videos: [ // Added videos property
        { title: 'Lecture 1: Understanding Closures', url: 'https://www.youtube.com/embed/example3' },
        { title: 'Lecture 2: Prototypes Explained', url: 'https://www.youtube.com/embed/example4' },
      ]
    },
    { 
      id: 3, 
      title: 'Web Design Fundamentals', 
      description: 'Master the principles of web design', 
      instructor: 'Akash Gupta', 
      progress: 70,
      content: 'Learn the core principles of web design, including layout, color theory, and responsive design...',
      quiz: [
        {
          question: 'What does CSS stand for?',
          options: ['Computer Style Sheets', 'Creative Style Sheets', 'Cascading Style Sheets', 'Colorful Style Sheets'],
          correctAnswer: 'Cascading Style Sheets'
        },
        {
          question: 'Which of the following is a principle of responsive design?',
          options: ['Fixed layouts', 'Desktop-first approach', 'Fluid grids', 'Single breakpoint'],
          correctAnswer: 'Fluid grids'
        }
      ],
      videos: [ // Added videos property
        { title: 'Lecture 1: Principles of Design', url: 'https://www.youtube.com/embed/example5' },
        { title: 'Lecture 2: Color Theory Basics', url: 'https://www.youtube.com/embed/example6' },
      ]
    }
  ]);
  
  const [enrollments, setEnrollments] = useState([1, 2])
  const [threads, setThreads] = useState([
    { id: 1, title: 'React Hooks Discussion', author: 'Akash Gupta', replies: 5, category: 'React' },
    { id: 2, title: 'Best Practices in Web Design', author: 'Akash Gupta', replies: 3, category: 'Design' },
  ])
  const [messages, setMessages] = useState([
    { id: 1, sender: 'Akash Gupta', subject: 'Course Materials', content: 'Hi, I ve uploaded new course materials.', date: '2024-09-03' },
    { id: 2, sender: 'System', subject: 'Welcome to EduLMS', content: 'Welcome to our learning management system!', date: '2024-09-03' },
  ])
  const [events, setEvents] = useState([
    { id: 1, title: 'React Workshop', date: '2023-06-15', type: 'workshop' },
    { id: 2, title: 'JavaScript Exam', date: '2023-06-20', type: 'exam' },
  ])

  const handleLogin = (username, password) => {
    if (username === 'admin' && password === 'admin') {
      setIsLoggedIn(true)
    } else {
      alert('Invalid credentials')
    }
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setActiveView('dashboard')
  }

  const handleEnroll = (courseId) => {
    if (!enrollments.includes(courseId)) {
      setEnrollments([...enrollments, courseId])
    }
  }

  const handleUnenroll = (courseId) => {
    setEnrollments(enrollments.filter(id => id !== courseId))
  }

  const handleContinueCourse = (course) => {
    setSelectedCourse(course)
    setActiveView('courseDetail')
  }

  if (!isLoggedIn) {
    return <LoginPage onLogin={handleLogin} />
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
        <div className="w-64 bg-indigo-800 dark:bg-indigo-900 text-white">
          <div className="p-4">
            <h1 className="text-2xl font-bold">EduLMS</h1>
          </div>
          <nav className="mt-8">
            <SidebarItem icon={<Home size={20} />} label="Dashboard" view="dashboard" setActiveView={setActiveView} />
            <SidebarItem icon={<Book size={20} />} label="Courses" view="courses" setActiveView={setActiveView} />
            <SidebarItem icon={<MessageSquare size={20} />} label="Forum" view="forum" setActiveView={setActiveView} />
            <SidebarItem icon={<Calendar size={20} />} label="Calendar" view="calendar" setActiveView={setActiveView} />
            <SidebarItem icon={<Mail size={20} />} label="Messages" view="messages" setActiveView={setActiveView} />
            <SidebarItem icon={<User size={20} />} label="Account" view="account" setActiveView={setActiveView} />
            <div className="flex items-center space-x-2 px-4 py-2 cursor-pointer hover:bg-indigo-700 dark:hover:bg-indigo-800" onClick={handleLogout}>
              <ArrowLeft size={20} />
              <span>Logout</span>
            </div>
          </nav>
        </div>

        <div className="flex-1 overflow-auto bg-gradient-to-br from-indigo-50 to-white dark:from-gray-800 dark:to-gray-900">
          <header className="bg-white dark:bg-gray-800 shadow-md text-indigo-800 dark:text-indigo-200 p-4 flex justify-between items-center">
            <h2 className="text-xl font-semibold">{activeView.charAt(0).toUpperCase() + activeView.slice(1)}</h2>
            <div className="flex items-center space-x-4">
              <Bell size={20} />
              <FileText size={20} />
              <Settings size={20} />
              <ThemeToggle />
            </div>
          </header>

          <main className="p-6">
            <div className="flex items-center space-x-4 mb-6">
              <Avatar>
                <AvatarImage src="/placeholder.svg?height=40&width=40" alt="User" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-semibold">Welcome,</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Admin Akash</p>
              </div>
            </div>

            {activeView === 'dashboard' && <DashboardView courses={courses} enrollments={enrollments} onContinueCourse={handleContinueCourse} />}
            {activeView === 'courses' && <CoursesView courses={courses} enrollments={enrollments} handleEnroll={handleEnroll} handleUnenroll={handleUnenroll} />}
            {activeView === 'forum' && <ForumView threads={threads} setThreads={setThreads} />}
            {activeView === 'calendar' && <CalendarView events={events} setEvents={setEvents} />}
            {activeView === 'messages' && <MessagesView messages={messages} setMessages={setMessages} />}
            {activeView === 'account' && <AccountView />}
            {activeView === 'courseDetail' && <CourseDetailView course={selectedCourse} onBack={() => setActiveView('dashboard')} />}
          </main>
        </div>
      </div>
    </ThemeProvider>
  )
}


export default function LoginPage({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const router = useRouter(); // Uncomment this if you need routing

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await onLogin(username, password);
    if (success) {
      // router.push('/dashboard'); // Uncomment this if you need routing
    }
  };

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="relative min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url('https://i.postimg.cc/SxRhjGvP/temp-Image-HTq8-V4.avif')` }}>
        <div className="flex flex-1 items-center justify-center p-20" >

        </div>
        <div className="flex flex-1 items-center justify-center p-6">
          <Card className="w-full max-w-md bg-white dark:bg-gray-800 shadow-xl">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl font-bold text-center text-indigo-600 dark:text-indigo-400">
                Welcome to EduLMS
              </CardTitle>
              <p className="text-sm text-center text-indigo-500 dark:text-indigo-300">
                Login with your account
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="username" className="text-indigo-600 dark:text-indigo-400">Username*</Label>
                  <Input
                    id="username"
                    type="text"
                    placeholder="Enter your username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    className="bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 border-gray-300 dark:border-gray-600"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-indigo-600 dark:text-indigo-400">Password*</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 border-gray-300 dark:border-gray-600"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="remember" className="rounded border-gray-300 dark:border-gray-600" />
                    <Label htmlFor="remember" className="text-sm font-normal text-indigo-600 dark:text-indigo-400">
                      Remember me
                    </Label>
                  </div>
                  <Link href="#" className="text-sm text-indigo-500 dark:text-indigo-300 hover:underline">
                    Forgot Password?
                  </Link>
                </div>
                <Button type="submit" className="w-full bg-indigo-500 dark:bg-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-700 text-white">
                  LOGIN
                </Button>
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-gray-300 dark:border-gray-600" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-white dark:bg-gray-800 px-2 text-gray-500 dark:text-gray-400">
                      Or continue with
                    </span>
                  </div>
                </div>
                <Button variant="outline" className="w-full border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700">
                  <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"/>
                  </svg>
                  Sign in with Google
                </Button>
                <p className="text-sm text-center text-indigo-500 dark:text-indigo-300">
                  Don't have an account?{" "}
                  <Link href="#" className="text-indigo-600 dark:text-indigo-400 hover:underline">
                    Sign up
                  </Link>
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </ThemeProvider>
  );
}



function SidebarItem({ icon, label, view, setActiveView }) {
  return (
    <div
      className="flex items-center space-x-2 px-4 py-2 cursor-pointer hover:bg-indigo-700 dark:hover:bg-indigo-800"
      onClick={() => setActiveView(view)}
    >
      {icon}
      <span>{label}</span>
    </div>
  )
}

function DashboardView({ courses, enrollments, onContinueCourse }) {
  const enrolledCourses = courses.filter(course => enrollments.includes(course.id))

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <StatCard title="ENROLLED COURSES" value={enrollments.length} icon={<Book className="text-indigo-500 dark:text-indigo-400" size={24} />} />
        <StatCard title="COMPLETED COURSES" value="0" icon={<FileText className="text-green-500 dark:text-green-400" size={24} />} />
        <StatCard title="CERTIFICATES EARNED" value="0" icon={<FileText className="text-yellow-500 dark:text-yellow-400" size={24} />} />
      </div>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>MY COURSES</CardTitle>
          <p className="text-sm text-gray-600 dark:text-gray-400">Your enrolled courses</p>
        </CardHeader>
        <CardContent>
          {enrolledCourses.map((course) => (
            <CourseItem key={course.id} {...course} onContinue={() => onContinueCourse(course)} />
          ))}
          {enrolledCourses.length === 0 && (
            <p className="text-gray-500 dark:text-gray-400">You are not enrolled in any courses yet.</p>
          )}
        </CardContent>
      </Card>
    </>
  )
}

function CoursesView({ courses, enrollments, handleEnroll, handleUnenroll }) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Available Courses</h2>
      {courses.map((course) => (
        <Card key={course.id}>
          <CardHeader>
            <CardTitle>{course.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{course.description}</p>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Instructor: {course.instructor}</p>
            {enrollments.includes(course.id) ? (
              <Button onClick={() => handleUnenroll(course.id)} className="mt-4" variant="destructive">
                Unenroll
              </Button>
            ) : (
              <Button onClick={() => handleEnroll(course.id)} className="mt-4">
                Enroll
              </Button>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

function ForumView({ threads, setThreads }) {
  const [newThread, setNewThread] = useState({ title: '', content: '', category: '' })

  const handleCreateThread = () => {
    if (newThread.title && newThread.content && newThread.category) {
      setThreads([...threads, { ...newThread, id: threads.length + 1, author: 'You', replies: 0 }])
      setNewThread({ title: '', content: '', category: '' })
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Forum</h2>
        <div className="flex space-x-2">
          <Input placeholder="Search threads..." className="w-64" />
          <Button><Search size={20} /></Button>
        </div>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Create New Thread</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Input 
              placeholder="Thread Title" 
              value={newThread.title}
              onChange={(e) => setNewThread({...newThread, title: e.target.value})}
            />
            <Textarea 
              placeholder="Thread Content"
              value={newThread.content}
              onChange={(e) => setNewThread({...newThread, content: e.target.value})}
            />
            <Input 
              placeholder="Category" 
              value={newThread.category}
              onChange={(e) => setNewThread({...newThread, category: e.target.value})}
            />
            <Button onClick={handleCreateThread}>Create Thread</Button>
          </div>
        </CardContent>
      </Card>

      {threads.map((thread) => (
        <Card key={thread.id}>
          <CardHeader>
            <CardTitle>{thread.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Author: {thread.author}</p>
            <p>Replies: {thread.replies}</p>
            <p>Category: {thread.category}</p>
            <div className="mt-4 space-x-2">
              <Button variant="outline" size="sm">View</Button>
              <Button variant="outline" size="sm">Reply</Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

function CalendarView({ events, setEvents }) {
  const [newEvent, setNewEvent] = useState({ title: '', date: '', type: '' })

  const handleAddEvent = () => {
    if (newEvent.title && newEvent.date && newEvent.type) {
      setEvents([...events, { ...newEvent, id: events.length + 1 }])
      setNewEvent({ title: '', date: '', type: '' })
    }
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Calendar</h2>
      
      <Card>
        <CardHeader>
          <CardTitle>Add New Event</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Input 
              placeholder="Event Title" 
              value={newEvent.title}
              onChange={(e) => setNewEvent({...newEvent, title: e.target.value})}
            />
            <Input 
              type="date"
              value={newEvent.date}
              onChange={(e) => setNewEvent({...newEvent, date: e.target.value})}
            />
            <Input 
              placeholder="Event Type" 
              value={newEvent.type}
              onChange={(e) => setNewEvent({...newEvent, type: e.target.value})}
            />
            <Button onClick={handleAddEvent}>Add Event</Button>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-4">
        {events.map((event) => (
          <Card key={event.id}>
            <CardContent className="flex justify-between items-center p-4">
              <div>
                <h3 className="font-semibold">{event.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{event.date}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{event.type}</p>
              </div>
              <div className="space-x-2">
                <Button size="sm" variant="outline"><Edit size={16} /></Button>
                <Button size="sm" variant="outline"><Trash size={16} /></Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

function MessagesView({ messages, setMessages }) {
  const [newMessage, setNewMessage] = useState({ recipient: '', subject: '', content: '' })

  const handleSendMessage = () => {
    if (newMessage.recipient && newMessage.subject && newMessage.content) {
      const date = new Date().toISOString().split('T')[0]
      setMessages([...messages, { ...newMessage, id: messages.length + 1, sender: 'You', date }])
      setNewMessage({ recipient: '', subject: '', content: '' })
    }
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Messages</h2>
      
      <Card>
        <CardHeader>
          <CardTitle>Compose New Message</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Input 
              placeholder="Recipient" 
              value={newMessage.recipient}
              onChange={(e) => setNewMessage({...newMessage, recipient: e.target.value})}
            />
            <Input 
              placeholder="Subject" 
              value={newMessage.subject}
              onChange={(e) => setNewMessage({...newMessage, subject: e.target.value})}
            />
            <Textarea 
              placeholder="Message Content"
              value={newMessage.content}
              onChange={(e) => setNewMessage({...newMessage, content: e.target.value})}
            />
            <Button onClick={handleSendMessage}>Send Message</Button>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="inbox">
        <TabsList>
          <TabsTrigger value="inbox">Inbox</TabsTrigger>
          <TabsTrigger value="sent">Sent</TabsTrigger>
        </TabsList>
        <TabsContent value="inbox">
          {messages.filter(m => m.sender !== 'You').map((message) => (
            <Card key={message.id} className="mb-4">
              <CardContent className="p-4">
                <h3 className="font-semibold">{message.subject}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">From: {message.sender}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Date: {message.date}</p>
                <p className="mt-2">{message.content}</p>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
        <TabsContent value="sent">
          {messages.filter(m => m.sender === 'You').map((message) => (
            <Card key={message.id} className="mb-4">
              <CardContent className="p-4">
                <h3 className="font-semibold">{message.subject}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">To: {message.recipient}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Date: {message.date}</p>
                <p className="mt-2">{message.content}</p>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  )
}

function AccountView() {
  const [profile, setProfile] = useState({
    name: 'Akash Gupta',
    email: 'admin@example.com',
    notifications: {
      email: true,
      push: false
    },
    privacy: {
      publicProfile: true
    }
  })

  const handleProfileUpdate = (field, value) => {
    setProfile(prev => ({ ...prev, [field]: value }))
  }

  const handleNotificationUpdate = (field, value) => {
    setProfile(prev => ({ ...prev, notifications: { ...prev.notifications, [field]: value } }))
  }

  const handlePrivacyUpdate = (field, value) => {
    setProfile(prev => ({ ...prev, privacy: { ...prev.privacy, [field]: value } }))
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Account Settings</h2>
      
      <Card>
        <CardHeader>
          <CardTitle>Profile Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
              <Input 
                value={profile.name}
                onChange={(e) => handleProfileUpdate('name', e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
              <Input 
                value={profile.email}
                onChange={(e) => handleProfileUpdate('email', e.target.value)}
              />
            </div>
            <Button>Update Profile</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Notification Settings</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span>Email Notifications</span>
              <input 
                type="checkbox" 
                checked={profile.notifications.email}
                onChange={(e) => handleNotificationUpdate('email', e.target.checked)}
              />
            </div>
            <div className="flex items-center justify-between">
              <span>Push Notifications</span>
              <input 
                type="checkbox" 
                checked={profile.notifications.push}
                onChange={(e) => handleNotificationUpdate('push', e.target.checked)}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Privacy Settings</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span>Public Profile</span>
              <input 
                type="checkbox" 
                checked={profile.privacy.publicProfile}
                onChange={(e) => handlePrivacyUpdate('publicProfile', e.target.checked)}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Password Management</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Input type="password" placeholder="Current Password" />
            <Input type="password" placeholder="New Password" />
            <Input type="password" placeholder="Confirm New Password" />
            <Button>Change Password</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function CourseDetailView({ course, onBack }) {
  const [activeTab, setActiveTab] = useState('info')
  const [quizAnswers, setQuizAnswers] = useState({})

  const handleQuizSubmit = () => {
    let score = 0
    course.quiz.forEach((question, index) => {
      if (quizAnswers[index] === question.correctAnswer) {
        score++
      }
    })
    alert(`Your score: ${score}/${course.quiz.length}`)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <Button onClick={onBack} variant="outline" size="sm">
          <ArrowLeft size={16} className="mr-2" /> Back to Dashboard
        </Button>
        <h2 className="text-2xl font-bold">{course.title}</h2>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="info">Course Info</TabsTrigger>
          <TabsTrigger value="videos">Video Lectures</TabsTrigger>
          <TabsTrigger value="quiz">Quiz</TabsTrigger>
        </TabsList>
        <TabsContent value="info">
          <Card>
            <CardContent className="mt-4">
              <h3 className="text-xl font-semibold mb-2">Course Description</h3>
              <p>{course.description}</p>
              <h3 className="text-xl font-semibold mt-4 mb-2">Course Content</h3>
              <p>{course.content}</p>
            </CardContent>
          </Card>
        </TabsContent>
              {/* Add Video Content it should shows video with lecture name and looks like playlist */}
              <TabsContent value="videos">
          <Card>
            <CardContent className="mt-4">
              <h3 className="text-xl font-semibold mb-4">Video Lectures</h3>
              {course.videos.map((video, index) => (
                <div key={index} className="mb-20">
                  <h4 className="font-semibold">{video.title}</h4>
                  <iframe
                    src={video.url}
                    title={video.title}
                    className="w-full h-100"
                    frameBorder="1"
                    allowFullScreen
                  ></iframe>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="quiz">
          <Card>
            <CardContent className="mt-4">
              <h3 className="text-xl font-semibold mb-4">Course Quiz</h3>
              {course.quiz.map((question, index) => (
                <div key={index} className="mb-6">
                  <h4 className="font-semibold mb-2">{question.question}</h4>
                  <RadioGroup
                    value={quizAnswers[index]}
                    onValueChange={(value) => setQuizAnswers({...quizAnswers, [index]: value})}
                  >
                    {question.options.map((option, optionIndex) => (
                      <div key={optionIndex} className="flex items-center space-x-2">
                        <RadioGroupItem value={option} id={`q${index}-option${optionIndex}`} />
                        <Label htmlFor={`q${index}-option${optionIndex}`}>{option}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              ))}
              <Button onClick={handleQuizSubmit}>Submit Quiz</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function StatCard({ title, value, icon }) {
  return (
    <Card>
      <CardContent className="flex items-center justify-between p-6">
        <div>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</p>
          <p className="text-2xl font-bold">{value}</p>
        </div>
        {icon}
      </CardContent>
    </Card>
  )
}

function CourseItem({ title, description, progress = 0, onContinue }) {
  return (
    <div className="flex items-center space-x-4 mb-4">
      <div className="flex-1">
        <h4 className="font-semibold">{title}</h4>
        <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
        <Progress value={progress} className="mt-2" />
      </div>
      <Button variant="outline" size="sm" onClick={onContinue}>
        Continue {title}
      </Button>
    </div>
  )
}

function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}