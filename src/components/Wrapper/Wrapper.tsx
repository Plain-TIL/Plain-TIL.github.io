import { Suspense } from "react"

const Loading = () => {
  return (
    <div>
      <p>Loading....</p>
    </div>
  )
}

export const Wrapper = ({ children }: { children: React.ReactNode}) => {
  return (
    <Suspense fallback={<Loading />}>
      {children}
    </Suspense>
  )
}