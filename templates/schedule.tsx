import Link from 'next/link'
import { Calendar } from 'lucide-react'
import { GiPunchingBag } from 'react-icons/gi'
import { MdSportsMartialArts } from 'react-icons/md'

import { Separator } from '@/components/ui/separator'
import { AnimatedJoinButton } from '@/components/magicui/AnimatedJoinButton'

export const Schedule: React.FC = () => {
  const classes = [
    {
      id: 1,
      title: 'Sunday',
      description: 'Cardio Kickboxing',
      level: 'All levels',
      schedule: [
        { id: 1, day: 'Sun', time: '6:00 AM' },
        { id: 2, day: 'Sun', time: '8:00 AM' }
      ]
    },
    {
      id: 2,
      title: 'Monday',
      description: 'Cardio Kickboxing',
      level: 'All levels',
      schedule: [
        { id: 1, day: 'Mon', time: '7:00 AM' },
        { id: 2, day: 'Mon', time: '9:00 AM' }
      ]
    },

    {
      id: 3,
      title: 'Wednesday',
      level: 'All levels',
      description: 'Cardio Kickboxing',
      schedule: [
        {
          id: 1,
          day: 'Wed',
          time: '9:00 AM'
        }
      ]
    },
    {
      id: 4,
      title: 'Thursday',
      level: 'all levels',
      description: 'Cardio Kickboxing',
      schedule: [
        {
          id: 1,
          day: 'Thurs',
          time: '6:00 AM'
        }
      ]
    },
    {
      id: 5,
      title: 'Saturday',
      level: 'All levels',
      description: 'Cardio Kickboxing.',
      schedule: [{ id: 1, day: 'Sat', time: '8:00 AM' }]
    }
  ]

  return (
    <section id='schedule' className='w-full'>
      <div className='mx-auto flex flex-col items-center justify-center '>
        <div className='space-y-9 text-center'>
          <p className='font-heading text-3xl md:text-5xl font-bold tracking-tight text-black/80 dark:text-white'>
            CLASS SCHEDULE
          </p>
          <Separator className='w-20 mx-auto' />
          <p className='font-heading font-light text-black dark:text-white'>
            Find the schedule for you.
          </p>
        </div>
        <div className='mt-9 flex flex-wrap justify-center gap-6'>
          {classes &&
            classes.map((item) => (
              <div
                key={item.id}
                className='flex h-52 w-64 flex-col rounded-xl border-zinc-700 bg-zinc-900/95 p-3 shadow-xl shadow-gray-800 transition-all duration-300 hover:scale-95 dark:bg-zinc-800 dark:shadow-gray-800/40'
              >
                <div className='p-1'>
                  <div className='flex items-center justify-between gap-3'>
                    <MdSportsMartialArts className='size-6 text-white' />
                    <p className='font-sans text-white dark:text-gray-300'>
                      {item.title}
                    </p>
                  </div>
                </div>
                <Separator className='my-1' />

                <div className='flex flex-col items-center  '>
                  {item.schedule.map((schedule) => (
                    <div
                      key={schedule.id}
                      className='flex w-full items-center justify-between border-b border-white/10'
                    >
                      <Calendar className='w-1/16 mx-2 size-4 text-emerald-600 dark:text-emerald-500' />
                      <div
                        key={schedule.time}
                        className='flex w-full items-center justify-between py-1'
                      >
                        <span className='w-1/16 text-md font-semibold text-white dark:text-gray-300'>
                          {schedule.time}
                        </span>

                        <p className='w-3/16 m-1 flex font-sans text-xs font-semibold capitalize text-white dark:text-green-500'>
                          {item.level}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className='mt-2 flex w-full flex-1 flex-col items-end justify-between'>
                  <span className='flex w-full items-center justify-between'>
                    <GiPunchingBag className='size-6 text-red-500' />
                    <p className='ml-3 font-sans text-xs font-semibold tracking-wide text-white dark:text-gray-300'>
                      {item.description}
                    </p>
                  </span>
                  {/* <AnimatedJoinButton /> */}
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}
