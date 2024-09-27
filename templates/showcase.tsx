import { useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, MapPin, Play } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'

export default function Component() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null)
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0)

  const photos = [
    {
      src: '/placeholder.svg?height=600&width=800',
      alt: 'Action shot of kickboxing training'
    },
    {
      src: '/placeholder.svg?height=600&width=800',
      alt: 'Group photo of gym members'
    },
    {
      src: '/placeholder.svg?height=600&width=800',
      alt: 'Close-up of punch technique'
    },
    {
      src: '/placeholder.svg?height=600&width=800',
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

  const nextPhoto = () => {
    setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length)
  }

  const prevPhoto = () => {
    setCurrentPhotoIndex(
      (prevIndex) => (prevIndex - 1 + photos.length) % photos.length
    )
  }

  return (
    <div className='flex flex-col min-h-screen bg-black text-white'>
      <header className='py-6 bg-gradient-to-r from-purple-600 to-pink-600'>
        <div className='container mx-auto px-4'>
          <h1 className='text-5xl font-bold text-center tracking-tight'>
            Nerds Fighting
          </h1>
          <p className='text-xl text-center mt-2 font-light'>
            Where Code Meets Combat
          </p>
        </div>
      </header>

      <main className='flex-grow container mx-auto px-4 py-12'>
        <section className='mb-20'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='relative h-[70vh] overflow-hidden rounded-2xl'
          >
            <Image
              src='/placeholder.svg?height=800&width=1200'
              alt='Nerds Fighting Gym'
              layout='fill'
              objectFit='cover'
              className='brightness-50'
            />
            <div className='absolute inset-0 flex flex-col items-center justify-center text-center'>
              <h2 className='text-5xl font-bold mb-4'>
                Train Like a Nerd, Fight Like a Pro
              </h2>
              <p className='text-xl max-w-2xl'>
                Experience the perfect blend of mental acuity and physical
                prowess at Silicon Valley's most innovative Muay Thai gym.
              </p>
            </div>
          </motion.div>
        </section>

        <section className='mb-20'>
          <h2 className='text-4xl font-bold mb-8 text-center'>
            Our Training Ground
          </h2>
          <div className='relative'>
            <AnimatePresence mode='wait'>
              <motion.div
                key={currentPhotoIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className='aspect-video relative rounded-xl overflow-hidden'
              >
                <Image
                  src={photos[currentPhotoIndex].src}
                  alt={photos[currentPhotoIndex].alt}
                  layout='fill'
                  objectFit='cover'
                />
              </motion.div>
            </AnimatePresence>
            <Button
              variant='ghost'
              size='icon'
              className='absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 hover:bg-black/75'
              onClick={prevPhoto}
            >
              <ChevronLeft className='h-8 w-8' />
            </Button>
            <Button
              variant='ghost'
              size='icon'
              className='absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 hover:bg-black/75'
              onClick={nextPhoto}
            >
              <ChevronRight className='h-8 w-8' />
            </Button>
          </div>
        </section>

        <section className='mb-20'>
          <h2 className='text-4xl font-bold mb-8 text-center'>
            Training Videos
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {videos.map((video) => (
              <Card
                key={video.id}
                className='bg-gray-900 border-none overflow-hidden'
              >
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
                          />
                          <div className='absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300'>
                            <Play className='w-16 h-16' />
                          </div>
                        </div>
                        <div className='p-4 text-left'>
                          <h3 className='font-semibold text-lg'>
                            {video.title}
                          </h3>
                        </div>
                      </Button>
                    </DialogTrigger>
                    <DialogContent className='sm:max-w-[425px] bg-gray-900 text-white'>
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

        <section className='mb-20'>
          <h2 className='text-4xl font-bold mb-8 text-center'>Find Us</h2>
          <div className='bg-gray-900 p-8 rounded-xl'>
            <div className='flex items-center mb-6'>
              <MapPin className='mr-4 h-6 w-6 text-purple-500' />
              <p className='text-lg'>
                123 Tech Street, Silicon Valley, CA 94000
              </p>
            </div>
            <div className='aspect-video rounded-lg overflow-hidden'>
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

      <footer className='bg-gray-900 py-8'>
        <div className='container mx-auto px-4 text-center'>
          <p className='text-gray-400'>
            &copy; 2023 Nerds Fighting. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
