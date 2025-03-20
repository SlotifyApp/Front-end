import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Calendar,
  Clock,
  Zap,
  Users,
  Brain,
  CheckCircle,
  ArrowRight,
  Sparkles,
} from 'lucide-react'

function TempLandingPage() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 to-gray-100'>
      {/* Header */}
      <header className='border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50'>
        <div className='container mx-auto px-4 py-4 flex items-center justify-between'>
          <div className='flex items-center space-x-2'>
            <div className='w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center'>
              <Sparkles className='w-5 h-5 text-white' />
            </div>
            <span className='text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent'>
              Slotify
            </span>
          </div>
          <nav className='hidden md:flex items-center space-x-8'>
            <a
              href='#features'
              className='text-gray-600 hover:text-gray-900 transition-colors'
            >
              Features
            </a>
            <a
              href='#pricing'
              className='text-gray-600 hover:text-gray-900 transition-colors'
            >
              Pricing
            </a>
            <a
              href='#about'
              className='text-gray-600 hover:text-gray-900 transition-colors'
            >
              About
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className='py-20 px-4'>
        <div className='container mx-auto text-center max-w-4xl'>
          <Badge className='mb-6 bg-purple-100 text-purple-700 hover:bg-purple-100'>
            <Brain className='w-4 h-4 mr-2' />
            AI-Powered Scheduling
          </Badge>
          <h1 className='text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-purple-900 to-pink-900 bg-clip-text text-transparent'>
            Your One-in-All
            <br />
            Scheduling Solution
          </h1>
          <p className='text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed'>
            From basic scheduling to advanced AI automation, Slotify adapts to
            your needs. Choose from our Basic, Regular, or Advanced scheduler to
            eliminate calendar chaos forever.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center mb-12'>
            <Button
              size='lg'
              className='bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg px-8 py-6'
            >
              Start Free Trial
              <ArrowRight className='ml-2 w-5 h-5' />
            </Button>
            <Button
              size='lg'
              variant='outline'
              className='bg-white text-gray-900 border-gray-300 hover:bg-gray-50 text-lg px-8 py-6'
            >
              Watch Demo
            </Button>
          </div>
          <div className='flex items-center justify-center space-x-8 text-sm text-gray-500'>
            <div className='flex items-center'>
              <CheckCircle className='w-4 h-4 text-green-500 mr-2' />
              24/7 Support
            </div>
            <div className='flex items-center'>
              <CheckCircle className='w-4 h-4 text-green-500 mr-2' />
              World-class observability and monitoring
            </div>
            <div className='flex items-center'>
              <CheckCircle className='w-4 h-4 text-green-500 mr-2' />
              Cancel anytime
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id='features' className='py-20 px-4 bg-white'>
        <div className='container mx-auto'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl font-bold mb-4 text-gray-900'>
              Powered by Advanced AI
            </h2>
            <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
              Experience the future of scheduling with intelligent automation
              that learns your preferences
            </p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <Card className='border-0 shadow-lg hover:shadow-xl transition-shadow'>
              <CardHeader>
                <div className='w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4'>
                  <Brain className='w-6 h-6 text-white' />
                </div>
                <CardTitle>AI-Powered Optimization</CardTitle>
                <CardDescription>
                  Our AI analyzes your calendar patterns and preferences to
                  suggest optimal meeting times
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className='border-0 shadow-lg hover:shadow-xl transition-shadow'>
              <CardHeader>
                <div className='w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4'>
                  <Calendar className='w-6 h-6 text-white' />
                </div>
                <CardTitle>Smart Calendar Sync</CardTitle>
                <CardDescription>
                  Seamlessly integrates with Google Calendar, Outlook, and other
                  popular calendar apps
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className='border-0 shadow-lg hover:shadow-xl transition-shadow'>
              <CardHeader>
                <div className='w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4'>
                  <Zap className='w-6 h-6 text-white' />
                </div>
                <CardTitle>Instant Scheduling</CardTitle>
                <CardDescription>
                  Book meetings in seconds with AI-suggested time slots that
                  work for everyone
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className='border-0 shadow-lg hover:shadow-xl transition-shadow'>
              <CardHeader>
                <div className='w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-4'>
                  <Users className='w-6 h-6 text-white' />
                </div>
                <CardTitle>Team Coordination</CardTitle>
                <CardDescription>
                  Effortlessly coordinate group meetings across different time
                  zones and availability
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className='border-0 shadow-lg hover:shadow-xl transition-shadow'>
              <CardHeader>
                <div className='w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mb-4'>
                  <Clock className='w-6 h-6 text-white' />
                </div>
                <CardTitle>Time Zone Intelligence</CardTitle>
                <CardDescription>
                  Automatically handles time zone conversions and suggests
                  meeting times that work globally
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className='border-0 shadow-lg hover:shadow-xl transition-shadow'>
              <CardHeader>
                <div className='w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-500 rounded-lg flex items-center justify-center mb-4'>
                  <Sparkles className='w-6 h-6 text-white' />
                </div>
                <CardTitle>Smart Suggestions</CardTitle>
                <CardDescription>
                  Get intelligent recommendations for meeting duration,
                  location, and preparation time
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Scheduler Tiers Section */}
      <section className='py-20 px-4 bg-gradient-to-br from-gray-50 to-slate-100'>
        <div className='container mx-auto'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl font-bold mb-4 text-gray-900'>
              Three Schedulers, One Platform
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Whether you're just getting started or need enterprise-level
              automation, we have the perfect scheduler for you
            </p>
          </div>

          <div className='grid md:grid-cols-3 gap-8 max-w-6xl mx-auto'>
            <Card className='border-0 shadow-lg hover:shadow-xl transition-all hover:scale-105'>
              <CardHeader className='text-center pb-2'>
                <div className='w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <Calendar className='w-8 h-8 text-white' />
                </div>
                <CardTitle className='text-2xl'>Basic Scheduler</CardTitle>
                <CardDescription className='text-base'>
                  Perfect for individuals and small teams getting started with
                  smart scheduling
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className='space-y-3 text-gray-600'>
                  <li className='flex items-center'>
                    <CheckCircle className='w-5 h-5 text-green-500 mr-3 flex-shrink-0' />
                    Simple calendar integration
                  </li>
                  <li className='flex items-center'>
                    <CheckCircle className='w-5 h-5 text-green-500 mr-3 flex-shrink-0' />
                    Basic availability management
                  </li>
                  <li className='flex items-center'>
                    <CheckCircle className='w-5 h-5 text-green-500 mr-3 flex-shrink-0' />
                    Email notifications
                  </li>
                  <li className='flex items-center'>
                    <CheckCircle className='w-5 h-5 text-green-500 mr-3 flex-shrink-0' />
                    Mobile app access
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className='border-0 shadow-lg hover:shadow-xl transition-all hover:scale-105 ring-2 ring-purple-200'>
              <CardHeader className='text-center pb-2'>
                <div className='w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <Zap className='w-8 h-8 text-white' />
                </div>
                <CardTitle className='text-2xl'>Regular Scheduler</CardTitle>
                <CardDescription className='text-base'>
                  Enhanced features for growing teams that need more scheduling
                  power
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className='space-y-3 text-gray-600'>
                  <li className='flex items-center'>
                    <CheckCircle className='w-5 h-5 text-green-500 mr-3 flex-shrink-0' />
                    Everything in Basic
                  </li>
                  <li className='flex items-center'>
                    <CheckCircle className='w-5 h-5 text-green-500 mr-3 flex-shrink-0' />
                    AI-powered time suggestions
                  </li>
                  <li className='flex items-center'>
                    <CheckCircle className='w-5 h-5 text-green-500 mr-3 flex-shrink-0' />
                    Team coordination tools
                  </li>
                  <li className='flex items-center'>
                    <CheckCircle className='w-5 h-5 text-green-500 mr-3 flex-shrink-0' />
                    Multiple calendar sync
                  </li>
                  <li className='flex items-center'>
                    <CheckCircle className='w-5 h-5 text-green-500 mr-3 flex-shrink-0' />
                    Time zone intelligence
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className='border-0 shadow-lg hover:shadow-xl transition-all hover:scale-105'>
              <CardHeader className='text-center pb-2'>
                <Badge className='mb-2 bg-purple-100 text-purple-700 hover:bg-purple-100 mx-auto'>
                  Most Popular
                </Badge>
                <div className='w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <Brain className='w-8 h-8 text-white' />
                </div>
                <CardTitle className='text-2xl'>Advanced Scheduler</CardTitle>
                <CardDescription className='text-base'>
                  Full AI automation for enterprises that demand the ultimate
                  scheduling experience
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className='space-y-3 text-gray-600'>
                  <li className='flex items-center'>
                    <CheckCircle className='w-5 h-5 text-green-500 mr-3 flex-shrink-0' />
                    Everything in Regular
                  </li>
                  <li className='flex items-center'>
                    <CheckCircle className='w-5 h-5 text-green-500 mr-3 flex-shrink-0' />
                    Advanced AI optimization
                  </li>
                  <li className='flex items-center'>
                    <CheckCircle className='w-5 h-5 text-green-500 mr-3 flex-shrink-0' />
                    Custom integrations & API
                  </li>
                  <li className='flex items-center'>
                    <CheckCircle className='w-5 h-5 text-green-500 mr-3 flex-shrink-0' />
                    Priority support
                  </li>
                  <li className='flex items-center'>
                    <CheckCircle className='w-5 h-5 text-green-500 mr-3 flex-shrink-0' />
                    Enterprise security
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className='text-center mt-12'>
            <Button
              size='lg'
              className='bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg px-8 py-6'
            >
              Contact Us for Pricing
              <ArrowRight className='ml-2 w-5 h-5' />
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className='py-20 px-4 bg-gradient-to-r from-purple-600 to-pink-600'>
        <div className='container mx-auto text-center'>
          <div className='grid md:grid-cols-3 gap-8 text-white'>
            <div>
              <div className='text-4xl font-bold mb-2'>66%</div>
              <div className='text-purple-100'>Manual Scheduling Reduced</div>
            </div>
            <div>
              <div className='text-4xl font-bold mb-2'>100%</div>
              <div className='text-purple-100'>Client Satisfaction</div>
            </div>
            <div>
              <div className='text-4xl font-bold mb-2'>AI-First</div>
              <div className='text-purple-100'>Approach</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className='py-20 px-4 bg-gray-50'>
        <div className='container mx-auto'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl font-bold mb-4 text-gray-900'>
              Proven Results
            </h2>
            <p className='text-xl text-gray-600'>
              See how Slotify transformed scheduling for our client
            </p>
          </div>

          <div className='max-w-4xl mx-auto'>
            <Card className='border-0 shadow-xl'>
              <CardContent className='p-8'>
                <div className='text-center mb-8'>
                  <div className='w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-4'>
                    <Users className='w-10 h-10 text-white' />
                  </div>
                  <h3 className='text-2xl font-bold text-gray-900 mb-2'>
                    Peterborough Council
                  </h3>
                  <p className='text-gray-600'>Local Government Authority</p>
                </div>

                <div className='grid md:grid-cols-3 gap-8 mb-8'>
                  <div className='text-center'>
                    <div className='text-3xl font-bold text-purple-600 mb-2'>
                      66%
                    </div>
                    <div className='text-gray-600'>
                      Reduction in Manual Scheduling
                    </div>
                  </div>
                  <div className='text-center'>
                    <div className='text-3xl font-bold text-green-600 mb-2'>
                      Advanced
                    </div>
                    <div className='text-gray-600'>AI Scheduler Deployed</div>
                  </div>
                  <div className='text-center'>
                    <div className='text-3xl font-bold text-blue-600 mb-2'>
                      Enterprise
                    </div>
                    <div className='text-gray-600'>Scale Implementation</div>
                  </div>
                </div>

                <blockquote className='text-xl text-gray-700 text-center italic mb-6'></blockquote>

                <div className='text-center'>
                  <div className='inline-flex items-center space-x-2 text-gray-600'>
                    <CheckCircle className='w-5 h-5 text-green-500' />
                    <span>Verified Client Success Story</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 px-4 bg-white'>
        <div className='container mx-auto text-center max-w-3xl'>
          <h2 className='text-4xl font-bold mb-6 text-gray-900'>
            Ready to Transform Your Scheduling?
          </h2>
          <p className='text-xl text-gray-600 mb-8'>
            Join thousands of professionals who have chosen Slotify as their
            one-in-all scheduling solution. Watch our demo to see how our Basic,
            Regular, and Advanced schedulers can work for you.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Button
              size='lg'
              className='bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg px-8 py-6'
            >
              Contact Us for Pricing
              <ArrowRight className='ml-2 w-5 h-5' />
            </Button>
            <Button
              size='lg'
              variant='outline'
              className='bg-white text-gray-900 border-gray-300 hover:bg-gray-50 text-lg px-8 py-6'
            >
              Watch Demo Video
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='bg-gray-900 text-white py-12 px-4'>
        <div className='container mx-auto'>
          <div className='grid md:grid-cols-4 gap-8'>
            <div>
              <div className='flex items-center space-x-2 mb-4'>
                <div className='w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center'>
                  <Sparkles className='w-5 h-5 text-white' />
                </div>
                <span className='text-2xl font-bold'>Slotify</span>
              </div>
              <p className='text-gray-400'>
                AI-powered scheduling that adapts to your workflow and maximizes
                your productivity.
              </p>
            </div>
            <div>
              <h3 className='font-semibold mb-4'>Product</h3>
              <ul className='space-y-2 text-gray-400'>
                <li>
                  <a href='#' className='hover:text-white transition-colors'>
                    Features
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-white transition-colors'>
                    Pricing
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-white transition-colors'>
                    Integrations
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-white transition-colors'>
                    API
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className='font-semibold mb-4'>Company</h3>
              <ul className='space-y-2 text-gray-400'>
                <li>
                  <a href='#' className='hover:text-white transition-colors'>
                    About
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-white transition-colors'>
                    Blog
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-white transition-colors'>
                    Careers
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-white transition-colors'>
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className='font-semibold mb-4'>Support</h3>
              <ul className='space-y-2 text-gray-400'>
                <li>
                  <a href='#' className='hover:text-white transition-colors'>
                    Help Center
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-white transition-colors'>
                    Documentation
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-white transition-colors'>
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-white transition-colors'>
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className='border-t border-gray-800 mt-8 pt-8 text-center text-gray-400'>
            <p>&copy; 2025 Slotify. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
export default function Home() {
  // useEffect(() => {
  //   const fetchUser = async () => {
  //     // Keep this instead of using the slotifyClient.
  //     // slotifyClient will cause an infinite loop here
  //     try {
  //       await axios.get(process.env.NEXT_PUBLIC_API_URL + 'api/users/me', {
  //         withCredentials: true,
  //       })
  //       window.location.href = '/dashboard'
  //       return
  //     } catch (error) {
  //       console.log('error', error)
  //     }
  //     try {
  //       await axios.post(process.env.NEXT_PUBLIC_API_URL + 'api/refresh', {
  //         withCredentials: true,
  //       })
  //     } catch (error) {
  //       console.log('error', error)
  //     }
  //   }
  //   fetchUser()
  // }, [])
  //
  // return <LandingPage />
  return <TempLandingPage />
}
