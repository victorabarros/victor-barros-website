import fs from "fs"
import { useRouter } from "next/router"
import path from "path"

const PROFILE_PATH = {
  beertrain: "profile5.jpg",
  cruise: "profile4.jpg",
  cryptobull: "IMG_2994.jpg",
  hammock: "profile3.jpg",
  kramer: "kramer_profile.jpg",
  miami: "profile2.jpg",
  tampa: "profile.jpeg",
}

export default function ProfilePage() {
  const router = useRouter()
  
  // This component won't render anything since we're handling the response in getServerSideProps
  return null
}

export const getServerSideProps = async ({ query, res }) => {
  const { name } = query

  if (!name || !PROFILE_PATH[name]) {
    return { notFound: true }
  }
  
  const filename = PROFILE_PATH[name]
  const filePath = path.join(process.cwd(), 'public', 'profile', filename)
  
  try {
    const fileBuffer = fs.readFileSync(filePath)
    const fileExtension = path.extname(filename).toLowerCase()
    
    // Set appropriate content type based on file extension
    let contentType = 'image/jpeg'
    if (fileExtension === '.png') contentType = 'image/png'
    if (fileExtension === '.gif') contentType = 'image/gif'
    if (fileExtension === '.webp') contentType = 'image/webp'
    
    res.setHeader('Content-Type', contentType)
    res.setHeader('Cache-Control', 'public, max-age=31536000, immutable')
    res.write(fileBuffer)
    res.end()
    
    return { props: {} }
  } catch (error) {
    return { notFound: true }
  }
}
