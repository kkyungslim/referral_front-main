import { Market, Res } from "@/lib/types";
import { DEFAULT_SERVER_URL, TEMP_TEST_URL } from "@/lib/Constants";
import { BingXTestData, FileInfo } from "@/lib/jiwoo_test/types";

export async function BingXTest(): Promise<BingXTestData | undefined> {
  return fetch(TEMP_TEST_URL + '/bingx', {
    next: {
      revalidate: 3600,
    },
  })
    .then((res) => res.json())
    .then((res: Res<BingXTestData>) => {
      if (res?.success === 'success' && Boolean(res?.data)) {
        return res.data!;
      }
      console.error('BingX res:', res);
      return undefined;
    });
}

export async function uploadFile(file: File): Promise<FileInfo | undefined> {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('targetUri', '/test');
  return fetch(DEFAULT_SERVER_URL + '/api/file/upload', {
    method: 'POST',
    body: formData,
    cache: 'no-store',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
    .then((res) => res.json())
    .then((res: Res<FileInfo>) => {
      if (res?.success === 'success') {
        return res.data!;
      }
    })
}