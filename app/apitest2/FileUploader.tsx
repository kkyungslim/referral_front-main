'use client';

// import { uploadFile } from "@/lib/jiwoo_test/TEST_API";
import { Button } from "@/components/ui/button";
import { useRef, useState } from 'react';

const FileUploader = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);

  function openFileInput() {
    fileInputRef.current?.click();
  }

  function onInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const files = e.target.files;
    if (files) {
      setFile(files[0]);
    }
  }

  return (
    <div>
      <input ref={fileInputRef} type="file" hidden onChange={onInputChange} />
      <Button
        variant={'outline'}
        className="rounded-lg text-base"
        onClick={openFileInput}
      >
        파일 선택
      </Button>
      {file && (
        <div>
          <span>{file.name}</span>
        </div>
      )}
      <Button
        variant={'outline'}
        className="rounded-lg text-base"
        onClick={() => {
          if (!file) {
            alert('파일 없슴')
            return;
          }
          // uploadFile(file).then(res => {
          //   console.log(res);
          //   setFile(null);
          // })
        }}
      >
        업로드
      </Button>
    </div>
  );
};

export default FileUploader;
