import {ref, uploadBytesResumable} from "firebase/storage"
import {useState} from "react";
import { storage } from "../firebase";

const useStorage = () => {
      const [progress, setProgress] = useState<number>(0)
      const [error, setError] = useState<Error | null>(null)
      const [url, setUrl] = useState<string | null>(null)

      const startUpload = (file: File) => {
            if(!file) {
                  return
            }
            const storageRef = ref(storage, "");
            const uploadTask = uploadBytesResumable(storageRef, file);
      }
      return {
            progress, error, url, startUpload
      }
}