import type { NextPage } from 'next'
import Link from 'next/link'


const Home: NextPage = () => {
  return (
    <div>
     <h1>Hello</h1>
     <Link href='/test'>Go to test</Link>
    </div>
  )
}

export default Home
