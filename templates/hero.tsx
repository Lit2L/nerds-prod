import { Badge } from '@/components/ui/badge'
import Logo from '@/components/logo'
import { AnimatedJoinButton } from '@/components/magicui/AnimatedJoinButton'
import { AnimatedMembersButton } from '@/components/magicui/AnimatedMembersButton'
import { FlipWordsComponent } from '@/components/magicui/FlipWordsComponent'
import GradualSpacing from '@/components/magicui/gradual-spacing'

export const Hero = () => {
  return (
    <section id='hero' className='w-full relative h-screen  '>
      <div className='flex flex-col items-center justify-evenly container z-10 gap-4 text-center space-y-12 pt-36 h-full'>
        <div className=''>
          <Badge className='font-heading tracking-wide'>
            Kickboxing & Martial Arts Club
          </Badge>
        </div>
        <div className=''>
          <GradualSpacing
            className='text-center text-[#f2f2f2] font-logo text-2xl '
            text='Nerds  Fighting'
          />
        </div>
        <div className='p-6 '>
          <Logo />
        </div>
        <div className='my-12 '>
          <FlipWordsComponent />
        </div>
        <div className='flex w-full gap-6 mt-6 justify-center items-center '>
          <AnimatedJoinButton />
          <AnimatedMembersButton />
        </div>
      </div>
    </section>
  )
}
