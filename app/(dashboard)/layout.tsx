'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { CircleIcon, Home, LogOut } from 'lucide-react'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { useUser } from '@/lib/auth'
import { signOut } from '@/app/(login)/actions'
import { useRouter } from 'next/navigation'
import { Navbar } from '@/components/Navbar'

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<section className='min-h-screen max-w-full relative z-0'>
			<Navbar />

			{children}
		</section>
	)
}
