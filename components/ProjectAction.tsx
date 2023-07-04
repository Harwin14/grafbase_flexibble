'use client'
import { fetchToken } from '@lib/actions'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const ProjectAction = ({ projectId }: { projectId: string }) => {
    const [isDeleting, setIsDeleting] = useState(false)

    const handleDeleteProject = async () => {
        setIsDeleting(true)
        const { token } = await fetchToken()
        
        try {
            
        } catch (error) {
            
        }
    }

    return (
        <>
            <Link href={`/edit-project/${projectId}`} className='flexCenter edit-action_btn'>
                <Image
                    src="/pencile.svg"
                    width={15}
                    height={15}
                    alt='edit'
                />
            </Link>

            <button
                type='button'
                className={`flexCenter delete-action_btn ${isDeleting ? 'bg-gray' : 'bg-primary-purple'}`}
            >
                <Image
                    src="/trash.svg"
                    width={15}
                    height={15}
                    alt='delete'
                />
            </button>
        </>
    )
}

export default ProjectAction