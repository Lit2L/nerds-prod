import Image from 'next/legacy/image'

function Logo({ className }: { className?: string }) {
  return (
    <Image
      src='/logo.png'
      alt='Nerds Kickboxing Club'
      width={320}
      height={200}
      priority
      className='rounded-full'
    />
  )
}

export default Logo
