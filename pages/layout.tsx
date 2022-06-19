import type { NextPage } from 'next'
import { Experience, Landing, Projects } from '../components'

const Layout: NextPage = () => {
    return (
        <div style={{
            width: "100%", display: "flex", flexDirection: "column", alignItems: "center"
        }}>
            <Landing />
            <Projects />
            <Experience />
        </div >
    )
}

export default Layout
