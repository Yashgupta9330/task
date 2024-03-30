import React, { useState } from 'react';

const Investorcard = () => {
    const [fileName, setFileName] = useState('company.com');
    const [loading,setLoading]=useState(false)
    const handleFileUpload = () => {
        setLoading(true)
        const input = document.createElement('input');
        input.type = 'file';
        input.addEventListener('change', handleFile);
        input.click();
    };

    const handleFile = (e) => {
        const file = e.target.files[0];
        console.log(file);
        setFileName(file.name);
        setLoading(false)
    };

    return (
        <div className='h-[91px] w-[216px] flex flex-col gap-2 border items-center justify-center rounded  border-[#BDBDBD] shadow-md'>
            <div className="text-center">Company URL</div>
            <div className='text-center w-[99%] border rounded-md  border-[#BDBDBD80] shadow-md'>{fileName}</div>
            <div className='flex justify-between'>
             <button onClick={()=>setFileName('company@url')}>DELETE</button>
             <button onClick={handleFileUpload}>Upload</button>
             <div className='flex gap-1'>
                {loading ? (
                <div>loading</div>
                ):(
               <div>success</div>
                )
               }
             </div>
            </div>
        </div>
    );
};

export default Investorcard;
