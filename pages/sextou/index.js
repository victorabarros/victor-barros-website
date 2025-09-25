import React from "react"

export default function SextouPage() {
  return null
}

export async function getServerSideProps() {
  return {
    redirect: {
      destination: '/happy-friday',
      permanent: true,
    },
  }
}

