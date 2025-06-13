import usePing from "../../hooks/queries/usePing";

export const PingComponent = () => {
    const { isLoading, data} = usePing();

  if(isLoading) {
    return (
      <>
        Loading...
      </>
    )
  }
  

  return (
    <>
        Hello {data.data.message}
    </>
  )
}