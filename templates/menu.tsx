'use client'

import { Separator } from '@/components/ui/separator'
import { AnimatedMembersButton } from '@/components/magicui/AnimatedMembersButton'

export const Menu = () => {
  return (
    <section id='menu' className='w-full h-full relative '>
      <div className=' px-0 md:px-12 py-20 bg-gray-600 z-20 '>
        <div className='mx-auto max-w-3xl space-y-6 text-center'>
          <h2 className='text-3xl font-bold font-heading tracking-tight md:text-5xl'>
            Menu
          </h2>
          <p className='leading-relaxed text-muted-foreground md:text-xl'>
            Check out what we offer and ask us about our specials!
          </p>
        </div>
        <Separator className='' />

        <div className='flex justify-between border-b p-3 md:p-6'>
          <div className='flex w-1/3 flex-col gap-3'>
            <p className='text-md font-semibold'>Membership </p>
            <ul className='indent-6 space-y-6 md:p-6'>
              <li className='text-sm '>• Access to All Kickboxing classes</li>
              <li className='text-sm  '>• 1 Hr Private Group Sessions</li>
              <li className='text-sm '>• Include up to 6 Participants</li>
              <li className='text-sm  '>• Customized Training</li>
              <li className='text-sm  '>
                • Fitness, Technique, Strategy, Video Analysis, Pad/Boxing Mitt
                Training...
              </li>
            </ul>
          </div>
          <p className='text-emerald-500 font-serif text-md w-1/3 text-end'>
            $125/month
          </p>
        </div>
        <div className='flex justify-between p-3 md:p-6'>
          <div className='flex w-1/3 flex-col gap-3'>
            <p className='text-md font-semibold'>Private Group Session</p>
            <ul className='indent-6 space-y-6 md:p-6'>
              <li className='text-sm font-semibold sm:text-md '>
                1 Hr Private Group Sessions
              </li>
              <li className='text-sm sm:text-md'>
                • Include up to 6 Participants
              </li>
              <li className='text-sm  '>• Customized Training</li>
              <li className='text-sm  '>
                • Fitness, Technique, Strategy, Video Analysis, Pad/Boxing Mitt
                Training...
              </li>
            </ul>
          </div>
          <p className='capitalize text-md w-1/3 text-end'>$125/session</p>
        </div>
        <Separator className='' />
        <div className='flex justify-between p-3 md:p-6'>
          <div className='flex w-1/3 flex-col gap-3'>
            <p className='text-md font-semibold'>Private Session(1-on-1)</p>
            <ul className='indent-6 space-y-6 md:p-6'>
              <li className='text-sm'>• 1 hr Private Session</li>
              <li className='text-sm '>• Customized Training</li>
              <li className='text-sm '>
                • Fitness, Technique, Strategy, Video Analysis, Pad/Boxing Mitt
                Training...
              </li>
            </ul>
          </div>
        </div>
        <div className='w-full flex '>
          <AnimatedMembersButton />
        </div>
        <Separator className='mb-6' />
      </div>
    </section>
  )
}
