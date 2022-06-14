import type { NextPage } from 'next'
import Link from 'next/link'


const Home: NextPage = () => {
  return (
    <div>
     <h1>Hello</h1>
     <Link href='/admin'>Go to admin</Link>
     <br />
     <Link href='/admin/dashboard'>Go to dashboard</Link>
     <br />
     <Link href='/client'>Go to client</Link>
    </div>
  )
}

export default Home
