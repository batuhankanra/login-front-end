import React from 'react'

export default function Informations() {
  return (
    <div className='py-10'>
      <div className=' rounded-md'>
        <h1 className='baslik p-5 w-full text-3xl border-b'>Batuhan Kanra</h1>
      </div>
      <p className='py-2 text-lg font-medium'>
        Bu proje kullanici giris ve kayit olmak uzerine kurulu bir projedir kendimi login yapabilcegim keyifli ve baya karmasik olan bir proje.
        Bu projede kendimi gelistirmek icin arka tarafta cok fazla yeni seyler ogrendim nodejs gercekten kolaylikmis arka tarafta beni zorlayan en cok sey
        jwt oldu neden mi cunku cok fazla secenegim vardi bunlardan en buyuk sorunum arka tarafta olusturdugum login tokenini on tarafta kullanici bilgilerini almakta zorlaniyordum
        bunu da cok fazla yolla cozdum ama performans olarak hangisini secmem gerektigini bilmedigimden olabildigince az istek atarak clientte calisma olusturmak istedim bunuda,
        direk jwt den username alarak clientte ramda tutulmasini sagladim boylelikle sorunu cozdum , tabi daha detayli bilgiler almak icinde profile bilgilerini direk backend istek atarak bilgileri alabildim .Kullanicilari yetkilendirmek de zor oldu bunun icin backendden baska seyler almak zorunda kaldim 
        genelde backend de degisik apiler kullanarak yaptim baska oyle takildigim bi problem olmadi 
      </p>
    </div>
  )
}
