import type { NextPage } from 'next'
import { Experience, Landing, Projects } from '../components'

const Layout: NextPage = () => {
    return (
        <>
            <Landing />
            <Projects />
            <Experience />
        </>
    )
}

export default Layout
