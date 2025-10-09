
const PROFILE_PATH = {
  miami: "https://raw.githubusercontent.com/victorabarros/victor-barros-website/6613e66bac19a0ab41beb2e7935f28057b465ba6/pages/profile/profile2.jpg",
}

export default function SextouPage() {
  return null
}

export async function getServerSideProps() {
  return {
    redirect: {
      destination: PROFILE_PATH.miami,
      permanent: true,
    },
  }
}

