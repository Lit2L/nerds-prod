import { useState } from 'react'
import Image from 'next/image'
import { MapPin, Play } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'

export default function Component() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null)

  const photos = [
    {
      src: '/placeholder.svg?height=400&width=600',
      alt: 'Action shot of kickboxing training'
    },
    {
      src: '/placeholder.svg?height=400&width=600',
      alt: 'Group photo of gym members'
    },
    {
      src: '/placeholder.svg?height=400&width=600',
      alt: 'Close-up of punch technique'
    },
    {
      src: '/placeholder.svg?height=400&width=600',
      alt: 'Wide shot of gym interior'
    }
  ]

  const videos = [
    {
      id: 'video1',
      title: 'Basic Techniques',
      thumbnail: '/placeholder.svg?height=200&width=300'
    },
    {
      id: 'video2',
      title: 'Advanced Combinations',
      thumbnail: '/placeholder.svg?height=200&width=300'
    },
    {
      id: 'video3',
      title: 'Cardio Kickboxing',
      thumbnail: '/placeholder.svg?height=200&width=300'
    }
  ]

  return (
    <div className='flex flex-col min-h-screen'>
      <header className='bg-primary text-primary-foreground py-6'>
        <div className='container mx-auto px-4'>
          <h1 className='text-4xl font-bold text-center'>Nerds Fighting</h1>
          <p className='text-xl text-center mt-2'>Muay Thai & Kickboxing Gym</p>
        </div>
      </header>

      <main className='flex-grow container mx-auto px-4 py-8'>
        <section className='mb-12'>
          <Image
            src='/placeholder.svg?height=600&width=1200'
            alt='Nerds Fighting Gym'
            width={1200}
            height={600}
            className='rounded-lg object-cover w-full'
          />
        </section>

        <section className='mb-12'>
          <h2 className='text-3xl font-semibold mb-4'>About Us</h2>
          <p className='text-lg'>
            Welcome to Nerds Fighting, where we blend the art of Muay Thai with
            the spirit of the tech community. Our gym is a place for everyone -
            from coding ninjas to kickboxing novices. We offer expert training,
            a supportive community, and a unique atmosphere that celebrates both
            mental and physical strength.
          </p>
        </section>

        <section className='mb-12'>
          <h2 className='text-3xl font-semibold mb-4'>Photo Gallery</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
            {photos.map((photo, index) => (
              <Image
                key={index}
                src={photo.src}
                alt={photo.alt}
                width={300}
                height={200}
                className='rounded-lg object-cover w-full h-full'
              />
            ))}
          </div>
        </section>

        <section className='mb-12'>
          <h2 className='text-3xl font-semibold mb-4'>Training Videos</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
            {videos.map((video) => (
              <Card key={video.id}>
                <CardContent className='p-0'>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant='ghost'
                        className='w-full h-full p-0 hover:bg-transparent'
                        onClick={() => setActiveVideo(video.id)}
                      >
                        <div className='relative w-full aspect-video'>
                          <Image
                            src={video.thumbnail}
                            alt={video.title}
                            layout='fill'
                            objectFit='cover'
                            className='rounded-t-lg'
                          />
                          <div className='absolute inset-0 flex items-center justify-center'>
                            <Play className='w-16 h-16 text-white' />
                          </div>
                        </div>
                        <div className='p-4 text-left'>
                          <h3 className='font-semibold'>{video.title}</h3>
                        </div>
                      </Button>
                    </DialogTrigger>
                    <DialogContent className='sm:max-w-[425px]'>
                      <div className='aspect-video'>
                        <iframe
                          width='100%'
                          height='100%'
                          src={`https://www.youtube-nocookie.com/embed/${activeVideo}`}
                          title={video.title}
                          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                          allowFullScreen
                        ></iframe>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className='mb-12'>
          <h2 className='text-3xl font-semibold mb-4'>Location</h2>
          <div className='bg-muted p-6 rounded-lg'>
            <div className='flex items-center mb-4'>
              <MapPin className='mr-2' />
              <p>123 Tech Street, Silicon Valley, CA 94000</p>
            </div>
            <div className='aspect-video'>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.3325395304414!2d-122.01462168467422!3d37.33463524513264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb59127ce078f%3A0x18e1c3ce7becf1b!2sApple%20Park!5e0!3m2!1sen!2sus!4v1637309850935!5m2!1sen!2sus'
                width='100%'
                height='100%'
                style={{ border: 0 }}
                allowFullScreen
                loading='lazy'
              ></iframe>
            </div>
          </div>
        </section>
      </main>

      <footer className='bg-primary text-primary-foreground py-4'>
        <div className='container mx-auto px-4 text-center'>
          <p>&copy; 2023 Nerds Fighting. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

// import Image from 'next/legacy/image'

// import { AccordionAbout } from '@/components/about-accordion'

// export const About = () => {
//   return (
//     <section
//       id='about'
//       className='w-full bg-[radial-gradient(circle_350px_at_50%_450px,#a614204d,transparent)] dark:bg-[radial-gradient(circle_350px_at_50%_450px,#a614204d,transparent)] '
//     >
//       <div className='flex flex-col text-center justify-center items-center my-12'>
//         <h2 className='text-center font-heading text-3xl font-bold '>
//           What Nerds?
//         </h2>

//         <div className=''>
//           <Image
//             src='/dojo.png'
//             alt='temple'
//             width={400}
//             height={300}
//             className=' '
//           />
//         </div>
//         <div className='my-6'>
//           <AccordionAbout />
//         </div>
//       </div>
//     </section>
//   )
// }
