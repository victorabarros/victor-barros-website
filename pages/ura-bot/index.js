export default function UraBot() {
  return null
}

export async function getServerSideProps() {
  return {
    redirect: {
      destination: "https://api.uraniumstockbot.com/",
      permanent: false,
    },
  }
}
