'use client'

import { useState } from "react";
import LoginForm from "@/app/ui/home/login";
import QrScanner from "@/app/ui/checker/camera-scanner";
import Image from "next/image";

export default function HomePage() {
  const [qrData, setQrData] = useState<string | null>(null);

  return (
    <div className="bg-[url(/afrin.jpg)] bg-cover">
      <div className="font-sans flex flex-col items-center justify-center min-h-screen bg-black/70 text-white p-8 sm:p-20">
        <h1 className="text-4xl font-bold mb-4">معهد عفرين يرحب بك</h1>
        {/* <p className="text-lg mb-8 text-center max-w-2xl">
          اكتشف دوراتنا ومواردنا التعليمية لتحسين مهاراتك ومعرفتك.
        </p> */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-6">
          <div className="bg-blue-100 p-4 rounded-lg shadow-md w-full sm:w-1/3 text-center">
            <Image src="/student.png" width={150} height={150} alt="QR Code for Student" className="mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-blue-700 mb-2">الملف الشخصي للطالب</h3>
            <p className="text-sm text-gray-600 mb-2">التقط صورة رمز QR لبدء المسح أو انقر على الزر أدناه</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={() => setQrData('a46348da-e803-489d-af9f-a0f16b238bd7')}>تجربة الآن</button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="font-sans grid items-center justify-items-center gap-4">
              <QrScanner onScan={(data) => { if (!data) return; setQrData(data); }} setQrData={setQrData || (() => { })} />
            </div>
            {qrData && <LoginForm id={qrData} />}
            <div className="text-center mt-4 text-gray-700">قم بمسح رمز QR للبدء</div>
          </div>
          <div className="bg-green-100 p-4 rounded-lg shadow-md w-full sm:w-1/3 text-center">
            <Image src="/admin.png" width={150} height={150} alt="QR Code for Admin" className="mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-green-700 mb-2">الملف الشخصي للمسؤول</h3>
            <p className="text-sm text-gray-600 mb-2">التقط صورة رمز QR لبدء المسح أو انقر على الزر أدناه</p>
            <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={() => setQrData('62e9597e-510b-47e2-bc78-41160efee6bc')}>تجربة الآن</button>
          </div>
        </div>
      </div>
    </div>
  )
}

