import React, { useState } from 'react';
import { RiDeleteBin5Line } from "react-icons/ri";
import { HiUpload } from "react-icons/hi";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { GrStatusGood } from "react-icons/gr";

const Investorcard = ({head,def,fl}) => {
    const [fileName, setFileName] = useState(def);
    const [loading, setLoading] = useState(false);

    const handleFileUpload = () => {
        setLoading(true);
        const input = document.createElement('input');
        input.type = 'file';
        input.addEventListener('change', handleFile);
        input.click();
    };

    const handleFile = (e) => {
        const file =  e.target.files[0];
        if (file) {
            setFileName(file.name);
            setLoading(false);
        }
    };

    return (
        <div className='h-[95px] w-[300px] flex flex-col gap-2 border items-center justify-center rounded border-[#BDBDBD] shadow-md py-4'>
            <div className="text-center">{head}</div>
            <input
            type='text'
            className='text-center w-[99%] border rounded-md border-[#BDBDBD80] shadow-md'
            value={fileName}
            disabled={fl === '0'} // Disable input if fl is 0
            onChange={(e) => setFileName(e.target.value)}
            />
            <div className={`flex items-center ${fl === '0' ? 'flex-start' : 'flex-end'} w-full justify-between`}>
                {fl === '0' &&
                    <>
                        <RiDeleteBin5Line className='cursor-pointer text-[#DF4C3F]' onClick={() => setFileName(def)} />
                        <div className="flex justify-center items-center">
                            <HiUpload className='text-[#7F39EB] cursor-pointer w-4 h-4' onClick={handleFileUpload} />
                            <div className="cursor-pointer w-[30px] h-[18px]" onClick={handleFileUpload}>Upload</div>
                        </div>
                    </>
                }
                <div className='flex gap-2 mr-2 justify-center items-center'>
                    {loading && <AiOutlineLoading3Quarters className='text-[#7F39EB]' />}
                    <div className='flex justify-center items-center '>
                        <GrStatusGood className='text-[#285B52]' />
                        <div>success</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Investorcard;
