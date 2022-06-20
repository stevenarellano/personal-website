import type { NextPage } from 'next'
import { Experiences, Landing, Projects } from '../components'

const Layout: NextPage = () => {
    return (
        <div style={{
            width: "100%", display: "flex", flexDirection: "column", alignItems: "center"
        }}>
            <Landing />
            <Projects />
            <Experiences />
        </div >
    )
}

export default Layout
