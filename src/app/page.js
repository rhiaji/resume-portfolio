import Profile from '@/components/Profile'
import Content from '@/components/Content'

export default function Home() {
    return (
        <main className="flex flex-col gap-5 items-center p-14 xl:flex-row xl:justify-center xl:items-start">
            <Profile />
            <Content />
        </main>
    )
}
