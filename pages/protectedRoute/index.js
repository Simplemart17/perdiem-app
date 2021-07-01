import { useRouter } from 'next/router'

export default function protectedRoute(WrappedComponent) {
  return (props) => {
    if (typeof window !== 'undefined') {
      const Router = useRouter()

      if (!props.profile) {
        Router.replace('/login')
        return null
      }
      return <WrappedComponent {...props} />
    } else {
      return null
    }
  }
}
