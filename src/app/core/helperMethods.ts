import { message } from "antd";
import { useEffect, useState } from "react";

export const useDebounce = (value: string | undefined, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debouncedValue;
};

export const firstLetterCapitalize = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const downloadFile = (fileURL: string) => {
  const fileName = fileURL.substring(fileURL.lastIndexOf('/') + 1)

  fetch(fileURL, {mode: 'cors'})
    .then((response) => {
      if (!response.ok) throw new Error('Network response was not ok')
      return response.blob()
    })
    .then((blob) => {
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.style.display = 'none'
      a.href = url
      a.download = fileName
      document.body.appendChild(a)
      a.click()
      window.URL.revokeObjectURL(url)
    })
    .catch(() => {
      // Fallback method for browsers with strict CORS policies
      const iframe = document.createElement('iframe')
      iframe.style.display = 'none'
      iframe.src = fileURL
      document.body.appendChild(iframe)
      iframe.onload = () => {
        setTimeout(() => {
          document.body.removeChild(iframe)
        }, 1000)
      }
      message.error('An error occurred while downloading the file.')
    })
}


export const getBase64 = (file: FileType): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader()
    file && reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result as string)
    reader.onerror = (error) => reject(error)
  })
  
  export const toAbsoluteUrl = (pathname: string) => pathname;