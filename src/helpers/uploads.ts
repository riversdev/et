// import fs from 'fs'
// import { v4 as uuid } from 'uuid'

// const { pathname: uploadsPath } = new URL('../uploads', document.URL)
// const extensions: Record<string, string[]> = {
//     img: ['png', 'jpg', 'jpeg', 'gif'],
// }
// const defaultFilePath = `${uploadsPath}/noimage.jpg`

// interface UploadProps {
//     file: File
//     fileType?: string
//     folder?: string
// }

// export const uploadFile = ({ file, fileType = 'img', folder = 'general' }: UploadProps) => new Promise((resolve, reject) => {
//     const validExtensions = extensions[fileType]
//     const [ext] = file.name.split('.').reverse()

//     if (!validExtensions.includes(ext)) return reject(`La extension ${ext} no es permitida. Se permiten solo ${validExtensions}`)

//     const tempName = `${uuid()}.${ext}`
//     const uploadPath = `${uploadsPath}/${folder}/${tempName}`

//     file.mv(uploadPath, (error: Error) => {
//         if (error) reject(error)

//         resolve(tempName)
//     })
// })

// export const deleteFile = ({ file, folder }: UploadProps) => {
//     if (!file || !folder) return

//     const filePath = `${uploadsPath}/${folder}/${file}`

//     if (!fs.existsSync(filePath)) return

//     fs.unlinkSync(filePath)
// }

// export const fileExists = ({ file, folder }: UploadProps) => {
//     if (!file || !folder) return defaultFilePath

//     const filePath = `${uploadsPath}/${folder}/${file}`

//     if (!fs.existsSync(filePath)) return defaultFilePath

//     return filePath
// }