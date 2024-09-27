import Image from 'next/legacy/image'
import { IconPokeball, IconTrees } from '@tabler/icons-react'
import { VideoIcon } from 'lucide-react'
import { CiVideoOn } from 'react-icons/ci'
import { GiTeacher, GiWhistle, GiYinYang } from 'react-icons/gi'

import { Separator } from '@/components/ui/separator'

const featureCards = [
  {
    id: 0,
    title: 'Technique',
    description: `Developing correct form and technique is at the heart of our program. We want you to understand not only how to execute techniques but also why they are essential to your progress and safety.`,
    duration: '1 Hour',
    levels: '',
    recommended: '',
    image: '/nerds1.png',
    icon: <GiYinYang className='size-6 text-blue-500' />,
    href: 'https://calendly.com/nerdsfighting/free-trial-kickboxing-class'
  },
  {
    id: 1,
    title: 'Group Training Sessions',
    description: `Join a welcoming martial arts community where individuals come together to enhance their health, longevity, striking skills and courage. We train together and grow together. Empower yourself with the confidence that comes from being part of a group of like-minded individuals dedicated to grow stronger.`,
    duration: '1 Hour',
    levels: '',
    recommended: '',
    image: '/nerds3.png',
    icon: <GiTeacher className='size-6 ' />,
    href: 'https://calendly.com/nerdsfighting/free-trial-kickboxing-class'
  },
  {
    id: 2,
    title: 'Hands on Coaching',
    description:
      'Get hands-on training with as we guide you through every session. We provide personalized feedback to help you improve your technique and reach your goals. ',
    duration: '',
    levels: '',
    recommended: '',
    image: '/about4.png',
    icon: <CiVideoOn className='size-6 text-red-800' />,
    href: 'https://calendly.com/nerdsfighting/video-analysis-session-1'
  },

  {
    id: 3,
    title: 'No Intimidation Zone',
    description: `Fight gyms can be intimidating.  It's almost as if you are walking in and signing up for your own beat down. We understand this feel all too well so I'd like to say that nobody is here to beat you up.  It's natural to feel nervous and intimidated when trying something new, especially when it comes to martial arts. Our experienced staff have experienced this fear ourselves and we want you to know that we have fostered a safe and welcoming environment for you to learn and grow. There is never any pressure to spar, compete or anything else you are not comfortable with. `,
    duration: '1 Hour',
    levels: '',
    recommended: '',
    image: '/nerds-friendly.png',
    icon: <GiTeacher className='size-6 ' />,
    href: 'https://calendly.com/nerdsfighting/free-trial-kickboxing-class'
  },

  {
    id: 4,
    title: 'Private Coaching',
    description: `Advance your skills quickly with private lessons customized to your goals. Whether you want to fine-tune specific aspects of your game, enjoy a heart pounding pad session or enhance your overall performance, private sessions provide the perfect opportunity for fast improvement.  Suitable for beginners and seasoned kickboxers alike, private lessons allow you to level up your craft at your own pace`,
    duration: '1 Hour',
    recommended:
      'boxing/kickboxing/muay thai gloves, hand wraps, water bottle, shin-pads, towel',
    image: '/about1.jpeg',
    icon: <GiWhistle className='size-6 text-blue-800' />,
    href: 'https://calendly.com/nerdsfighting/private-coaching'
  },
  {
    id: 5,
    title: 'Outdoor Training',
    description:
      'Embrace the outdoors with our training sessions that let you soak up the sun and breathe in the fresh air while training. Connect with nature as you boost your fitness and build mental toughness with outdoor training sessions that include bodyweight exercises, conditioning, drills, mitts, Thai pads and more.',
    duration: '1 Hour ALL LEVELS.',
    levels: '',
    recommended: '',
    image: '/about13.png',
    icon: <IconTrees className='size-6 text-green-600 rounded-full' />,
    href: 'https://calendly.com/nerdsfighting/free-trial-kickboxing-class'
  },
  {
    id: 6,
    title: 'Friendly Competition',
    description:
      'No better way to bond with your teammates than to compete against them. Test your skills with our curated battle games and unleash your new abilities with some friendly competition.',
    duration: '1 Hour',
    levels: '',
    recommended: '',
    image: '/about12.png',
    icon: <IconPokeball className='size-6 text-red-500 rounded-full' />,
    href: 'https://calendly.com/nerdsfighting/free-trial-kickboxing-class'
  }
]

export const Training = () => {
  return (
    <section id='training' className='w-full h-full mx-auto'>
      <div className='text-center  '>
        <p className='my-3 text-3xl md:text-5xl font-heading tracking-tight uppercase'>
          TRAINING
        </p>
      </div>
      <Separator className='w-20' />
      <div className='w-full mx-auto'>
        {featureCards.map((card, index) => (
          <div key={card.id} className='flex flex-col mt-3 p-3'>
            <div className='flex w-full items-center justify-center'>
              <Image
                src={card.image}
                alt={card.title}
                className='rounded-lg object-cover'
                height={300}
                width={420}
              />
            </div>

            <div className='flex flex-col border-b'>
              <div className=' p-6 flex flex-col gap-3'>
                <div className='flex gap-3 items-center'>
                  <div className=''>{card.icon}</div>
                  <p className='font-heading text-md'>{card.title}</p>
                </div>
                <div className='flex flex-col '>
                  <p className='text-sm dark:text-white'>
                    <strong className=''> Description:</strong>{' '}
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className='flex flex-col'>
          <div className='w-full'>
            <div className='w-full items-center justify-center flex p-3'>
              <Image
                src='/nerds4.png'
                alt='Video Analysis'
                className='rounded-lg object-contain'
                height={400}
                width={400}
              />
            </div>
          </div>

          <div className='flex flex-col border-b'>
            <div className=' p-6 flex flex-col gap-3'>
              <div className='flex gap-3 items-center'>
                <div className=''>
                  <VideoIcon />
                </div>
                <p className='font-heading text-md'>Video Analysis </p>
              </div>
              <div className='flex flex-col '>
                <p className='text-sm dark:text-white'>
                  <strong className=''> Description:</strong> Accelerate your
                  progress with visual feedback. Our coaches guide you through
                  sessions to pinpoint areas for improvement and deepen your
                  understanding of fight mechanics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
