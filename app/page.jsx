import Image from 'next/image'

export default function Home() {
  return (
    <>
      <div className='bg-gray-800 min-h-screen'>
        <div className="flex justify-center">
          <div className='bg-green-400/30 rounded-md shadow-sm mt-5 p-5'>
            <h4 className='text-md text-white font-bold'>วิธีใช้งาน</h4>
            <h4 className='text-md text-white/70 font-medium'>1.นำลิ้งค์ของมังงะหรือตอนที่เราต้องการจะโหลดภาพมาใส่ในช่อง Input แล้วกดตกลง</h4>
            <h4 className='text-md text-white/70 font-medium'>2.เช็คภาพว่ามันตรงตามที่เราต้องการไหม หากภาพทั้งหมดถูกต้องให้กดปุ่มดาวน์โหลด</h4>
          </div>
        </div>

        <div className="flex justify-center mt-5">
          <input className='w-4/12 h-10 p-3 mr-3 text-gray-600 bg-white rounded-sm border border-green-200 transition-all focus:shadow-md focus-visible:outline-none' type="text" placeholder='วางลิ้งค์ตรงนี้' autoComplete='off' />
          <button className='w-32 text-white font-semibold bg-blue-300 rounded-sm transition-all duration-300 ease-out hover:bg-blue-500 hover:shadow-md' type="submit">ตกลง</button>
        </div>

        <div className="block justify-center mt-5">
          <h5 className='text-white text-center m-3'><span className='font-bold'>ชื่อเรื่อง:</span> Isekai Rakuraku Survival ~การเอาตัวรอดแสนง่ายในในต่างโลก ~</h5>
          <Image className='w-96 mx-auto rounded-sm border-2 mb-3' src={'/images/isekai/1.png'} width={1000} height={1000} />
          <Image className='w-96 mx-auto rounded-sm border-2 mb-3' src={'/images/isekai/2.png'} width={1000} height={1000} />
          <Image className='w-96 mx-auto rounded-sm border-2 mb-3' src={'/images/isekai/3.png'} width={1000} height={1000} />
        </div>

        <div className="fixed bottom-0 left-1/2 -translate-y-1/2 -translate-x-1/2">
          <div className='bg-white/70 rounded-full p-5 '>
            <button className='w-96 h-10 text-white font-semibold bg-blue-300 rounded-full transition-all duration-300 ease-out hover:bg-blue-500 hover:shadow-md' type="submit">ดาวน์โหลด</button>
          </div>
        </div>

        <footer className='bg-green-300 p-3 mt-5'>
          <div className="flex justify-center items-center">
            <p className='font-bold'>V-MANGA</p>
          </div>
        </footer>
      </div>
    </>
  )
}
