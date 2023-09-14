import {createClient} from "next-sanity"

const projectId="5se35jri";
const dataset="production"
const apiVersion="2023-09-14"

export const client = createClient({
projectId,
dataset,
apiVersion,
useCdn:true,
})