import { getPayload } from "payload";
import configPromise from "@payload-config";
import Image from "next/image";

export default async function HomePage() {

  const payload = await getPayload({config: configPromise});
  const media = await payload.find({
    collection: 'media',
  });

  const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL || '';

  
  return (
    <div className="home">
        <div className="container flex flex-col mx-auto my-10">
            <h1 className="text-3xl font-mono">Payload Blog Prototype</h1>

            <div className="flex flex-col gap-4">
              {media && media.docs.map((doc) => (
                <div key={doc.id}>
                  <h2>{doc.filename}</h2>
                  <Image src={`${baseUrl}${doc.url}`} alt="" width={doc.width || 100} height={doc.height || 100} />
                </div>
              ))}
            </div>
        </div>
    </div>
  )
}
